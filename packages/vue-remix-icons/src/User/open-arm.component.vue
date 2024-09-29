<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixOpenArm = /* @__PURE__ */ ((_) => {
    return r('open-arm', {
        name: 'i-remix-open-arm',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.73 2 22.55 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 17v5h-2v-5c0-4.451 2.644-8.285 6.447-10.016l.828 1.82A9 9 0 0 0 18 17M8 17v5H6v-5A9 9 0 0 0 .725 8.805l.828-1.821A11 11 0 0 1 8 17m4-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"},[])]);
return h('svg',{"viewBox":c ? '0.73 2 22.55 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10m6 5v5h-2v-5c0-4.451 2.644-8.285 6.447-10.016l.828 1.82A9 9 0 0 0 18 17M8 17v5H6v-5A9 9 0 0 0 .725 8.805l.828-1.821A11 11 0 0 1 8 17"},[])]);
        }
    });
})();

export default IRemixOpenArm;
</script>