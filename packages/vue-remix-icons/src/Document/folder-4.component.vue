<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolder4 = /* @__PURE__ */ ((_) => {
    return r('folder-4', {
        name: 'i-remix-folder-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM8 19h12v-8H8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 21V11h14v9a1 1 0 0 1-1 1zm-2 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v3H7a1 1 0 0 0-1 1z"},[])]);
        }
    });
})();

export default IRemixFolder4;
</script>