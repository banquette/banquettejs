<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFreeBreakfast = /* @__PURE__ */ ((_) => {
    return r('free-breakfast', {
        name: 'i-material-free-breakfast',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5H6z","opacity":"0.3"},[]),h('path',{d:"M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10zm4-5h-2V5h2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4v14h14v-7h2a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM4 19h16v2H4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10zm4-5h-2V5h2z"},[])]);
return h('svg',{"viewBox":c ? '4 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m0 5h-2V5h2zM4 19h16v2H4z"},[])]);
        }
    });
})();

export default IMaterialFreeBreakfast;
</script>