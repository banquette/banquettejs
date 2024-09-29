<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMore = /* @__PURE__ */ ((_) => {
    return r('more', {
        name: 'i-remix-more',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 10.5 18 3' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5m15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5m-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5"},[])]);
return h('svg',{"viewBox":c ? '3 10 18 4' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"},[])]);
        }
    });
})();

export default IRemixMore;
</script>