<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('key', {
        name: 'i-remix-key',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 5.99 22 11.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.917 13A6.002 6.002 0 0 1 1 12a6 6 0 0 1 11.917-1H23v2h-2v4h-2v-4h-2v4h-2v-4h-2.083zM7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"},[])]);
return h('svg',{"viewBox":c ? '1 6 22 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 14h-4.341a6 6 0 1 1 0-4H23v4h-2v4h-4v-4zM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},[])]);
        }
    });
})();
</script>