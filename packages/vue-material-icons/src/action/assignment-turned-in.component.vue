<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAssignmentTurnedIn = /* @__PURE__ */ ((_) => {
    return r('assignment-turned-in', {
        name: 'i-material-assignment-turned-in',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 19h14V5H5zm2.41-7.41L10 14.17l6.59-6.59L18 9l-8 8-4-4z","opacity":"0.3"},[]),h('path',{d:"m18 9-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.24-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M19 19H5V5h14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9.29 16.29 6.7 13.7a.996.996 0 1 1 1.41-1.41L10 14.17l5.88-5.88a.996.996 0 1 1 1.41 1.41l-6.59 6.59a.996.996 0 0 1-1.41 0"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 9-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M19 19H5V5h14z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"},[])]);
        }
    });
})();

export default IMaterialAssignmentTurnedIn;
</script>