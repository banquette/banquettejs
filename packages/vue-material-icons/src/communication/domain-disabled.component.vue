<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDomainDisabled = /* @__PURE__ */ ((_) => {
    return r('domain-disabled', {
        name: 'i-material-domain-disabled',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 1.69 22.31 22.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.41 1.69 0 3.1l2 2V21h15.9l3 3 1.41-1.41zM6 19H4v-2h2zm0-4H4v-2h2zm-2-4V9h2v2zm6 8H8v-2h2zm-2-4v-2h2v2zm4 4v-2h1.9l2 2zM8 5h2v2h-.45L12 9.45V9h8v8.45l2 2V7H12V3H5.55L8 5.45zm8 6h2v2h-2z"},[]),h('path',{d:"M12 9v.45l8 8V9zm6 4h-2v-2h2z","opacity":"0.3"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.42 2.1 21.58 21.49' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M.71 2.39a.996.996 0 0 0 0 1.41L2 5.1V19c0 1.1.9 2 2 2h13.9l2.29 2.29a.996.996 0 1 0 1.41-1.41L2.12 2.39a.996.996 0 0 0-1.41 0M6 19H4v-2h2zm0-4H4v-2h2zm-2-4V9h2v2zm6 8H8v-2h2zm-2-4v-2h2v2zm4 4v-2h1.9l2 2zM8 5h2v2h-.45L12 9.45V9h7c.55 0 1 .45 1 1v7.45l2 2V9c0-1.1-.9-2-2-2h-8V5c0-1.1-.9-2-2-2H5.55L8 5.45zm8 6h2v2h-2z"},[])]);
if (v === 'outlined' || v === 'sharp')
    return h('svg',{"viewBox":c ? '0 1.69 22.31 22.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.41 1.69 0 3.1l2 2V21h15.9l3 3 1.41-1.41zM6 19H4v-2h2zm0-4H4v-2h2zm-2-4V9h2v2zm6 8H8v-2h2zm-2-4v-2h2v2zm4 4v-2h1.9l2 2zM8 5h2v2h-.45L12 9.45V9h8v8.45l2 2V7H12V3H5.55L8 5.45zm8 6h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '0.1 1.8 22.2 22.2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6h2v2h-2zM1.3 1.8.1 3.1 2 5v16h16l3 3 1.3-1.3zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm4 8H8v-2h2zm0-4H8v-2h2zm2 4v-2h2l2 2z"},[])]);
        }
    });
})();

export default IMaterialDomainDisabled;
</script>