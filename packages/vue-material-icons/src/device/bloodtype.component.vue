<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBloodtype = /* @__PURE__ */ ((_) => {
    return r('bloodtype', {
        name: 'i-material-bloodtype',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4.67c-4.05 3.7-6 6.79-6 9.14 0 3.63 2.65 6.2 6 6.2s6-2.57 6-6.2c0-2.35-1.95-5.45-6-9.14M15 18H9v-2h6zm0-5h-2v2h-2v-2H9v-2h2V9h2v2h2z","opacity":"0.3"},[]),h('path',{d:"M9 16h6v2H9zm4-7h-2v2H9v2h2v2h2v-2h2v-2h-2z"},[]),h('path',{d:"M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8m0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2.33 16 19.67' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.66 2.58c-.38-.33-.95-.33-1.33 0C6.45 6.88 4 10.62 4 13.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.18-2.45-6.92-7.34-11.22M14 18h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m0-5h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 16h6v2H9zm4-7h-2v2H9v2h2v2h2v-2h2v-2h-2z"},[]),h('path',{d:"M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8m0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8m3 16H9v-2h6zm0-5h-2v2h-2v-2H9v-2h2V9h2v2h2z"},[])]);
        }
    });
})();

export default IMaterialBloodtype;
</script>