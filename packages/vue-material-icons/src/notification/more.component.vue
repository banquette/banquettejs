<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMore = /* @__PURE__ */ ((_) => {
    return r('more', {
        name: 'i-material-more',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.06 5 2.4 12l4.67 7H22V5zq.015 0 0 0M19 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5","opacity":"0.3"},[]),h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7.07L2.4 12l4.66-7H22z"},[]),h('circle',{"cx":"9","cy":"12",r:"1.5"},[]),h('circle',{"cx":"14","cy":"12",r:"1.5"},[]),h('circle',{"cx":"19","cy":"12",r:"1.5"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M24 3H6l-6 9 6 9h18zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.2 3 23.8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L.37 11.45c-.22.34-.22.77 0 1.11l5.04 7.56c.36.52.97.88 1.66.88H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7.07L2.4 12l4.66-7H22z"},[]),h('circle',{"cx":"9","cy":"12",r:"1.5"},[]),h('circle',{"cx":"14","cy":"12",r:"1.5"},[]),h('circle',{"cx":"19","cy":"12",r:"1.5"},[])]);
return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"},[])]);
        }
    });
})();

export default IMaterialMore;
</script>