<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('not-accessible', {
        name: 'i-material-not-accessible',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 2 19.8 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-2 18c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2zm11.19 1.19L2.81 2.81 1.39 4.22 10 12.83V17h4.17l5.61 5.61 1.41-1.42zM19 11c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.24-.24-.44-.36-.63-.46-.36-.19-.72-.3-1.2-.26-.49.04-.91.27-1.23.61L14 11.05c1.29 1.07 3.25 1.94 5 1.95v-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 2 18.97 20.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-2 18c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2zm10.49.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l7.9 7.9V15c0 1.1.9 2 2 2h2.17l4.9 4.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zm-2.33-9.56a5.762 5.762 0 0 1-3.23-1.76l-1.29-1.43c-.24-.24-.44-.36-.63-.46-.36-.19-.72-.3-1.2-.26-.49.04-.91.27-1.23.61L14 11.05c1 .83 2.4 1.54 3.8 1.82.62.13 1.2-.34 1.2-.97 0-.48-.36-.89-.84-.97z"},[])]);
if (v === 'outlined' || v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 2 19.8 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 9v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.24-.24-.44-.36-.63-.46-.36-.19-.72-.3-1.2-.26-.49.04-.91.27-1.23.61L14 11.05c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2zM2.81 2.81 1.39 4.22 10 12.83V15c0 1.1.9 2 2 2h2.17l5.61 5.61 1.41-1.41L2.81 2.81z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2 19.8 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 11.05-3.42-3.42c.32-.34.74-.57 1.23-.61.48-.04.84.07 1.2.26.19.1.39.22.63.46l1.29 1.43c.98 1.08 2.53 1.85 4.07 1.83v2c-1.75-.01-3.71-.88-5-1.95zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2.81 2.81 1.39 4.22 10 12.83V15c0 1.1.9 2 2 2h2.17l5.61 5.61 1.41-1.41L2.81 2.81zM10 20c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2z"},[])]);
        }
    });
})();
</script>