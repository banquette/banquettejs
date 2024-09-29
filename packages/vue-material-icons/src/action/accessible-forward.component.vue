<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAccessibleForward = /* @__PURE__ */ ((_) => {
    return r('accessible-forward', {
        name: 'i-material-accessible-forward',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 2.54 15 19.46' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"18","cy":"4.54",r:"2"},[]),h('path',{d:"M15 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5m5-3.5h-3.86l1.67-3.67C18.42 8.5 17.44 7 15.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L8.22 10l1.92.53.65-1.53H13l-3.12 7H18v5h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 2.54 15 19.46' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"18","cy":"4.54",r:"2"},[]),h('path',{d:"M15 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5m3-3.5h-1.86l1.67-3.67C18.42 8.5 17.44 7 15.96 7h-5.2c-.81 0-1.54.47-1.87 1.2l-.28.76c-.21.56.11 1.17.68 1.33.49.14 1-.11 1.2-.58l.3-.71H13l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H18v4c0 .55.45 1 1 1s1-.45 1-1v-4.5c0-1.1-.9-2-2-2"},[])]);
if (v === 'outlined' || v === 'twotone')
    return h('svg',{"viewBox":c ? '5 2.54 15 19.46' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"18","cy":"4.54",r:"2"},[]),h('path',{d:"M15 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5m3-3.5h-1.86l1.67-3.67C18.42 8.5 17.44 7 15.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L8.22 10l1.92.53.65-1.53H13l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H18v5h2v-5.5c0-1.1-.9-2-2-2"},[])]);
return h('svg',{"viewBox":c ? '4 2.54 15 19.46' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"17","cy":"4.54",r:"2"},[]),h('path',{d:"M14 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5m3-3.5h-1.86l1.67-3.67C17.42 8.5 16.44 7 14.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L7.22 10l1.92.53L9.79 9H12l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H17v5h2v-5.5c0-1.1-.9-2-2-2"},[])]);
        }
    });
})();

export default IMaterialAccessibleForward;
</script>