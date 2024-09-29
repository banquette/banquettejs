<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPinInvoke = /* @__PURE__ */ ((_) => {
    return r('pin-invoke', {
        name: 'i-material-pin-invoke',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12v8H2V4h12v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3m-10.53 5.12-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3M9.34 15.66c.39.39 1.02.39 1.41 0l2.12-2.12 1.27 1.27c.32.31.86.09.86-.36V10.5c0-.28-.22-.5-.5-.5h-3.95c-.45 0-.67.54-.35.85l1.27 1.27-2.12 2.12c-.4.39-.4 1.03-.01 1.42"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3M9.34 12h2.24l-2.95 2.95 1.41 1.41L13 13.42v2.24h2V10H9.34z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3m-10.53 5.12-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34z"},[])]);
        }
    });
})();

export default IMaterialPinInvoke;
</script>