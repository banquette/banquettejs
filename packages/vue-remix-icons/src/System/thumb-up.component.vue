<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixThumbUp = /* @__PURE__ */ ((_) => {
    return r('thumb-up', {
        name: 'i-remix-thumb-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 0.64 22 20.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858M5 11H3v8h2z"},[])]);
return h('svg',{"viewBox":c ? '1 1.16 22 19.84' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1m5.293-1.293 6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707"},[])]);
        }
    });
})();

export default IRemixThumbUp;
</script>