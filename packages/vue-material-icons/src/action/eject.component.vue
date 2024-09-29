<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialEject = /* @__PURE__ */ ((_) => {
    return r('eject', {
        name: 'i-material-eject',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8.6 9.07 13h5.86z","opacity":"0.3"},[]),h('path',{d:"M5 17h14v2H5zm7-12L5.33 15h13.34zm0 3.6 2.93 4.4H9.07z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 5.8 14 13.2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 17h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m5.17-10.75-4.8 7.2c-.45.66.03 1.55.83 1.55h9.6c.8 0 1.28-.89.83-1.55l-4.8-7.2a.99.99 0 0 0-1.66 0"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 17h14v2H5zm7-12L5.33 15h13.34zm0 3.6 2.93 4.4H9.07z"},[])]);
return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 17h14v2H5zm7-12L5.33 15h13.34z"},[])]);
        }
    });
})();

export default IMaterialEject;
</script>