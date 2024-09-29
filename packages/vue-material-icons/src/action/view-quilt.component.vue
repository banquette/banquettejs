<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialViewQuilt = /* @__PURE__ */ ((_) => {
    return r('view-quilt', {
        name: 'i-material-view-quilt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.33 17H5V7h3.33zm5.34 0h-3.33v-4h3.33zM19 17h-3.33v-4H19zm0-6h-8.67V7H19z","opacity":"0.3"},[]),h('path',{d:"M3 5v14h18V5zm5.33 12H5V7h3.33zm5.34 0h-3.33v-4h3.33zM19 17h-3.33v-4H19zm0-6h-8.67V7H19z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 6v4.5c0 .55-.45 1-1 1h-9.67c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1H20c.55 0 1 .45 1 1m-6.33 12v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1m1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1M8.33 18V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5v14h18V5zm5.33 12H5V7h3.33zm5.34 0h-3.33v-4h3.33zM19 17h-3.33v-4H19zm0-6h-8.67V7H19z"},[])]);
return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 5v6.5H9.33V5zm-6.33 14v-6.5H9.33V19zm1-6.5V19H21v-6.5zM8.33 19V5H3v14z"},[])]);
        }
    });
})();

export default IMaterialViewQuilt;
</script>