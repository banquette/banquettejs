<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBrush2 = /* @__PURE__ */ ((_) => {
    return r('brush-2', {
        name: 'i-remix-brush-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.39 2.58 20.03 20.03' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.536 15.95 2.12-2.122-3.181-3.182 3.535-3.535-2.12-2.121-3.536 3.535-3.182-3.182L8.05 7.464zm-1.415 1.414L6.636 8.879l-2.828 2.828 8.485 8.485zM13.354 5.697l2.828-2.829a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828 2.475 2.475a1 1 0 0 1 0 1.415L13 22.314a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.778-7.778a1 1 0 0 1 1.415 0z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2.58 20.03 20.03' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.536 15.95 2.12-2.122-3.181-3.182 3.535-3.535-2.12-2.121-3.536 3.535-3.182-3.182L8.05 7.464zM13.354 5.697l2.828-2.829a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828 2.475 2.475a1 1 0 0 1 0 1.415L13 22.314a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.778-7.778a1 1 0 0 1 1.415 0z"},[])]);
        }
    });
})();

export default IRemixBrush2;
</script>