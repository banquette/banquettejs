<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialApi = /* @__PURE__ */ ((_) => {
    return r('api', {
        name: 'i-material-api',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1.84 1.84 20.33 20.33' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 13c-.56.56-1.45.56-2 .01V13c-.55-.55-.55-1.44 0-1.99V11c.55-.55 1.44-.55 1.99 0H13c.55.55.55 1.45 0 2m-1-7 2.12 2.12 2.5-2.5-3.2-3.2c-.78-.78-2.05-.78-2.83 0l-3.2 3.2 2.5 2.5zm-6 6 2.12-2.12-2.5-2.5-3.2 3.2c-.78.78-.78 2.05 0 2.83l3.2 3.2 2.5-2.5zm12 0-2.12 2.12 2.5 2.5 3.2-3.2c.78-.78.78-2.05 0-2.83l-3.2-3.2-2.5 2.5zm-6 6-2.12-2.12-2.5 2.5 3.2 3.2c.78.78 2.05.78 2.83 0l3.2-3.2-2.5-2.5z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 12-2 2-2-2 2-2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5z"},[])]);
        }
    });
})();

export default IMaterialApi;
</script>