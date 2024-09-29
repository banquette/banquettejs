<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTabUnselected = /* @__PURE__ */ ((_) => {
    return r('tab-unselected', {
        name: 'i-material-tab-unselected',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1 9h2V7H1zm0 4h2v-2H1zm8 8h2v-2H9zm-8-4h2v-2H1zm0 4h2v-2H1zM23 3H13v6h10zm-2 14h2v-2h-2zM9 5h2V3H9zM5 21h2v-2H5zM5 5h2V3H5zM1 5h2V3H1zm20 8h2v-2h-2zm-8 8h2v-2h-2zm4 0h2v-2h-2zm4 0h2v-2h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1 9h2V7H1zm0 4h2v-2H1zm0-8h2V3c-1.1 0-2 .9-2 2m8 16h2v-2H9zm-8-4h2v-2H1zm2 4v-2H1c0 1.1.9 2 2 2M21 3h-8v5c0 .55.45 1 1 1h9V5c0-1.1-.9-2-2-2m0 14h2v-2h-2zM9 5h2V3H9zM5 21h2v-2H5zM5 5h2V3H5zm16 16c1.1 0 2-.9 2-2h-2zm0-8h2v-2h-2zm-8 8h2v-2h-2zm4 0h2v-2h-2z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1 9h2V7H1zm0 4h2v-2H1zm0-8h2V3c-1.1 0-2 .9-2 2m8 16h2v-2H9zm-8-4h2v-2H1zm2 4v-2H1c0 1.1.9 2 2 2M21 3h-8v6h10V5c0-1.1-.9-2-2-2m0 14h2v-2h-2zM9 5h2V3H9zM5 21h2v-2H5zM5 5h2V3H5zm16 16c1.1 0 2-.9 2-2h-2zm0-8h2v-2h-2zm-8 8h2v-2h-2zm4 0h2v-2h-2z"},[])]);
        }
    });
})();

export default IMaterialTabUnselected;
</script>