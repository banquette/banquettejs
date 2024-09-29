<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLeaf = /* @__PURE__ */ ((_) => {
    return r('leaf', {
        name: 'i-remix-leaf',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3v2c0 9.627-5.373 14-12 14H5.243A17 17 0 0 0 5 22H3c0-1.363.116-2.6.346-3.732Q3.001 16.327 3 13C3 7.477 7.477 3 13 3c2 0 4 1 8 0m-8 2a8 8 0 0 0-8 8q0 .543.01 1.046c1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.641 12.5 6.747 14.354 5.776 17H9c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C13.627 5.027 13.401 5 13 5"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732Q3.001 16.327 3 13C3 7.477 7.477 3 13 3c2 0 4 1 8 0"},[])]);
        }
    });
})();

export default IRemixLeaf;
</script>