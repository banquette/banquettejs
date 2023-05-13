<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('rule', {
        name: 'i-material-rule',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4.34 19.77 15.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.83 10.29-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.39.4-1.02.4-1.41.01zM10 7H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm10.29 5.71a.996.996 0 0 0-1.41 0L17 14.59l-1.88-1.88a.996.996 0 1 0-1.41 1.41L15.59 16l-1.88 1.88a.996.996 0 1 0 1.41 1.41L17 17.41l1.88 1.88a.996.996 0 1 0 1.41-1.41L18.41 16l1.88-1.88a.996.996 0 0 0 0-1.41zM10 15H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"},[])]);
return h('svg',{"viewBox":c ? '2 3.93 20.18 16.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.54 11 13 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L16.54 11zM11 7H2v2h9V7zm10 6.41L19.59 12 17 14.59 14.41 12 13 13.41 15.59 16 13 18.59 14.41 20 17 17.41 19.59 20 21 18.59 18.41 16 21 13.41zM11 15H2v2h9v-2z"},[])]);
        }
    });
})();
</script>