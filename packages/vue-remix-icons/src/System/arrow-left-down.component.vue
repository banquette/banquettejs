<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixArrowLeftDown = /* @__PURE__ */ ((_) => {
    return r('arrow-left-down', {
        name: 'i-remix-arrow-left-down',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '7 4.98 12.02 12.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9 13.59 8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z"},[])]);
return h('svg',{"viewBox":c ? '6 5.98 12.02 12.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.36 13.05 17.31 18H5.998V6.688l4.95 4.95 5.656-5.657 1.415 1.414z"},[])]);
        }
    });
})();

export default IRemixArrowLeftDown;
</script>