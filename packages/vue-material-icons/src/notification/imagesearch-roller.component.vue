<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('imagesearch-roller', {
        name: 'i-material-imagesearch-roller',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 4h10v2H8zm4 13h2v4h-2z","opacity":"0.3"},[]),h('path',{d:"M20 7V3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8v3h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-1v-3c0-1.1-.9-2-2-2H4V6h2v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1zM8 4h10v2H8V4zm6 17h-2v-4h2v4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2h14z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3v4c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V6H4v4h8c1.1 0 2 .9 2 2v3h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h1v-3H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h2V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7V3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8v3h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-1v-3c0-1.1-.9-2-2-2H4V6h2v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1zM8 4h10v2H8V4zm6 17h-2v-4h2v4z"},[])]);
return h('svg',{"viewBox":c ? '2 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2"},[])]);
        }
    });
})();
</script>