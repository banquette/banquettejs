<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialArrowRightAlt = /* @__PURE__ */ ((_) => {
    return r('arrow-right-alt', {
        name: 'i-material-arrow-right-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 8.7 15.78 6.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35z"},[])]);
return h('svg',{"viewBox":c ? '4 8 16 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"},[])]);
        }
    });
})();

export default IMaterialArrowRightAlt;
</script>