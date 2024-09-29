<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMenuUnfold = /* @__PURE__ */ ((_) => {
    return r('menu-unfold', {
        name: 'i-remix-menu-unfold',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3.9 19 16.1' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18v2H3v-2zM17.404 3.904 22 8.5l-4.596 4.596-1.414-1.414L19.172 8.5 15.99 5.318zM12 11v2H3v-2zm0-7v2H3V4z"},[])]);
return h('svg',{"viewBox":c ? '3 3.55 19 16.45' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18v2H3v-2zM17.05 3.55 22 8.5l-4.95 4.95zM12 11v2H3v-2zm0-7v2H3V4z"},[])]);
        }
    });
})();

export default IRemixMenuUnfold;
</script>