<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCommit = /* @__PURE__ */ ((_) => {
    return r('commit', {
        name: 'i-material-commit',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2 7 20 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 13c.55 0 1-.45 1-1s-.45-1-1-1h-4.1a5 5 0 0 0-9.8 0H3c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 0 0 9.8 0zm-9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"},[])]);
return h('svg',{"viewBox":c ? '2 7 20 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.9 11a5 5 0 0 0-9.8 0H2v2h5.1a5 5 0 0 0 9.8 0H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"},[])]);
        }
    });
})();

export default IMaterialCommit;
</script>