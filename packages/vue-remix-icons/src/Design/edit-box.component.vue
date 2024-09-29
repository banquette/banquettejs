<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEditBox = /* @__PURE__ */ ((_) => {
    return r('edit-box', {
        name: 'i-remix-edit-box',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.1 18.9 18.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.757 3-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417z"},[])]);
return h('svg',{"viewBox":c ? '3 2.1 18.9 18.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.757 3-7.466 7.466.008 4.247 4.238-.007L21 7.243V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417z"},[])]);
        }
    });
})();

export default IRemixEditBox;
</script>