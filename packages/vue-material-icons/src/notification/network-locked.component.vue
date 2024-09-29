<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNetworkLocked = /* @__PURE__ */ ((_) => {
    return r('network-locked', {
        name: 'i-material-network-locked',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 16v-.36c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 15.5v.5h-1v6h7v-6zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zm-1.5-5c.15 0 .3.01.46.02.01 0 .03.01.04.01V1L1 20h13v-6h1.26c.22-.63.58-1.2 1.06-1.68.85-.85 1.98-1.32 3.18-1.32"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.41 3.42 19.59 18.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12V4.42c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71H15v-6c0-2.21 1.79-4 4-4zm0 5v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-3-1c0-.55.45-1 1-1s1 .45 1 1v1h-2z"},[])]);
if (v === 'outlined' || v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 16v-.5a2.5 2.5 0 0 0-5 0v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zM18 5.83v5.43c.47-.16.97-.26 1.5-.26.17 0 .33.03.5.05V1L1 20h13v-2H5.83z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5m2.5 6v-1.5a2.5 2.5 0 0 0-5 0V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"},[])]);
        }
    });
})();

export default IMaterialNetworkLocked;
</script>