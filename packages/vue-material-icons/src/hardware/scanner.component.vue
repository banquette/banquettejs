<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('scanner', {
        name: 'i-material-scanner',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 5 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 14v4h14v-4H5zm3 3H6v-2h2v2zm10 0h-8v-2h8v2z","opacity":"0.3"},[]),h('path',{d:"M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4zM6 15h2v2H6zm4 0h8v2h-8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 5 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4.2 5-.7 1.9L17.6 12H3v8h18v-8.86L4.2 5zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 5.29 18 14.71' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.8 10.7 5.15 5.35c-.52-.19-1.1.08-1.3.6-.19.53.08 1.11.6 1.3L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm11 0h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 5 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4zM6 15h2v2H6zm4 0h8v2h-8z"},[])]);
return h('svg',{"viewBox":c ? '3 5 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"},[])]);
        }
    });
})();
</script>