<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBarChart2 = /* @__PURE__ */ ((_) => {
    return r('bar-chart-2', {
        name: 'i-remix-bar-chart-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 13h6v8H2zm14-5h6v13h-6zM9 3h6v18H9zM4 15v4h2v-4zm7-10v14h2V5zm7 5v9h2v-9z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 13h6v8H2zM9 3h6v18H9zm7 5h6v13h-6z"},[])]);
        }
    });
})();

export default IRemixBarChart2;
</script>