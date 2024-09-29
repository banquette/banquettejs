<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSearch = /* @__PURE__ */ ((_) => {
    return r('search', {
        name: 'i-remix-search',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20.31 20.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.868-3.133-7-7-7s-7 3.132-7 7 3.132 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20.31 20.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617"},[])]);
        }
    });
})();

export default IRemixSearch;
</script>