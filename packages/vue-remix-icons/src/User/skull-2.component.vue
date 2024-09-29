<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSkull2 = /* @__PURE__ */ ((_) => {
    return r('skull-2', {
        name: 'i-remix-skull-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a3 3 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5q0 .258.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-7.996 7.75L4 12v3.764l4 2v1.591l.075-.084a4 4 0 0 1 2.723-1.266L11 18l2.073.001.223.01a4 4 0 0 1 2.55 1.177l.154.167v-1.591l4-2V12a8 8 0 0 0-8-8m-4 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a3 3 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5q0 .258.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2m-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"},[])]);
        }
    });
})();

export default IRemixSkull2;
</script>