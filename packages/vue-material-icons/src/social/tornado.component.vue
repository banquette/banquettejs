<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('tornado', {
        name: 'i-material-tornado',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.1 13h5.8l1.74-3H7.36zm2.9 5.01L13.74 15h-3.48zM4.47 5l1.74 3h11.58l1.74-3z","opacity":"0.3"},[]),h('path',{d:"m1 3 11 19L23 3H1zm11 15.01L10.26 15h3.48L12 18.01zM14.9 13H9.1l-1.74-3h9.27l-1.73 3zM6.21 8 4.47 5h15.06l-1.74 3H6.21z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.47 3 19.07 17.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.11 8 1.16-2c.77-1.33-.19-3-1.73-3H4.47c-1.54 0-2.5 1.67-1.73 3L3.9 8h16.21zM7.95 15l2.32 4.01c.77 1.33 2.69 1.33 3.46 0L16.05 15h-8.1zm11-5H5.05l1.74 3h10.42z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 3H1l11 19L23 3zm-3.47 2-1.74 3H6.21L4.47 5h15.06zm-9.27 10h3.48L12 18.01 10.26 15zm4.64-2H9.1l-1.74-3h9.27l-1.73 3z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zm11-5H5.05l1.74 3h10.42z"},[])]);
        }
    });
})();
</script>