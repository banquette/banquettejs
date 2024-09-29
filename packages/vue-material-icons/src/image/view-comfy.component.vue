<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialViewComfy = /* @__PURE__ */ ((_) => {
    return r('view-comfy', {
        name: 'i-material-view-comfy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 18h10v-5H10zM4 6v5h16V6zm0 12h4v-5H4z","opacity":"0.3"},[]),h('path',{d:"M2 4v16h20V4zm6 14H4v-5h4zm12 0H10v-5h10zm0-7H4V6h16z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 5v5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1m9 15h10c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1m-8 0h4c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 4v16h20V4zm2 2h16v5H4zm0 12v-5h4v5zm6 0v-5h10v5z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 4v7h20V4zm8 16h12v-7H10zm-8 0h6v-7H2z"},[])]);
        }
    });
})();

export default IMaterialViewComfy;
</script>