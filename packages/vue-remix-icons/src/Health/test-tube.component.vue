<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTestTube = /* @__PURE__ */ ((_) => {
    return r('test-tube', {
        name: 'i-remix-test-tube',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2zm-3 8h-4v8a2 2 0 1 0 4 0zm-1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3-8h-4v4h4z"},[])]);
return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2zm-4 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3-8h-4v4h4z"},[])]);
        }
    });
})();

export default IRemixTestTube;
</script>