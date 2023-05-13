<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('eject', {
        name: 'i-remix-eject',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 3.4 16 15.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.737 13h8.526L12 6.606 7.737 13zm4.679-9.376 7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0zM5 17h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"},[])]);
return h('svg',{"viewBox":c ? '4 3.4 16 15.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12.416 3.624 7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0zM5 17h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"},[])]);
        }
    });
})();
</script>