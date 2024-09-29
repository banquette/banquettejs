<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFilterAltOff = /* @__PURE__ */ ((_) => {
    return r('filter-alt-off', {
        name: 'i-material-filter-alt-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.83 6h8.12l-3.57 4.55z","opacity":"0.3"},[]),h('path',{d:"m16.95 6-3.57 4.55 1.43 1.43c1.03-1.31 4.98-6.37 4.98-6.37A.998.998 0 0 0 19 4H6.83l2 2zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.05 4H6.83l7.97 7.97zM2.81 2.81 1.39 4.22 10 13v7h4v-3.17l5.78 5.78 1.41-1.42z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 3.22 18.97 18.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.79 5.61A.998.998 0 0 0 19 4H6.83l7.97 7.97zm.7 14.88L3.51 3.51A.996.996 0 1 0 2.1 4.92L10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-1.17l5.07 5.07c.39.39 1.02.39 1.41 0s.4-1.02.01-1.41"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.95 6-3.57 4.55 1.43 1.43c1.03-1.31 4.98-6.37 4.98-6.37A.998.998 0 0 0 19 4H6.83l2 2zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.79 5.61A.998.998 0 0 0 19 4H6.83l7.97 7.97zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41z"},[])]);
        }
    });
})();

export default IMaterialFilterAltOff;
</script>