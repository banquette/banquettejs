<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('settings-cell', {
        name: 'i-material-settings-cell',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 0 12 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 17h8v1H8zM8 2h8v1H8z","opacity":"0.3"},[]),h('path',{d:"M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10zm0-12H8V2h8v1z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '6 0 12 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM6 0v20h12V0H6zm10 16H8V4h8v12z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 0 12 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 0 12 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10zm0-12H8V2h8v1z"},[])]);
return h('svg',{"viewBox":c ? '6 0 12 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"},[])]);
        }
    });
})();
</script>