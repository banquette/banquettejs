<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLaptopChromebook = /* @__PURE__ */ ((_) => {
    return r('laptop-chromebook', {
        name: 'i-material-laptop-chromebook',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 5h16v10H4z","opacity":"0.3"},[]),h('path',{d:"M22 18V3H2v15H0v2h24v-2zm-8 0h-4v-1h4zm6-3H4V5h16z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 18h-1V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1m-9.5 0h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5m6.5-3H4V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z"},[])]);
return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 18V3H2v15H0v2h24v-2zm-8 0h-4v-1h4zm6-3H4V5h16z"},[])]);
        }
    });
})();

export default IMaterialLaptopChromebook;
</script>