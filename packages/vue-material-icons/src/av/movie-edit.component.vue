<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMovieEdit = /* @__PURE__ */ ((_) => {
    return r('movie-edit', {
        name: 'i-material-movie-edit',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 4 21 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 10h18V6c0-1.1-.9-2-2-2h-3l2 4h-3l-2-4h-2l2 4h-3L9 4H7l2 4H6L4 4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8v-2H4zm10 8.88V21h2.12l5.17-5.17-2.12-2.12zM22.71 13l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 15.12l.71-.71a.996.996 0 0 0 0-1.41"},[])]);
        }
    });
})();

export default IMaterialMovieEdit;
</script>