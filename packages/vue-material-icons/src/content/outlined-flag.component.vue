<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialOutlinedFlag = /* @__PURE__ */ ((_) => {
    return r('outlined-flag', {
        name: 'i-material-outlined-flag',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 6-.72-1.45c-.17-.34-.52-.55-.9-.55H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5l.72 1.45a1 1 0 0 0 .89.55H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm4 8h-4l-1-2H7V6h5l1 2h5z"},[])]);
return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 6-1-2H5v17h2v-7h5l1 2h7V6zm4 8h-4l-1-2H7V6h5l1 2h5z"},[])]);
        }
    });
})();

export default IMaterialOutlinedFlag;
</script>