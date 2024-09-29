<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNavigation = /* @__PURE__ */ ((_) => {
    return r('navigation', {
        name: 'i-remix-navigation',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.24 2.27 19.81 19.85' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4.965 5.096 3.546 12.41 3.04-6.08 5.637-2.255zM2.899 2.3l18.806 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.26 2.911A.5.5 0 0 1 2.9 2.3z"},[])]);
return h('svg',{"viewBox":c ? '2.24 2.27 19.81 19.85' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m2.9 2.3 18.805 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.26 2.911A.5.5 0 0 1 2.9 2.3"},[])]);
        }
    });
})();

export default IRemixNavigation;
</script>