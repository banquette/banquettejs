<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalCellularAlt2Bar = /* @__PURE__ */ ((_) => {
    return r('signal-cellular-alt-2-bar', {
        name: 'i-material-signal-cellular-alt-2-bar',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5 9 9 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.5 20c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5m6 0c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5"},[])]);
return h('svg',{"viewBox":c ? '5 9 9 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 14h3v6H5zm6-5h3v11h-3z"},[])]);
        }
    });
})();

export default IMaterialSignalCellularAlt2Bar;
</script>