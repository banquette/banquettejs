<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHourglassDisabled = /* @__PURE__ */ ((_) => {
    return r('hourglass-disabled', {
        name: 'i-material-hourglass-disabled',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1.1 2 20.38 20.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l8.19 8.19-3 3.01c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c.86 0 1.58-.54 1.87-1.3l1.91 1.91a.996.996 0 1 0 1.41-1.41zM16 19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l2.84-2.84L16 18.83zM8 5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5l-2.84 2.84 1.25 1.25 3-2.99c.38-.38.59-.89.59-1.42V4a2 2 0 0 0-2-2H8c-.86 0-1.58.54-1.87 1.3L8 5.17z"},[])]);
return h('svg',{"viewBox":c ? '0.69 2 21.21 21.32' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 4h8v3.5l-2.84 2.84 1.25 1.25L18 8.01 17.99 8H18V2H6v1.17l2 2zM2.1 2.1.69 3.51l8.9 8.9L6 16l.01.01H6V22h12v-1.17l2.49 2.49 1.41-1.41zM16 20H8v-3.5l2.84-2.84L16 18.83z"},[])]);
        }
    });
})();

export default IMaterialHourglassDisabled;
</script>