<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('wifi-off', {
        name: 'i-remix-wifi-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.69 1.39 22.62 19.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A2.987 2.987 0 0 1 12 18zM2.808 1.393l17.677 17.678-1.414 1.414-5.18-5.18A5.994 5.994 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332l-1.256-1.556a7.963 7.963 0 0 1 4.622-1.766L9 10.414a10.969 10.969 0 0 0-3.912 2.029L3.83 10.887A12.984 12.984 0 0 1 7.416 8.83L5.132 6.545a16.009 16.009 0 0 0-3.185 2.007L.689 6.997a18.018 18.018 0 0 1 2.952-1.942L1.393 2.808l1.415-1.415zM14.5 10.285l-2.284-2.283L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.258 1.556a10.96 10.96 0 0 0-4.412-2.158zM12 3c4.285 0 8.22 1.497 11.31 3.997l-1.257 1.555A15.933 15.933 0 0 0 12 5c-.878 0-1.74.07-2.58.207L7.725 3.51A18.077 18.077 0 0 1 12 3z"},[])]);
return h('svg',{"viewBox":c ? '0.69 1.39 22.62 19.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A2.987 2.987 0 0 1 12 18zM2.808 1.393l17.677 17.678-1.414 1.414-3.682-3.68-.247.306A4.98 4.98 0 0 0 12 16a4.98 4.98 0 0 0-3.141 1.11l-1.885-2.334a7.963 7.963 0 0 1 4.622-1.766l-1.773-1.772a9.963 9.963 0 0 0-4.106 1.982L3.83 10.887A12.984 12.984 0 0 1 7.416 8.83L5.885 7.3a15 15 0 0 0-3.31 2.031L.689 6.997a18.018 18.018 0 0 1 2.952-1.942L1.393 2.808l1.415-1.415zM16.084 11.87l-3.868-3.867L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.886 2.334a10 10 0 0 0-2.2-1.352zM12 3c4.285 0 8.22 1.497 11.31 3.997L21.426 9.33A14.937 14.937 0 0 0 12 6c-.572 0-1.136.032-1.69.094L7.723 3.511A18.054 18.054 0 0 1 12 3z"},[])]);
        }
    });
})();
</script>