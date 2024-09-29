<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSearch2 = /* @__PURE__ */ ((_) => {
    return r('search-2', {
        name: 'i-remix-search-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20.31 20.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9m0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7-7 3.132-7 7 3.132 7 7 7m8.485.071 2.829 2.828-1.415 1.415-2.828-2.829z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20.31 20.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9m8.485 16.071 2.829 2.828-1.415 1.415-2.828-2.829z"},[])]);
        }
    });
})();

export default IRemixSearch2;
</script>