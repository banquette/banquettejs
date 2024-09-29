<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRun = /* @__PURE__ */ ((_) => {
    return r('run', {
        name: 'i-remix-run',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.11 1.5 15.89 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.83 8.79 8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.62 2.62 0 0 1 2.427 1.82q.279.874.51 1.182A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.402-2.547l-.697 3.956L15 16.17V23h-2v-5.898l-2.27-1.904-.727 4.127-6.894-1.215.348-1.97 4.924.868zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
return h('svg',{"viewBox":c ? '3.11 1.5 15.89 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.83 8.79 8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.62 2.62 0 0 1 2.427 1.82q.279.874.51 1.182A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.402-2.547l-.581 3.297L15 15.67V23h-2v-5.986l-2.05-1.987-.947 4.298-6.894-1.215.348-1.97 4.924.868zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
        }
    });
})();

export default IRemixRun;
</script>