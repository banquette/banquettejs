<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('skip-back', {
        name: 'i-remix-skip-back',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '6 4 13 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 11.333 10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 0 1-2 0V5a1 1 0 1 1 2 0v6.333zm9 4.93V7.737L10.606 12 17 16.263z"},[])]);
return h('svg',{"viewBox":c ? '6 4 13 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 11.333 10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 0 1-2 0V5a1 1 0 1 1 2 0v6.333z"},[])]);
        }
    });
})();
</script>