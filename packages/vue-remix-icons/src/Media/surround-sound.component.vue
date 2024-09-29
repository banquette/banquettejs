<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSurroundSound = /* @__PURE__ */ ((_) => {
    return r('surround-sound', {
        name: 'i-remix-surround-sound',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121 1.414 1.415A4.98 4.98 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.98 6.98 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95zm9.9 0a6.98 6.98 0 0 1 2.05 4.95 6.98 6.98 0 0 1-2.05 4.95l-1.414-1.414A4.98 4.98 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535L16.95 7.12zM12 13.071a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121A6.98 6.98 0 0 0 5 12.071c0 1.933.784 3.683 2.05 4.95l1.414-1.414A4.98 4.98 0 0 1 7 12.07c0-1.38.56-2.63 1.464-3.535L7.05 7.12zm9.9 0-1.414 1.415A4.98 4.98 0 0 1 17 12.07c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 19 12.07a6.98 6.98 0 0 0-2.05-4.95zM12 15.071a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},[])]);
        }
    });
})();

export default IRemixSurroundSound;
</script>