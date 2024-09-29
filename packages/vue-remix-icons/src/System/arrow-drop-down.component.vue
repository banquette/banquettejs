<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixArrowDropDown = /* @__PURE__ */ ((_) => {
    return r('arrow-drop-down', {
        name: 'i-remix-arrow-drop-down',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '7.76 9.34 8.49 5.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 15-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"},[])]);
return h('svg',{"viewBox":c ? '8 10 8 4' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 14-4-4h8z"},[])]);
        }
    });
})();

export default IRemixArrowDropDown;
</script>