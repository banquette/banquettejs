<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialToken = /* @__PURE__ */ ((_) => {
    return r('token', {
        name: 'i-material-token',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 4.29 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57z","opacity":"0.3"},[]),h('path',{d:"m21 7-9-5-9 5v10l9 5 9-5zm-9-2.71 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 2.29 18 19.16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.97 2.54c-.6-.34-1.34-.34-1.94 0l-7 3.89L9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.82zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M3 8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87v5.57l-6.97-3.87A1.99 1.99 0 0 1 3 15.82zm10 13.3v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14v7.68c0 .73-.39 1.4-1.03 1.75z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 7-9-5-9 5v10l9 5 9-5zm-9-2.71 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 19.44' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.97 6.43 12 2 4.03 6.43 9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87zm2 0v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14V17z"},[])]);
        }
    });
})();

export default IMaterialToken;
</script>