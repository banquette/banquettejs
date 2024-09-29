<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNearMe = /* @__PURE__ */ ((_) => {
    return r('near-me', {
        name: 'i-material-near-me',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11.39 12.61.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z","opacity":"0.3"},[]),h('path',{d:"m3 11.51 6.84 2.65L12.48 21h.98L21 3 3 10.53zm14.27-4.78-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.46 3.86 16.69 16.68' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.75 3.94 4.07 10.08c-.83.35-.81 1.53.02 1.85L9.43 14a1 1 0 0 1 .57.57l2.06 5.33c.32.84 1.51.86 1.86.03l6.15-14.67c.33-.83-.5-1.66-1.32-1.32"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33zM21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z"},[])]);
        }
    });
})();

export default IMaterialNearMe;
</script>