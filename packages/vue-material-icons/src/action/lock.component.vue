<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLock = /* @__PURE__ */ ((_) => {
    return r('lock', {
        name: 'i-material-lock',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0z"},[]),h('path',{d:"M0 0h24v24H0z","opacity":"0.87"},[])]),h('path',{d:"M6 20h12V10H6zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2","opacity":"0.3"},[]),h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0z"},[]),h('path',{d:"M0 0h24v24H0z","opacity":"0.87"},[])]),h('path',{d:"M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19A5.01 5.01 0 0 0 7 6v2H4v14h16zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0z"},[]),h('path',{d:"M0 0h24v24H0z","opacity":"0.87"},[])]),h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0z"},[]),h('path',{d:"M0 0h24v24H0z","opacity":"0.87"},[])]),h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"},[])]);
        }
    });
})();

export default IMaterialLock;
</script>