<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('water-flash', {
        name: 'i-remix-water-flash',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 0.27 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3.1 7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828 6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM13 11h2.5L11 17.5V13H8.5L13 6.5V11z"},[])]);
return h('svg',{"viewBox":c ? '3 0.27 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.636 6.636 12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM13 11V6.5L8.5 13H11v4.5l4.5-6.5H13z"},[])]);
        }
    });
})();
</script>