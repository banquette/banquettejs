import 'reflect-metadata';
import { Constructor } from "@banquette/utils-type/types";
import { mount } from '@vue/test-utils';
import { nextTick } from "vue";
import { Component } from "../decorator/component.decorator";
import { Composable } from "../decorator/composable.decorator";
import { Expose } from "../decorator/expose.decorator";
import { Import } from "../decorator/import.decorator";
import { Prop } from "../decorator/prop.decorator";
import { Ref } from "../decorator/ref.decorator";
import { Watch, ImmediateStrategy } from "../decorator/watch.decorator";
import { c } from "../utils/converters";
import { getChildComponentInstance, getMountOptions } from "./utils";

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
    const wrapper = mount<ButtonComponent>(getMountOptions(ButtonComponent));

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
        const wrapper = mount(getMountOptions(ButtonComponent), {
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
        const wrapper = mount(getMountOptions(App), {})
        expect(wrapper.find('#url').text()).toEqual('/test');
    });
});


describe('@Watch()', () => {
    test('watch can take a function source',  async () => {
        @Component({name: 'test', template: `<div id="count">{{ callCount }}</div>`})
        class Test {
            @Expose() public callCount = 0;

            @Prop() private foo!: string;
            @Prop() private bar!: string;

            @Watch(function() {
                return ['foo', 'bar'];
            }, {immediate: true})
            public onFooChangeAsync() {
                ++this.callCount;
            }
        }
        @Component({
            name: 'app',
            components: [Test],
            template: `<test></test>`
        })
        class App { }
        const wrapper = mount(getMountOptions(App), {})
        await nextTick();
        expect(wrapper.find('#count').text()).toEqual('1');
    });

    test('watch function can react to external changes',  async () => {
        @Component({name: 'test', template: false})
        class Test {
            @Expose() public callsCount = 0;
            @Expose() public callsResults: string[] = [];

            @Prop() private foo!: string;
            @Prop() private bar!: string;

            // So Vue can see the property.
            @Ref() public condition: boolean = false;

            @Watch(function(this: Test) {
                const res =  this.condition ? 'foo' : 'bar';
                this.callsResults.push(res);
                return res;
            }, {immediate: true})
            public onFooChangeAsync() {
                ++this.callsCount;
            }
        }
        @Component({
            name: 'app',
            components: [Test],
            template: `<test></test>`
        })
        class App { }
        const wrapper = mount(getMountOptions(App), {})
        const testComponent = getChildComponentInstance(wrapper, Test);
        expect(testComponent.callsResults).toStrictEqual(['bar']);
        await nextTick();
        testComponent.condition = true;
        await nextTick();
        expect(testComponent.callsResults).toStrictEqual(['bar', 'foo']);
        expect(testComponent.callsCount).toEqual(2);
    });

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
        const wrapper = mount(getMountOptions(App), {})
        await nextTick();
        expect(wrapper.find('#count').text()).toEqual('1');
    });

    test('immediate trigger is synchronous by default but can be made async',  async () => {
        @Component({name: 'test', template: `<div id="count">{{ callCount }}</div>`})
        class Test {
            @Expose() public callCount = 0;

            @Prop() private foo!: string;
            @Prop() private bar!: string;

            @Watch('foo', {immediate: ImmediateStrategy.NextTick})
            public onFooChangeAsync() {
                ++this.callCount;
            }

            @Watch('bar', {immediate: true})
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
        const wrapper = mount(getMountOptions(App), {})
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
        const wrapper = mount(getMountOptions(App), {})
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
        const wrapper = mount(getMountOptions(App), {})
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
        const wrapper = mount(getMountOptions(App), {})
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
        const wrapper = mount(getMountOptions(App), {})
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
        const wrapper = mount(getMountOptions(App), {});
        const testComponent = getChildComponentInstance(wrapper, Test);
        expect(wrapper.find('#url').text()).toEqual('/test');
        expect(wrapper.find('#host-from-template').text()).toEqual('/test');
        expect(testComponent.hostValue()).toBeUndefined();
    });
});

describe('Component inheritance', () => {
    test('Basic inheritance', () => {
        @Component({
            name: 'bar',
            template: '<div></div>'
        })
        class Bar { }

        @Component({
            name: 'foo',
            template: `
                <div id="foo">{{ foo }}</div>`
        })
        class Foo extends c(Bar) {
            @Expose() public foo: string = 'foo';
        }

        const wrapper = mount(getMountOptions(Foo), {});
        expect(wrapper.find('#foo').text()).toEqual('foo');
    });

    test('String template inheritance', () => {
        @Component({
            name: 'bar',
            template: '<div id="foo">{{ foo }}</div>'
        })
        class Bar {
            @Expose() public foo: string = 'foo';
        }

        @Component({
            name: 'foo',
            template: 'inherit'
        })
        class Foo extends c(Bar) {

        }
        const wrapper = mount(getMountOptions(Foo), {});
        const el = wrapper.find('#foo');
        expect(el.text()).toEqual('foo');
    });
});
