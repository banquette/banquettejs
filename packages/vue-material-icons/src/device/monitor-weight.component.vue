<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMonitorWeight = /* @__PURE__ */ ((_) => {
    return r('monitor-weight', {
        name: 'i-material-monitor-weight',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 8.5h1v1h-1zm-3 0h1v1h-1zm1.5 0h1v1h-1z","opacity":"0.3"},[]),h('path',{d:"M5 19h14V5H5zm7-13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3","opacity":"0.3"},[]),h('path',{d:"M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m1-3.5h1v1h-1zm-1.5 0h1v1h-1zm-1.5 0h1v1h-1z"},[]),h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3H3v18h18zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41 3.23-2.42 6.83 1.19 4.4 4.41"},[]),h('path',{d:"M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"},[]),h('circle',{"cx":"10.5","cy":"9",r:"0.5"},[]),h('circle',{"cx":"13.5","cy":"9",r:"0.5"},[]),h('circle',{"cx":"12","cy":"9",r:"0.5"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-1 3.5h-1v-1h1zm1.5 0h-1v-1h1zm1.5 0h-1v-1h1z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"},[]),h('path',{d:"M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z"},[])]);
        }
    });
})();

export default IMaterialMonitorWeight;
</script>