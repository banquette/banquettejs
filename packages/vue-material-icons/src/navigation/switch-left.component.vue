<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSwitchLeft = /* @__PURE__ */ ((_) => {
    return r('switch-left', {
        name: 'i-material-switch-left',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.5 8.62v6.76L5.12 12z","opacity":"0.3"},[]),h('path',{d:"M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.42 6.41 17.17 11.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.5 8.62v6.76L5.12 12zm-4.79 2.67a.996.996 0 0 0 0 1.41l4.59 4.59c.62.63 1.7.19 1.7-.7V7.41c0-.89-1.08-1.34-1.71-.71zM14 7.41v9.17c0 .89 1.08 1.34 1.71.71l4.59-4.59a.996.996 0 0 0 0-1.41L15.71 6.7c-.63-.62-1.71-.18-1.71.71"},[])]);
return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z"},[])]);
        }
    });
})();

export default IMaterialSwitchLeft;
</script>