<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixScissorsCut = /* @__PURE__ */ ((_) => {
    return r('scissors-cut', {
        name: 'i-remix-scissors-cut',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 6c0 .732-.197 1.419-.54 2.01L12 10.585l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414L10.586 12 8.032 9.446A4 4 0 1 1 10 6M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.316 1.415-1.415zM16 11h2v2h-2zm4 0h2v2h-2zM6 11h2v2H6zm-4 0h2v2H2zm4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.879 12 7.562 9.683a4 4 0 1 1 2.121-2.121L12 9.88l6.374-6.375a2 2 0 0 1 2.829 0l.707.707L9.683 16.438a4 4 0 1 1-2.121-2.121L9.88 12zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9.535-6.587 6.375 6.376-.707.707a2 2 0 0 1-2.829 0l-4.96-4.961 2.12-2.122zM16 11h2v2h-2zm4 0h2v2h-2zM6 11h2v2H6zm-4 0h2v2H2z"},[])]);
        }
    });
})();

export default IRemixScissorsCut;
</script>