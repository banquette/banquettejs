<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('contrast-drop', {
        name: 'i-remix-contrast-drop',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 0.27 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3.1 7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828 6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM12 18V8a5 5 0 0 1 0 10z"},[])]);
return h('svg',{"viewBox":c ? '3 0.27 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.636 6.636 12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM7.05 8.05A7 7 0 0 0 12.004 20L12 3.1 7.05 8.05z"},[])]);
        }
    });
})();
</script>