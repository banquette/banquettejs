<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('no-meeting-room', {
        name: 'i-material-no-meeting-room',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 2.13 20.87 20.87' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5H8.12L12 8.88V6zM7 19h5v-4.46l-5-5z","opacity":"0.3"},[]),h('path',{d:"M12 5v3.88l2 2V6h3v7.88l2 2V4h-5V3H6.12l2 2zM2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41L2.41 2.13zM12 19H7V9.54l5 5V19z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 2.13 20.87 20.87' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 6h3v7.88l2 2V4h-5V3H6.12L14 10.88zm-2 5.71V13h-2v-2h1.29L2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.42 2.54 20.04 20.05' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 6h3v7.88l2 2V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6.12L14 10.88V6zm7.17 14.88L12 11.71V13h-2v-2h1.29L3.12 2.83a.996.996 0 1 0-1.41 1.41L5 7.54V19H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1v-3.46l5.75 5.75c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 2.13 20.87 20.87' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5v3.88l2 2V6h3v7.88l2 2V4h-5V3H6.12l2 2zM2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41L2.41 2.13zM12 19H7V9.54l5 5V19z"},[])]);
return h('svg',{"viewBox":c ? '1 2.27 20.73 20.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 11h-1v2h2v-1l9.73 9.73L20.46 23 14 16.54V21H3v-2h2V7.54l-4-4 1.27-1.27L11 11zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"},[])]);
        }
    });
})();
</script>