<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTruck = /* @__PURE__ */ ((_) => {
    return r('truck', {
        name: 'i-remix-truck',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 5 22 16.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95zm2 6h4v-.285L18.992 10H17zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001M7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"},[])]);
return h('svg',{"viewBox":c ? '1 5 22 16.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 8h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 2v3h4v-.285L18.992 10z"},[])]);
        }
    });
})();

export default IRemixTruck;
</script>