<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('shower', {
        name: 'i-material-shower',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z","opacity":"0.3"},[]),h('circle',{"cx":"8","cy":"20",r:"1"},[]),h('circle',{"cx":"16","cy":"17",r:"1"},[]),h('path',{d:"M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5H7z"},[]),h('circle',{"cx":"16","cy":"20",r:"1"},[]),h('circle',{"cx":"12","cy":"17",r:"1"},[]),h('circle',{"cx":"8","cy":"17",r:"1"},[]),h('circle',{"cx":"12","cy":"20",r:"1"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"8","cy":"17",r:"1"},[]),h('circle',{"cx":"12","cy":"17",r:"1"},[]),h('circle',{"cx":"16","cy":"17",r:"1"},[]),h('path',{d:"M13 5.08V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08C7.61 5.57 5 8.47 5 12v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-3.53-2.61-6.43-6-6.92z"},[]),h('circle',{"cx":"8","cy":"20",r:"1"},[]),h('circle',{"cx":"12","cy":"20",r:"1"},[]),h('circle',{"cx":"16","cy":"20",r:"1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"8","cy":"17",r:"1"},[]),h('circle',{"cx":"12","cy":"17",r:"1"},[]),h('circle',{"cx":"16","cy":"17",r:"1"},[]),h('path',{d:"M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z"},[]),h('circle',{"cx":"8","cy":"20",r:"1"},[]),h('circle',{"cx":"12","cy":"20",r:"1"},[]),h('circle',{"cx":"16","cy":"20",r:"1"},[])]);
        }
    });
})();
</script>