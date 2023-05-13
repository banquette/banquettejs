<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('keyboard-tab', {
        name: 'i-material-keyboard-tab',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1 6 21 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.29 8.12 15.17 11H2c-.55 0-1 .45-1 1s.45 1 1 1h13.17l-2.88 2.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42zM20 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"},[])]);
return h('svg',{"viewBox":c ? '1 6 21 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"},[])]);
        }
    });
})();
</script>