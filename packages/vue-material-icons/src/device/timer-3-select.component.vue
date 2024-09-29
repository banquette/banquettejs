<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTimer3Select = /* @__PURE__ */ ((_) => {
    return r('timer-3-select', {
        name: 'i-material-timer-3-select',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 5 17 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5zM4 5v3h6v2.5H4v3h6V16H4v3h9V5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 5 17 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 12c0 .55-.45 1-1 1h-3v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H16c-.55 0-1-.45-1-1s.45-1 1-1h3v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5H20c.55 0 1 .45 1 1M4 6.5C4 7.33 4.67 8 5.5 8H10v2.5H5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H10V16H5.5c-.83 0-1.5.67-1.5 1.5S4.67 19 5.5 19H10c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3H5.5C4.67 5 4 5.67 4 6.5"},[])]);
return h('svg',{"viewBox":c ? '4 5 17 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 11v2h-4v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H15v-2h4v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5zM4 5v3h6v2.5H4v3h6V16H4v3h6c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3z"},[])]);
        }
    });
})();

export default IMaterialTimer3Select;
</script>