<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMic2 = /* @__PURE__ */ ((_) => {
    return r('mic-2', {
        name: 'i-remix-mic-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.19 1 19.62 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3m0-2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5M2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.393C20.896 18.545 16.85 22 12 22s-8.896-3.455-9.808-8.038"},[])]);
return h('svg',{"viewBox":c ? '2.19 1 19.62 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 1a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5M2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.393C20.896 18.545 16.85 22 12 22s-8.896-3.455-9.808-8.038"},[])]);
        }
    });
})();

export default IRemixMic2;
</script>