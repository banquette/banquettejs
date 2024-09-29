<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEmphasisCn = /* @__PURE__ */ ((_) => {
    return r('emphasis-cn', {
        name: 'i-remix-emphasis-cn',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M13 2v2h6v2h-1.968a18.2 18.2 0 0 1-3.621 6.302 14.7 14.7 0 0 0 5.327 3.042l-.536 1.93A16.7 16.7 0 0 1 12 13.726a16.7 16.7 0 0 1-6.202 3.547l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042 18 18 0 0 1-2.822-4.3h2.24A16 16 0 0 0 12 10.876 16.2 16.2 0 0 0 14.91 6H5V4h6V2z"},[])]);
        }
    });
})();

export default IRemixEmphasisCn;
</script>