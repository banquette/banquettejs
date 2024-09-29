<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSubdirectoryArrowLeft = /* @__PURE__ */ ((_) => {
    return r('subdirectory-arrow-left', {
        name: 'i-material-subdirectory-arrow-left',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5.42 4 14.58 16.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5.71 15.71 4.58 4.58c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L8.83 16H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v9H8.83l2.88-2.87c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0l-4.58 4.58c-.39.39-.39 1.03 0 1.42"},[])]);
return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z"},[])]);
        }
    });
})();

export default IMaterialSubdirectoryArrowLeft;
</script>