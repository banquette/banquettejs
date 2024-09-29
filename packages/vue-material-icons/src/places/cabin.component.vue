<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCabin = /* @__PURE__ */ ((_) => {
    return r('cabin', {
        name: 'i-material-cabin',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.94 7h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z","opacity":"0.3"},[]),h('path',{d:"M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.41 1 21.19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.37 3.55C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53.15-.31.5-.47.84-.47.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53-.15.31-.5.47-.84.47-.74 0-1.26-.8-.9-1.45m18.02 8.64c-.34.44-.96.52-1.4.19l-.99-.76V20c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-8.38l-.99.76a.99.99 0 0 1-1.4-.19c-.33-.44-.25-1.07.19-1.4L4 9.11V7c0-.55.45-1 1-1s1 .45 1 1v.58l5.39-4.12c.36-.27.86-.27 1.21 0l9.6 7.33c.44.34.53.97.19 1.4M10.06 7h3.89L12 5.52zM6 10.1v.9h12v-.9L16.56 9H7.44zM6 13v2h12v-2zm12 6v-2H6v2z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z"},[])]);
        }
    });
})();

export default IMaterialCabin;
</script>