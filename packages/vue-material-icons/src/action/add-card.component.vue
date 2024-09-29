<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAddCard = /* @__PURE__ */ ((_) => {
    return r('add-card', {
        name: 'i-material-add-card',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.01 4 2 20h12v-2H4v-6h18V4zM20 8H4V6h16zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 19c0-.55-.45-1-1-1H4v-6h18V6c0-1.1-.9-2-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h9c.55 0 1-.45 1-1m6-11H4V6h16zm0 14c-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1"},[])]);
return h('svg',{"viewBox":c ? '2 4 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"},[])]);
        }
    });
})();

export default IMaterialAddCard;
</script>