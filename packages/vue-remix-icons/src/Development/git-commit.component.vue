<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('git-commit', {
        name: 'i-remix-git-commit',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 8 18 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2h-5.126zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},[])]);
return h('svg',{"viewBox":c ? '3 8 18 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2h-5.126z"},[])]);
        }
    });
})();
</script>