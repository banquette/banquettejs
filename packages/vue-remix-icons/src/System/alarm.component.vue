<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('alarm', {
        name: 'i-remix-alarm',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.75 2.75 20.51 19.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm1-7h3v2h-5V8h2v5zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.747 6.282zm16.97-3.535 3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z"},[])]);
return h('svg',{"viewBox":c ? '1.75 2.75 20.51 19.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm1-9V8h-2v7h5v-2h-3zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.747 6.282zm16.97-3.535 3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z"},[])]);
        }
    });
})();
</script>