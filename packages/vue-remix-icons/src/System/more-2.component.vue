<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMore2 = /* @__PURE__ */ ((_) => {
    return r('more-2', {
        name: 'i-remix-more-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '10.5 3 3 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5"},[])]);
return h('svg',{"viewBox":c ? '10 3 4 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"},[])]);
        }
    });
})();

export default IRemixMore2;
</script>