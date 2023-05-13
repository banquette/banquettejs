<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('cursor', {
        name: 'i-remix-cursor',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '6.79 1.63 13.16 20.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.388 13.498 2.552 7.014-4.698 1.71-2.553-7.014-3.899 2.445 1.62-16.02 11.537 11.232-4.558.633zm-.011 5.818-2.715-7.46 2.96-.41-5.64-5.49-.79 7.83 2.53-1.587 2.715 7.46.94-.343z"},[])]);
return h('svg',{"viewBox":c ? '6.92 1.63 12.22 20.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.91 12.36 17 20.854l-2.818 1.026-3.092-8.494-4.172 3.156 1.49-14.909 10.726 10.463z"},[])]);
        }
    });
})();
</script>