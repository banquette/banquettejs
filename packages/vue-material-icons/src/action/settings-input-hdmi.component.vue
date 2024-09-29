<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSettingsInputHdmi = /* @__PURE__ */ ((_) => {
    return r('settings-input-hdmi', {
        name: 'i-material-settings-input-hdmi',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 9H7v3.53l2.79 5.58.21.42V20h4v-1.47l.21-.42L17 12.53V9h-1z","opacity":"0.3"},[]),h('path',{d:"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 7V2H6v5H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-.55 0-1 .45-1 1v4.7c0 .2.06.39.17.55L8 19v2c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2l2.83-5.75a1 1 0 0 0 .17-.55V8c0-.55-.45-1-1-1m-2 0h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7H8V4h8z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10z"},[])]);
return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8z"},[])]);
        }
    });
})();

export default IMaterialSettingsInputHdmi;
</script>