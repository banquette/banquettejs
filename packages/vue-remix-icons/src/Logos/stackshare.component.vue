<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('stackshare', {
        name: 'i-remix-stackshare',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.5 3 20.5 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.536 13H7.329a3 3 0 1 1 .001-2h2.206L13 5h3.17a3 3 0 1 1 .001 2h-2.017l-2.886 4.999L14.155 17h2.016a3 3 0 1 1 0 2H13l-3.464-6zM19 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM19 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-4.208 2.621a2.223 2.223 0 0 0-2.133 1.6h-1.998l-2.46 4.185H8.763a2.22 2.22 0 1 0 0 1.242h1.471l2.417 4.133h2.018a2.221 2.221 0 1 0 0-1.243h-1.317l-2.056-3.536 2.053-3.538h1.31a2.223 2.223 0 1 0 2.133-2.843zm.011 9.427a1.169 1.169 0 1 1-1.144 1.395s-.031-.227 0-.454c.106-.535.578-.94 1.144-.94zm-10.152-4.21a1.17 1.17 0 0 1 1.168 1.168 1.168 1.168 0 0 1-2.335 0c0-.644.523-1.167 1.167-1.167zm10.15-4.209a1.169 1.169 0 0 1 0 2.335 1.17 1.17 0 0 1-1.144-.941c-.026-.206 0-.446 0-.446a1.168 1.168 0 0 1 1.144-.948z"},[])]);
        }
    });
})();
</script>