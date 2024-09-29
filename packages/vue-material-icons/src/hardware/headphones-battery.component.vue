<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHeadphonesBattery = /* @__PURE__ */ ((_) => {
    return r('headphones-battery', {
        name: 'i-material-headphones-battery',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9h2v7h-2z","opacity":"0.3"},[]),h('path',{d:"M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m-1 9h-2V9h2zM8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2h2v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h2c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7V6h-2v1h-2v11h6V7zM8 6c-3.31 0-6 2.69-6 6v6h4v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h4v-6c0-3.31-2.69-6-6-6"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7h-1v-.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1M8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2s2-.9 2-2v-1c0-1.1-.9-2-2-2h-.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H12c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2s2-.9 2-2v-4c0-3.31-2.69-6-6-6"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m-1 9h-2V9h2zM8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2h2v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h2c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6"},[])]);
return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1M8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2h2v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h2c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6"},[])]);
        }
    });
})();

export default IMaterialHeadphonesBattery;
</script>