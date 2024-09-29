<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDirection = /* @__PURE__ */ ((_) => {
    return r('direction', {
        name: 'i-remix-direction',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.1 1.1 21.8 21.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3.515 3.515 12 12 20.485 20.485 12zm.707-2.122 9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 0 1 1.414 0M13 10V7.5l3.5 3.5-3.5 3.5V12h-3v3H8v-4a1 1 0 0 1 1-1z"},[])]);
return h('svg',{"viewBox":c ? '1.1 1.1 21.8 21.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 10a1 1 0 0 0-1 1v4h2v-3h3v2.5l3.5-3.5L13 7.5V10zm3.707-8.607 9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 0 1 1.414 0"},[])]);
        }
    });
})();

export default IRemixDirection;
</script>