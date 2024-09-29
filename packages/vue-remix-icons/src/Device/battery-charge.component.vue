<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBatteryCharge = /* @__PURE__ */ ((_) => {
    return r('battery-charge', {
        name: 'i-remix-battery-charge',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 5 21 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.625L8.458 7H4v10h4zm4.375 0 1.167-2H18V7h-4V5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zM21 9h2v6h-2zm-9 2h3l-5 8v-6H7l5-8z"},[])]);
return h('svg',{"viewBox":c ? '2 5 21 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 11V5l-5 8h3v6l5-8zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m18 4h2v6h-2z"},[])]);
        }
    });
})();

export default IRemixBatteryCharge;
</script>