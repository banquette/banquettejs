<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCoins = /* @__PURE__ */ ((_) => {
    return r('coins', {
        name: 'i-remix-coins',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8 8 0 0 1 14 2m-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m1 1v1h2v2H9a.5.5 0 0 0-.09.992L9 13h2a2.5 2.5 0 1 1 0 5v1H9v-1H7v-2h4a.5.5 0 0 0 .09-.992L11 15H9a2.5 2.5 0 1 1 0-5V9zm3-5a6 6 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8 8 0 0 1 14 2m-3 7H9v1a2.5 2.5 0 0 0-.164 4.995L9 15h2l.09.008a.5.5 0 0 1 0 .984L11 16H7v2h2v1h2v-1a2.5 2.5 0 0 0 .164-4.995L11 13H9l-.09-.008a.5.5 0 0 1 0-.984L9 12h4v-2h-2zm3-5a6 6 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4"},[])]);
        }
    });
})();

export default IRemixCoins;
</script>