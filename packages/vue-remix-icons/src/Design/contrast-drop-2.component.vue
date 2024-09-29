<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixContrastDrop2 = /* @__PURE__ */ ((_) => {
    return r('contrast-drop-2', {
        name: 'i-remix-contrast-drop-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 0.27 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3.1 7.05 8.05a7 7 0 1 0 9.9 0zm0-2.828 6.364 6.364a9 9 0 1 1-12.728 0zM7 13h10a5 5 0 0 1-10 0"},[])]);
return h('svg',{"viewBox":c ? '3 0.27 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.636 6.636 12 .272l6.364 6.364a9 9 0 1 1-12.728 0M12 3.101 7.05 8.05A6.98 6.98 0 0 0 5 13h14a6.98 6.98 0 0 0-2.05-4.95L12 3.1z"},[])]);
        }
    });
})();

export default IRemixContrastDrop2;
</script>