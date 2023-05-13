<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('h-3', {
        name: 'i-remix-h-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 4 20.25 16.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 8-.002 2-2.505 2.883a3.75 3.75 0 1 1-4.675 4.334l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"},[])]);
        }
    });
})();
</script>