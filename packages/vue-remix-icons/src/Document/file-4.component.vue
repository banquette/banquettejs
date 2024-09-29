<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFile4 = /* @__PURE__ */ ((_) => {
    return r('file-4', {
        name: 'i-remix-file-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 16-6.003 6H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2-1V4H5v16h9v-5z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 15h-7v7H3.998C3.447 22 3 21.545 3 21.008V2.992C3 2.444 3.445 2 3.993 2h16.014A1 1 0 0 1 21 3.007zm0 2-5 4.997V17z"},[])]);
        }
    });
})();

export default IRemixFile4;
</script>