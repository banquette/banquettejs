<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('line-chart', {
        name: 'i-remix-line-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18.71 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 3v16h16v2H3V3h2zm15.293 3.293 1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"},[])]);
return h('svg',{"viewBox":c ? '3 3 19.06 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 3v16h16v2H3V3h2zm14.94 2.94 2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z"},[])]);
        }
    });
})();
</script>