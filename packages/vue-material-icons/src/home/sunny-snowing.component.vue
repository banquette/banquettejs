<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('sunny-snowing', {
        name: 'i-material-sunny-snowing',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 4V2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm7.36 3.05 1.41-1.42a.996.996 0 1 0-1.41-1.41l-1.41 1.42a.996.996 0 1 0 1.41 1.41zM22 11h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zM5.64 7.05 4.22 5.64c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.41 1.41c.39.39.39 1.03 0 1.41s-1.02.39-1.4 0zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm5 .5h10c.55 0 1-.45 1-1v-.29c0-3.05-2.19-5.77-5.21-6.16A6.006 6.006 0 0 0 6 12v.5c0 .55.45 1 1 1zM5 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm12 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm-9 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3-4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"},[])]);
        }
    });
})();
</script>