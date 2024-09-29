<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMen = /* @__PURE__ */ ((_) => {
    return r('men', {
        name: 'i-remix-men',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.05 8.537 18.585 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414zM10.5 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"},[])]);
return h('svg',{"viewBox":c ? '3 3 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.586 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414z"},[])]);
        }
    });
})();

export default IRemixMen;
</script>