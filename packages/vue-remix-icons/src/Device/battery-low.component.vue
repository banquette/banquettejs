<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('battery-low', {
        name: 'i-remix-battery-low',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 5 21 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 7v10h14V7H4zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 3h4v8H5V8zm16 1h2v6h-2V9z"},[])]);
return h('svg',{"viewBox":c ? '2 5 21 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 3v8h4V8H5zm16 1h2v6h-2V9z"},[])]);
        }
    });
})();
</script>