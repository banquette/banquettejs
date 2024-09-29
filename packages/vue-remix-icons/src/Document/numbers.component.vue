<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNumbers = /* @__PURE__ */ ((_) => {
    return r('numbers', {
        name: 'i-remix-numbers',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 18H4v-8h5zm-2-2v-4H6v4zm6 0V8h-1v8zm2 2h-5V6h5zm4-2V4h-1v12zm2 2h-5V2h5zm1 4H3v-2h19z"},[])]);
return h('svg',{"viewBox":c ? '3 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 18H4v-8h5zm6 0h-5V6h5zm6 0h-5V2h5zm1 4H3v-2h19z"},[])]);
        }
    });
})();

export default IRemixNumbers;
</script>