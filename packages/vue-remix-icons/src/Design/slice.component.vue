<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('slice', {
        name: 'i-remix-slice',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.26 3.73 19.09 16.33' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.69 12.918 1.769 1.768c-6.01 6.01-10.96 6.01-15.203 4.596L17.812 3.726l3.536 3.535-5.657 5.657zm-2.828 0 5.657-5.657-.707-.707L6.314 18.052c2.732.107 5.358-.907 8.267-3.416l-1.719-1.718z"},[])]);
return h('svg',{"viewBox":c ? '2.1 4.1 17.68 15.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.768 12.232 2.121 2.122c-4.596 4.596-10.253 6.01-13.788 5.303L17.657 4.1l2.121 2.12-6.01 6.011z"},[])]);
        }
    });
})();
</script>