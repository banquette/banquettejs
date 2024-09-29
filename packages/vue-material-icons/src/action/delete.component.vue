<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDelete = /* @__PURE__ */ ((_) => {
    return r('delete', {
        name: 'i-material-delete',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 9h8v10H8z","opacity":"0.3"},[]),h('path',{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"},[])]);
        }
    });
})();

export default IMaterialDelete;
</script>