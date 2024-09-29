<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMailCheck = /* @__PURE__ */ ((_) => {
    return r('mail-check', {
        name: 'i-remix-mail-check',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21.95 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 14h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM19 22l-3.536-3.536 1.415-1.414L19 19.172l3.536-3.536 1.414 1.414z"},[])]);
return h('svg',{"viewBox":c ? '2 3 21.95 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513zM19 22l-3.536-3.536 1.415-1.414L19 19.172l3.536-3.536 1.414 1.414z"},[])]);
        }
    });
})();

export default IRemixMailCheck;
</script>