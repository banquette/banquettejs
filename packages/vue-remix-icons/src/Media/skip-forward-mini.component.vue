<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSkipForwardMini = /* @__PURE__ */ ((_) => {
    return r('skip-forward-mini', {
        name: 'i-remix-skip-forward-mini',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '7 6 11 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.032 12 9 9.86v4.28zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091M16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z"},[])]);
return h('svg',{"viewBox":c ? '7 6 11 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.788 17.444A.5.5 0 0 1 7 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816zM16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z"},[])]);
        }
    });
})();

export default IRemixSkipForwardMini;
</script>