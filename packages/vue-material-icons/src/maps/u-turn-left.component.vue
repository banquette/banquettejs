<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialUTurnLeft = /* @__PURE__ */ ((_) => {
    return r('u-turn-left', {
        name: 'i-material-u-turn-left',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.42 3 14.58 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.71 12.29a.996.996 0 0 1 1.41 0l.88.88V9c0-3.31 2.69-6 6-6s6 2.69 6 6v11c0 .55-.45 1-1 1s-1-.45-1-1V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l.88-.88a.996.996 0 1 1 1.41 1.41L7.7 16.29a.996.996 0 0 1-1.41 0L3.7 13.7c-.38-.38-.38-1.02.01-1.41"},[])]);
return h('svg',{"viewBox":c ? '3 3 15 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4-4-4 1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6"},[])]);
        }
    });
})();

export default IMaterialUTurnLeft;
</script>