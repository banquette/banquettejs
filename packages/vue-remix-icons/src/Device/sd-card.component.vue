<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSdCard = /* @__PURE__ */ ((_) => {
    return r('sd-card', {
        name: 'i-remix-sd-card',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 7.828V20h12V4H9.828zm-1.707-1.12L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707zM15 5h2v4h-2zm-3 0h2v4h-2zM9 6h2v3H9z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.293 6.707 9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5v4h2V5zm-3 0v4h2V5zM9 5v4h2V5z"},[])]);
        }
    });
})();

export default IRemixSdCard;
</script>