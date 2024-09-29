<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRecordCircle = /* @__PURE__ */ ((_) => {
    return r('record-circle', {
        name: 'i-remix-record-circle',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6"},[])]);
        }
    });
})();

export default IRemixRecordCircle;
</script>