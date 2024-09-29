<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixGradienter = /* @__PURE__ */ ((_) => {
    return r('gradienter', {
        name: 'i-remix-gradienter',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.05 2 19.9 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.05 13h2.012a8.001 8.001 0 0 0 15.876 0h2.013c-.502 5.053-4.766 9-9.951 9s-9.449-3.947-9.95-9m0-2c.5-5.053 4.764-9 9.95-9s9.449 3.947 9.95 9h-2.012a8.001 8.001 0 0 0-15.876 0zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M8.126 11H4.062a8 8 0 0 0 0 2h4.064a4 4 0 0 1 0-2m7.748 0a4 4 0 0 1 0 2h4.064a8 8 0 0 0 0-2zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixGradienter;
</script>