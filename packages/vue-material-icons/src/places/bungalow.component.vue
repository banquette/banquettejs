<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBungalow = /* @__PURE__ */ ((_) => {
    return r('bungalow', {
        name: 'i-material-bungalow',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4.2 3 15.6 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 6.78-3 4.8V19h2v-3h2v3h2v-7.42zM13 14h-2v-2h2z","opacity":"0.3"},[]),h('path',{d:"M13 14h-2v-2h2zm5.1 2.56L17 14.79V21H7v-6.2l-1.1 1.76-1.7-1.06L12 3l7.8 12.5zM15 11.59l-3-4.8-3 4.8V19h2v-3h2v3h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4.58 3.89 14.84 17.11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 16c.55 0 1 .45 1 1v4h3c.55 0 1-.45 1-1v-5.21l.57.92a1.003 1.003 0 0 0 1.7-1.06L12.85 4.36a1 1 0 0 0-1.7 0L4.73 14.65c-.29.47-.15 1.09.32 1.38s1.08.15 1.38-.32L7 14.8V20c0 .55.45 1 1 1h3v-4c0-.55.45-1 1-1m1-3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4.2 3 15.6 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 14h-2v-2h2zm5.1 2.56L17 14.79V21H7v-6.2l-1.1 1.76-1.7-1.06L12 3l7.8 12.5zM15 11.59l-3-4.8-3 4.8V19h2v-3h2v3h2z"},[])]);
return h('svg',{"viewBox":c ? '4.2 3 15.6 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3 4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77 1.7-1.06zm1 11h-2v-2h2z"},[])]);
        }
    });
})();

export default IMaterialBungalow;
</script>