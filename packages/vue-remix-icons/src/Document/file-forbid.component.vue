<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileForbid = /* @__PURE__ */ ((_) => {
    return r('file-forbid', {
        name: 'i-remix-file-forbid',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.29 20a7 7 0 0 0 .965 2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a7 7 0 0 0-2-.603V8h-4V4H5v16zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001z"},[])]);
return h('svg',{"viewBox":c ? '3 2 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 11.674A7 7 0 0 0 12.255 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16l5 5zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001z"},[])]);
        }
    });
})();

export default IRemixFileForbid;
</script>