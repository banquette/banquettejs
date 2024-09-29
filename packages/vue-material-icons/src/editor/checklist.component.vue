<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialChecklist = /* @__PURE__ */ ((_) => {
    return r('checklist', {
        name: 'i-material-checklist',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2.41 4.35 19.59 14.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 8c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m-9 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1M10.47 4.63c.39.39.39 1.02 0 1.41l-4.23 4.25c-.39.39-1.02.39-1.42 0L2.7 8.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.4 0m.01 8.01c.39.39.39 1.02 0 1.41L6.25 18.3c-.39.39-1.02.39-1.42 0L2.7 16.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.41.01"},[])]);
return h('svg',{"viewBox":c ? '2 3.93 20 15.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41z"},[])]);
        }
    });
})();

export default IMaterialChecklist;
</script>