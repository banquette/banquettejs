<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFlashlightOn = /* @__PURE__ */ ((_) => {
    return r('flashlight-on', {
        name: 'i-material-flashlight-on',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 7.39 2 3V20h4v-9.6l2-3.01V7H8zm4 5.11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M8 4h8v1H8z","opacity":"0.3"},[]),h('path',{d:"M6 2v6l2 3v11h8V11l2-3V2zm10 5.39-2 3.01V20h-4v-9.61l-2-3V7h8zM16 5H8V4h8z"},[]),h('circle',{"cx":"12","cy":"14",r:"1.5"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 4v1h12V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m0 3v1l2 3v9c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-9l2-3V7zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2H6v6l2 3v11h8V11l2-3zm-2 2v1H8V4zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39z"},[]),h('circle',{"cx":"12","cy":"14",r:"1.5"},[])]);
return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 2h12v3H6zm0 5v1l2 3v11h8V11l2-3V7zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"},[])]);
        }
    });
})();

export default IMaterialFlashlightOn;
</script>