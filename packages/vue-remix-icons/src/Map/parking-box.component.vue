<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixParkingBox = /* @__PURE__ */ ((_) => {
    return r('parking-box', {
        name: 'i-remix-parking-box',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm4 2h3.5a3.5 3.5 0 0 1 0 7H11v3H9zm2 2v3h1.5a1.5 1.5 0 0 0 0-3z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 14h1.5a3.5 3.5 0 0 0 0-7H9v10h2zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 6h1.5a1.5 1.5 0 0 1 0 3H11z"},[])]);
        }
    });
})();

export default IRemixParkingBox;
</script>