<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('navigation', {
        name: 'i-material-navigation',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4.5 2 15 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7.72 17.7 3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z","opacity":"0.3"},[]),h('path',{d:"m4.5 20.29.71.71L12 18l6.79 3 .71-.71L12 2 4.5 20.29zm8.31-4.12-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4.5 2 15 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4.85 3.64 14.3 16.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12.93 4.26 6.15 14.99c.34.83-.51 1.66-1.33 1.29l-5.34-2.36c-.26-.11-.55-.11-.81 0l-5.34 2.36c-.82.36-1.67-.46-1.33-1.29l6.15-14.99c.33-.83 1.51-.83 1.85 0z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4.5 2 15 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 7.27 4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53L12 7.27M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"},[])]);
return h('svg',{"viewBox":c ? '4.5 2 15 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"},[])]);
        }
    });
})();
</script>