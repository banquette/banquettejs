<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLocalGroceryStore = /* @__PURE__ */ ((_) => {
    return r('local-grocery-store', {
        name: 'i-material-local-grocery-store',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 2 20.01 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.53 11h7.02l2.76-5H6.16z","opacity":"0.3"},[]),h('path',{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 2 20.71 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 4h2l3.6 7.59L3.62 17H19v-2H7l1.1-2h8.64l4.97-9H5.21l-.94-2H1zm16 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 2 20.01 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M2 4h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1m15 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 2 20.01 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53z"},[])]);
return h('svg',{"viewBox":c ? '1 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"},[])]);
        }
    });
})();

export default IMaterialLocalGroceryStore;
</script>