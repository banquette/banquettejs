<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('person-add-alt-1', {
        name: 'i-material-person-add-alt-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"9","cy":"8",r:"2","opacity":"0.3"},[]),h('path',{d:"M9 16c-2.7 0-5.8 1.29-6 2h12c-.22-.72-3.31-2-6-2z","opacity":"0.3"},[]),h('path',{d:"M9 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2H3zm17-8V7h-2v3h-3v2h3v3h2v-3h3v-2zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"9","cy":"8",r:"4"},[]),h('path',{d:"M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4zm11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z"},[])]);
return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"},[])]);
        }
    });
})();
</script>