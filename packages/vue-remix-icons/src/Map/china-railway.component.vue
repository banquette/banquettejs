<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChinaRailway = /* @__PURE__ */ ((_) => {
    return r('china-railway', {
        name: 'i-remix-china-railway',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 20v-7H9v-3h6v3h-2v7h5v2H6v-2zM10 2.223V1h4v1.223a9.003 9.003 0 0 1 2.993 16.266l-1.11-1.664a7 7 0 1 0-7.767 0l-1.109 1.664A9.003 9.003 0 0 1 10 2.223"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 19v-6l-2-1V9h6v3l-2 1v6l5 1v2H6v-2zM10 2.223V1h4v1.223a9.003 9.003 0 0 1 2.993 16.266l-1.11-1.664a7 7 0 1 0-7.767 0l-1.109 1.664A9.003 9.003 0 0 1 10 2.223"},[])]);
        }
    });
})();

export default IRemixChinaRailway;
</script>