import { mount } from '@vue/test-utils';
import { nextTick } from "vue";
import { Component } from "../decorator/component.decorator";
import { Expose } from "../decorator/expose.decorator";
import { Prop } from "../decorator/prop.decorator";
import { Watch } from "../decorator/watch.decorator";
import { getComponentOptions } from "../utils";
import { Composable } from "../decorator/composable.decorator";
import { Import } from "../decorator/import.decorator";
import { getChildComponentInstance } from "./utils";

@Component({
    name: 'button',
    template: `<div>
        <span id="count">count: {{ count }}</span>
        <span id="invisibleCount">invisibleCount: {{ invisibleCount }}</span>
    </div>`
})
class ButtonComponent {
    @Prop({type: Number, default: 0}) public defaultCount!: number;

    @Expose() public count: number = 0;
    public invisibleCount: number = 0;

    public beforeMount(): void {
        this.count = this.invisibleCount = this.defaultCount;
    }

    @Expose() public increment(): void {
        this.count++;
        this.invisibleCount++;
    }

    public invisibleIncrement(): void {
        this.increment();
    }
}

describe('@Expose()',  () => {
    const wrapper = mount(getComponentOptions(ButtonComponent));

    test('Exposing public property', async () => {
        expect(wrapper.find('#count').text()).toContain('count: 0');
        wrapper.vm.increment();
        await nextTick();
        expect(wrapper.find('#count').text()).toContain('count: 1');
    });

    test('Access non exposed property', () => {
        expect(wrapper.find('#invisibleCount').text()).toContain('invisibleCount:');
    });
});

describe('@Prop()', () => {
    test('displays message',  () => {
        const wrapper = mount(getComponentOptions(ButtonComponent), {
            propsData: {
                defaultCount: 10
            }
        })
        expect(wrapper.find('#count').text()).toContain('count: 10');
    });

    test('custom prop name',  () => {
        @Component({name: 'test', template: `<div id="url">{{ url }}</div>`})
        class Test {
            @Expose() @Prop({name: 'custom:url', type: String}) private url!: string;
        }

        @Component({
            name: 'app',
            components: [Test],
            template: `<test custom:url="/test"></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {})
        expect(wrapper.find('#url').text()).toEqual('/test');
    });
});


describe('@Watch()', () => {
    test('watching multiple attributes creates only 1 watcher',  async () => {
        @Component({name: 'test', template: `<div id="count">{{ callCount }}</div>`})
        class Test {
            @Expose() public callCount = 0;

            @Prop() private foo!: string;
            @Prop() private bar!: string;

            @Watch(['foo', 'bar'], {immediate: true})
            public onFooBarChange() {
                ++this.callCount;
            }
        }

        @Component({
            name: 'app',
            components: [Test],
            template: `<test></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {})
        await nextTick();
        expect(wrapper.find('#count').text()).toEqual('1');
    });

    test('immediate trigger is asynchronous by default but can be made sync using the `synchronous` option',  async () => {
        @Component({name: 'test', template: `<div id="count">{{ callCount }}</div>`})
        class Test {
            @Expose() public callCount = 0;

            @Prop() private foo!: string;
            @Prop() private bar!: string;

            @Watch('foo', {immediate: true})
            public onFooChangeAsync() {
                ++this.callCount;
            }

            @Watch('bar', {immediate: true, synchronous: true})
            public onBarChangeSync() {
                this.callCount += 2;
            }
        }
        @Component({
            name: 'app',
            components: [Test],
            template: `<test></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {})
        expect(wrapper.find('#count').text()).toEqual('2');
        await nextTick();
        expect(wrapper.find('#count').text()).toEqual('3');
    });
});

describe('@Import()', () => {
    @Composable()
    class Remote {
        @Prop({type: String, required: true, default: '/default'}) public url!: string;
    }

    test('basic import with auto prefix',  () => {
        @Component({name: 'test', template: `<div id="url">{{ remote.url }}</div>`})
        class Test {
            @Expose() @Import(Remote) private remote!: Remote;
        }

        @Component({
            name: 'app',
            components: [Test],
            template: `<test remote:url="/test"></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {})
        expect(wrapper.find('#url').text()).toEqual('/test');
    });

    test('import with prefix override',  () => {
        @Component({name: 'test', template: `<div id="url">{{ remote.url }}</div>`})
        class Test {
            @Expose() @Import(Remote, 'override') private remote!: Remote;
        }

        @Component({
            name: 'app',
            components: [Test],
            template: `<test override:url="/test"></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {})
        expect(wrapper.find('#url').text()).toEqual('/test');
    });

    test('import with no prefix',  () => {
        @Component({name: 'test', template: `<div id="url">{{ remote.url }}</div>`})
        class Test {
            @Expose() @Import(Remote, false) private remote!: Remote;
        }

        @Component({
            name: 'app',
            components: [Test],
            template: `<test url="/test"></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {})
        expect(wrapper.find('#url').text()).toEqual('/test');
    });

    test('import with alias map',  () => {
        @Component({name: 'test', template: `<div id="url">{{ remote.url }}</div>`})
        class Test {
            @Expose() @Import(Remote, {
                url: 'custom:url'
            }) private remote!: Remote;
        }

        @Component({
            name: 'app',
            components: [Test],
            template: `<test custom:url="/test"></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {})
        expect(wrapper.find('#url').text()).toEqual('/test');
    });

    test('import with composable prop overriding host prop',  () => {
        @Component({name: 'test', template: `
                <div id="url">{{ remote.url }}</div>
                <div id="host-from-template">{{ url }}</div>
                <div id="host-from-ctrl">{{ hostValue() }}</div>
            `})
        class Test {
            @Prop({type: String, required: true, default: '/default-host'}) public url!: string;
            @Expose() @Import(Remote, false) private remote!: Remote;

            @Expose() public hostValue(): string {
                return this.url;
            }
        }
        @Component({
            name: 'app',
            components: [Test],
            template: `<test url="/test"></test>`
        })
        class App { }
        const wrapper = mount(getComponentOptions(App), {});
        const testComponent = getChildComponentInstance(wrapper, Test);
        expect(wrapper.find('#url').text()).toEqual('/test');
        expect(wrapper.find('#host-from-template').text()).toEqual('/test');
        expect(testComponent.hostValue()).toBeUndefined();
    });
});
