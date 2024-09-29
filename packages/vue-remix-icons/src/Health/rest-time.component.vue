<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRestTime = /* @__PURE__ */ ((_) => {
    return r('rest-time', {
        name: 'i-remix-rest-time',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 6v2a6 6 0 1 0 5.996 6.225L17 14h2a8 8 0 0 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 6v8h8a8 8 0 0 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z"},[])]);
        }
    });
})();

export default IRemixRestTime;
</script>