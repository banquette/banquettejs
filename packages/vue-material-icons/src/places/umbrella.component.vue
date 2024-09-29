<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialUmbrella = /* @__PURE__ */ ((_) => {
    return r('umbrella', {
        name: 'i-material-umbrella',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 1 12 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.28 8.5.76.58.92-.23L13 14.8V8.29zm-4.25.36L11 14.8V8.29l-.28.21-.76.59z","opacity":"0.3"},[]),h('path',{d:"M14.5 6.92 13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92 6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07zM13.28 8.5l.76.58.92-.23L13 14.8V8.29zm-3.32.59.76-.58.28-.22v6.51L9.03 8.86z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6.26 1 11.49 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.12 6.28-2.62.64L13 5.77V3.4c0-.26.22-.48.5-.48.23 0 .43.16.49.36.11.42.5.72.95.72.55 0 1-.45 1-1 0-.1-.02-.2-.05-.3-.3-.98-1.26-1.7-2.39-1.7C12.12 1 11 2.07 11 3.4v2.37L9.5 6.92l-2.62-.64a.505.505 0 0 0-.6.64l4.77 14.39c.15.46.55.69.95.69s.8-.23.95-.69l4.77-14.39a.505.505 0 0 0-.6-.64M11 14.8 9.03 8.86l.92.23.76-.58.29-.22zm2 0V8.29l.28.22.76.58.92-.23z"},[])]);
return h('svg',{"viewBox":c ? '6 1 12 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.5 6.92 13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92 6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07zM13.28 8.5l.76.58.92-.23L13 14.8V8.29zm-3.32.59.76-.58.28-.22v6.51L9.03 8.86z"},[])]);
        }
    });
})();

export default IMaterialUmbrella;
</script>