<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDetails = /* @__PURE__ */ ((_) => {
    return r('details', {
        name: 'i-material-details',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 8.92 18.6 19H13zm-2 0V19H5.4z","opacity":"0.3"},[]),h('path',{d:"M12 3 2 21h20zm1 5.92L18.6 19H13zm-2 0V19H5.4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.7 4.06 18.59 16.94' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11.13 4.57-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94a.997.997 0 0 0-1.74 0M13 8.92 18.6 19H13zm-2 0V19H5.4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3 2 21h20zm1 5.92L18.6 19H13zm-2 0V19H5.4z"},[])]);
        }
    });
})();

export default IMaterialDetails;
</script>