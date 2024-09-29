<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixKey2 = /* @__PURE__ */ ((_) => {
    return r('key-2', {
        name: 'i-remix-key-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.99 3.98 18.09 17.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.758 11.828 7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708m-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z"},[])]);
return h('svg',{"viewBox":c ? '3 3.63 18.08 17.37' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.313 11.566 7.94-7.94 2.121 2.121-1.414 1.414 2.121 2.121-3.535 3.536-2.121-2.121-2.99 2.99a5.002 5.002 0 0 1-7.97 5.849 5 5 0 0 1 5.848-7.97m-.899 5.848a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828"},[])]);
        }
    });
})();

export default IRemixKey2;
</script>