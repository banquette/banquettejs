<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHourglassTop = /* @__PURE__ */ ((_) => {
    return r('hourglass-top', {
        name: 'i-material-hourglass-top',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 7.5 4 4 4-4V4H8z","opacity":"0.3"},[]),h('path',{d:"m8 7.5 4 4 4-4V4H8z","opacity":"0.3"},[]),h('path',{d:"M18 2H6v6l4 4-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99zm-2 14.5V20H8v-3.5l4-4zm0-9-4 4-4-4V4h8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 2c-1.1 0-2 .9-2 2l.01 3.18c0 .53.21 1.03.58 1.41L10 12l-3.41 3.43c-.37.37-.58.88-.58 1.41L6 20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2zm8 14.91V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.09c0-.27.11-.52.29-.71L12 12.5l3.71 3.71c.18.18.29.44.29.7"},[])]);
return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2zm10 14.5V20H8v-3.5l4-4z"},[])]);
        }
    });
})();

export default IMaterialHourglassTop;
</script>