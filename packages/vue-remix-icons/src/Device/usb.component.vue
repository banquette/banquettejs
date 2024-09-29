<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixUsb = /* @__PURE__ */ ((_) => {
    return r('usb', {
        name: 'i-remix-usb',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 1 3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553a3 3 0 1 1-2.31.129L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9zm0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2"},[])]);
return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 1 3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553a3 3 0 1 1-2.31.129L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9z"},[])]);
        }
    });
})();

export default IRemixUsb;
</script>