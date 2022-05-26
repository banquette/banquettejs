import { getObjectValue } from "@banquette/utils-object/get-object-value";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { DirectiveBinding, createApp, App, reactive, h } from "vue";
import { default as PopoverComponent } from "./popover.component.vue";

interface InstanceDescriptorInterface {
    el: HTMLElement;
    app: App;
    options: OptionsInterface;
}

interface GroupInterface {
    count: number;
    instance: InstanceDescriptorInterface;
}

interface OptionsInterface {
    target: Element;
    group: string|null;
    props: Record<string, any>;
}

@Directive({name: 'bt-popover'})
export class PopoverDirective {
    private static Groups: Record<string, GroupInterface> = {};

    private instance: InstanceDescriptorInterface|null = null;

    public created(el: Element, bindings: DirectiveBinding) {
        this.getOrCreateInstance(el, bindings);
    }

    public updated(el: Element, bindings: DirectiveBinding) {
        this.getOrCreateInstance(el, bindings);
    }

    public unmounted(): void {
        if (this.instance !== null) {
            if (this.instance.options.group !== null) {
                this.removeFromGroup(this.instance.options.group);
            } else {
                this.instance.app.unmount();
            }
            this.instance = null;
        }
    }

    private getOrCreateInstance(el: Element, bindings: DirectiveBinding): InstanceDescriptorInterface {
        const options = this.resolveOptions(el, bindings);

        if (this.instance !== null && this.instance.options.group !== null && this.instance.options.group !== options.group) {
            this.removeFromGroup(this.instance.options.group);
        }
        if (options.group !== null) {
            this.instance = this.addToGroup(el, options.group, () => this.createInstance(options));
        }
        if (this.instance === null) {
            this.instance = this.createInstance(options);
        } else {
            // The targets from the newly created options are not up to date.
            // The target is not under the user control, so there is no way they changed it.
            // But if multiple directives have been set with the same group, multiple targets have been added to the instance.
            // So it's necessary to copy the targets from the instance before merging the new options with the existing props.
            // Otherwise the popover will only have 1 target (the element on which the current directive is set).
            options.props.target = this.instance.options.props.target;
            Object.assign(this.instance.options.props, options.props);
        }
        return this.instance;
    }

    private createInstance(options: OptionsInterface): InstanceDescriptorInterface {
        // mount() clears its container before adding the component to it.
        // So a wrapper is required to preserve the content of the element the tooltip has been setup on.
        const container = document.createElement('div');

        // Make the wrapper absolute, so it doesn't disturb the document's flow
        container.style.position = 'absolute';

        const app = createApp({
            /**
             * Wrap the component into a root component so props can be reactive.
             * @see https://github.com/vuejs/core/issues/4874#issuecomment-959008724
             */
            render: () => h(PopoverComponent, options.props)
        });
        options.target.append(container);
        app.mount(container);
        return {el: container, app, options};
    }

    private addToGroup(el: Element, group: string, factory: () => InstanceDescriptorInterface): InstanceDescriptorInterface {
        if (!isUndefined(PopoverDirective.Groups[group])) {
            PopoverDirective.Groups[group].count++;
            PopoverDirective.Groups[group].instance.options.props.target.push(el);
            return PopoverDirective.Groups[group].instance;
        }
        const newInstance = factory();
        PopoverDirective.Groups[group] = {count: 1, instance: newInstance};
        return newInstance;
    }

    private removeFromGroup(group: string): void {
        if (!(--PopoverDirective.Groups[group].count)) {
            PopoverDirective.Groups[group].instance.app.unmount();
            delete PopoverDirective.Groups[group];
        }
    }

    private resolveOptions(el: Element, bindings: DirectiveBinding): OptionsInterface {
        const props = isObject(bindings.value) ? bindings.value : {content: String(bindings.value)};
        props.target = [el];
        return {
            target: el,
            group: getObjectValue(Object.keys(bindings.modifiers || {}), 0, null),
            props: reactive(props)
        };
    }
}
