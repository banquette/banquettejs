<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('folder-shared', {
        name: 'i-remix-folder-shared',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7zm-4 4v-3.5l5 4.5-5 4.5V19h-3v-2h3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 21 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 13.126A6 6 0 0 0 13.303 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7.126zM18 17v-3.5l5 4.5-5 4.5V19h-3v-2h3z"},[])]);
        }
    });
})();
</script>