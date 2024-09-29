<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTabletMac = /* @__PURE__ */ ((_) => {
    return r('tablet-mac', {
        name: 'i-material-tablet-mac',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 0 19 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 3h15v16H4z","opacity":"0.3"},[]),h('path',{d:"M18.5 0h-14A2.5 2.5 0 0 0 2 2.5v19A2.5 2.5 0 0 0 4.5 24h14a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0m-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m7.5-4H4V3h15z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 0 19 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 0H2v24h19zm-9.5 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m7.5-4H4V3h15z"},[])]);
return h('svg',{"viewBox":c ? '2 0 19 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 0h-14A2.5 2.5 0 0 0 2 2.5v19A2.5 2.5 0 0 0 4.5 24h14a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0m-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m7.5-4H4V3h15z"},[])]);
        }
    });
})();

export default IMaterialTabletMac;
</script>