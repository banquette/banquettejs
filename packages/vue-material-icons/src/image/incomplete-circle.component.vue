<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialIncompleteCircle = /* @__PURE__ */ ((_) => {
    return r('incomplete-circle', {
        name: 'i-material-incomplete-circle',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07L12 12V2c5.52 0 10 4.48 10 10"},[])]);
        }
    });
})();

export default IMaterialIncompleteCircle;
</script>