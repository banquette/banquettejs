<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShare = /* @__PURE__ */ ((_) => {
    return r('share', {
        name: 'i-remix-share',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.12 17.023-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4 4 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
return h('svg',{"viewBox":c ? '2.5 2.5 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.576 17.271-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.5 3.5 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755"},[])]);
        }
    });
})();

export default IRemixShare;
</script>