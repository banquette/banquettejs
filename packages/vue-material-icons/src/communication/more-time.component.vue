<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('more-time', {
        name: 'i-material-more-time',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.75 8c-.41 0-.75.34-.75.75v4.69c0 .35.18.67.47.85l3.64 2.24a.713.713 0 1 0 .74-1.22L11.5 13.3V8.75c0-.41-.34-.75-.75-.75z"},[]),h('path',{d:"M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10h-2.02z"},[]),h('path',{d:"M22 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z"},[])]);
return h('svg',{"viewBox":c ? '2 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 8v6l4.7 2.9.8-1.2-4-2.4V8z"},[]),h('path',{d:"M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10h-2.02z"},[]),h('path',{d:"M20 5V2h-2v3h-3v2h3v3h2V7h3V5z"},[])]);
        }
    });
})();
</script>