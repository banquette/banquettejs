<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('flow-chart', {
        name: 'i-remix-flow-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2.5 1.76 19.74 19.74' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 21.5A3.5 3.5 0 1 1 9.355 17H15v-2h2V9.242L14.757 7H9v2H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15h2v6h-6v-2H9.355A3.501 3.501 0 0 1 6 21.5zm0-5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6 16.5zm13 .5h-2v2h2v-2zM18 4.586 16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z"},[])]);
        }
    });
})();
</script>