<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShareForward = /* @__PURE__ */ ((_) => {
    return r('share-forward', {
        name: 'i-remix-share-forward',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.5 20.5 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.98 7.98 0 0 0-6.057 2.773A11 11 0 0 1 11 12"},[])]);
return h('svg',{"viewBox":c ? '3 3 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8z"},[])]);
        }
    });
})();

export default IRemixShareForward;
</script>