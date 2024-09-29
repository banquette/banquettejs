<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCaravan = /* @__PURE__ */ ((_) => {
    return r('caravan', {
        name: 'i-remix-caravan',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.172 3c.53 0 1.039.21 1.414.586l4.828 4.828A2 2 0 0 1 21 9.828V17h2v2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2zM11 16a2 2 0 1 0-.001 3.999A2 2 0 0 0 11 16m3.172-11H4v12h3.126a4.002 4.002 0 0 1 7.748 0H19V9.828zM14 7v6H6V7zm-2 2H8v2h4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.172 3c.53 0 1.039.21 1.414.586l4.828 4.828A2 2 0 0 1 21 9.828V17h2v2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2zM11 16a2 2 0 1 0-.001 3.999A2 2 0 0 0 11 16m3-9H6v6h8zm-2 2v2H8V9z"},[])]);
        }
    });
})();

export default IRemixCaravan;
</script>