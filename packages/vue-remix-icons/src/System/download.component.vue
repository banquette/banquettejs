<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDownload = /* @__PURE__ */ ((_) => {
    return r('download', {
        name: 'i-remix-download',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h18v2H3zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h18v2H3zM13 9h7l-8 8-8-8h7V1h2z"},[])]);
        }
    });
})();

export default IRemixDownload;
</script>