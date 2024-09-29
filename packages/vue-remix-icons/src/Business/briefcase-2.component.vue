<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBriefcase2 = /* @__PURE__ */ ((_) => {
    return r('briefcase-2', {
        name: 'i-remix-briefcase-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm13 8H4v6h16zm0-6H4v4h3V9h2v2h6V9h2v2h3zM9 3v2h6V3z"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 8v-3h-2v3H9v-3H7v3H4v6h16v-6zM9 3v2h6V3z"},[])]);
        }
    });
})();

export default IRemixBriefcase2;
</script>