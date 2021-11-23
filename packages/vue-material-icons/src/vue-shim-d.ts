declare module "*.vue" {
    import { defineComponent } from 'vue';

    const component: ReturnType<typeof defineComponent>;
    // @ts-ignore
    export default component;
}
