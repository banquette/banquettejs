<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRemixicon = /* @__PURE__ */ ((_) => {
    return r('remixicon', {
        name: 'i-remix-remixicon',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.5 18 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6.364 6 8.784 9.663.72-.283c1.685-.661 2.864-2.156 3.092-3.896A6.5 6.5 0 0 1 12.077 6zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947 0 2.891-1.822 5.364-4.4 6.377L20 21H3V4h11.111A4.5 4.5 0 0 0 14 5m4.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M5 7.47V19h10.48z"},[])]);
return h('svg',{"viewBox":c ? '3 2.5 18 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.53 17.53 20 21H3V4h10.667v.008A7 7 0 0 1 14.136 4q-.135.556-.136 1.166C14 7.485 16.015 9.5 18.667 9.5a4.2 4.2 0 0 0 2.032-.538 7.003 7.003 0 0 1-4.17 8.567zM18.5 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"},[])]);
        }
    });
})();

export default IRemixRemixicon;
</script>