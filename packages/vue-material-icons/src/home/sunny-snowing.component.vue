<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSunnySnowing = /* @__PURE__ */ ((_) => {
    return r('sunny-snowing', {
        name: 'i-material-sunny-snowing',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '1 1 22 21.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 5h-2V1h2zM1 11h4v2H1zm18 2v-2h4v2zm-1.34-5.24-1.41-1.41 2.83-2.83 1.41 1.41zM3.51 4.93l1.41-1.41 2.83 2.83-1.41 1.41zM4.75 17a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m12 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-9 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3-4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M17 13v-1c0-2.76-2.24-5-5-5s-5 2.24-5 5v1z"},[])]);
        }
    });
})();

export default IMaterialSunnySnowing;
</script>