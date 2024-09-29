<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAdd = /* @__PURE__ */ ((_) => {
    return r('add', {
        name: 'i-material-add',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"},[])]);
return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"},[])]);
        }
    });
})();

export default IMaterialAdd;
</script>