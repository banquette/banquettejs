<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDrizzle = /* @__PURE__ */ ((_) => {
    return r('drizzle', {
        name: 'i-remix-drizzle',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 21.99 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001zm-8-2h2v4H9zm4 3h2v4h-2z"},[])]);
return h('svg',{"viewBox":c ? '1 2 21.99 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 18v3H9v-3a8 8 0 1 1 7.458-10.901A5.5 5.5 0 1 1 17.5 18zm2 2h2v3h-2z"},[])]);
        }
    });
})();

export default IRemixDrizzle;
</script>