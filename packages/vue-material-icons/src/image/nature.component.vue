<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('nature', {
        name: 'i-material-nature',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 2.17 14.17 19.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.17 4.17c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.25-5-5-5z","opacity":"0.3"},[]),h('path',{d:"M19.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88h-.03c3.49-.4 6.2-3.36 6.2-6.95zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.25 5-5 5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 2.17 14.17 19.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 16.12c3.37-.4 6.01-3.19 6.16-6.64.17-3.87-3.02-7.25-6.89-7.31-3.92-.05-7.1 3.1-7.1 7A6.98 6.98 0 0 0 11 16.06V20H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-5v-3.88z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 2.17 14.17 19.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 16.12h-.03c3.49-.4 6.2-3.36 6.2-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88zM7.17 9.17c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"},[])]);
return h('svg',{"viewBox":c ? '5 2.17 14.17 19.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88z"},[])]);
        }
    });
})();
</script>