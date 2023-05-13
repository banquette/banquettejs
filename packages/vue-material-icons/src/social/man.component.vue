<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('man', {
        name: 'i-material-man',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '8 2 8 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 7H8v8h2v7h4v-7h2z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '8 2 8 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 7h-4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6h1c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
return h('svg',{"viewBox":c ? '8 2 8 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
        }
    });
})();
</script>