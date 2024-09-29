<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixStarHalfS = /* @__PURE__ */ ((_) => {
    return r('star-half-s', {
        name: 'i-remix-star-half-s',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2.49 2.5 19.02 18.09' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 14.656 2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"},[])]);
        }
    });
})();

export default IRemixStarHalfS;
</script>