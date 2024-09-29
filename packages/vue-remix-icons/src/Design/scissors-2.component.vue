<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixScissors2 = /* @__PURE__ */ ((_) => {
    return r('scissors-2', {
        name: 'i-remix-scissors-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3.15 20 18.85' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 13.414-2.554 2.554a4 4 0 1 1-1.414-1.414L10.586 12 4.565 5.98a2 2 0 0 1 0-2.83L12 10.587l7.435-7.435a2 2 0 0 1 0 2.828L13.415 12l2.553 2.554a4 4 0 1 1-1.414 1.414zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
return h('svg',{"viewBox":c ? '2 2.8 20 19.2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 14.121-2.317 2.317a4 4 0 1 1-2.121-2.121L9.88 12 4.21 6.333a2 2 0 0 1 0-2.829l.708-.707L12 9.88l7.081-7.082.708.707a2 2 0 0 1 0 2.829L14.12 12l2.317 2.317a4 4 0 1 1-2.121 2.121L12 14.12zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixScissors2;
</script>