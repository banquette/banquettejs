<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSwitchVideo = /* @__PURE__ */ ((_) => {
    return r('switch-video', {
        name: 'i-material-switch-video',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 17h12V7H4zm4-8v2h4V9l3 3-3 3v-2H8v2l-3-3z","opacity":"0.3"},[]),h('path',{d:"M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zM16 17H4V7h12z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9.5V5H2v14h16v-4.5l4 4v-13zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V7.91c0-.89-1.08-1.34-1.71-.71zm-5 6V13H7v2.5l-3.15-3.15c-.2-.2-.2-.51 0-.71L7 8.5V11h6V8.5l3.15 3.15c.2.2.2.51 0 .71z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zM16 17H4V7h12z"},[])]);
return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5z"},[])]);
        }
    });
})();

export default IMaterialSwitchVideo;
</script>