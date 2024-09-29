<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCorporateFare = /* @__PURE__ */ ((_) => {
    return r('corporate-fare', {
        name: 'i-material-corporate-fare',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 19H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z","opacity":"0.3"},[]),h('path',{d:"M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"},[])]);
        }
    });
})();

export default IMaterialCorporateFare;
</script>