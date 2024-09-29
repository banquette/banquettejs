<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSpam2 = /* @__PURE__ */ ((_) => {
    return r('spam-2', {
        name: 'i-remix-spam-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.5 2.5 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.936 2.5 21.5 8.067v7.87L15.936 21.5h-7.87L2.5 15.936v-7.87L8.066 2.5zm-.829 2H8.894L4.501 8.895v6.213l4.393 4.394h6.213l4.394-4.394V8.894l-4.394-4.393zM11 15h2v2h-2zm0-8h2v6h-2z"},[])]);
return h('svg',{"viewBox":c ? '2.5 2.5 19.4 19.4' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.218 2.5 5.683 5.682v8.036l-5.683 5.683H8.182l-5.683-5.683V8.182l5.683-5.683zM11 15v2h2v-2zm0-8v6h2V7z"},[])]);
        }
    });
})();

export default IRemixSpam2;
</script>