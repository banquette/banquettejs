<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMoneyCnyBox = /* @__PURE__ */ ((_) => {
    return r('money-cny-box', {
        name: 'i-remix-money-cny-box',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm9 8h3v2h-3v2h-2v-2H8v-2h3v-1H8v-2h2.586L8.464 7.879 9.88 6.464 12 8.586l2.121-2.122 1.415 1.415L13.414 10H16v2h-3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 10v-1h3v-2h-2.586l2.122-2.121-1.415-1.415L12 8.586 9.879 6.464 8.464 7.88 10.586 10H8v2h3v1H8v2h3v2h2v-2h3v-2z"},[])]);
        }
    });
})();

export default IRemixMoneyCnyBox;
</script>