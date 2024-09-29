<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMailForbid = /* @__PURE__ */ ((_) => {
    return r('mail-forbid', {
        name: 'i-remix-mail-forbid',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 7.238-7.928 7.1L4 7.216V19h7.07a7 7 0 0 0 .604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a7 7 0 0 0-2-.965zM19.501 5H4.511l7.55 6.662zm-2.794 15.708a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10"},[])]);
return h('svg',{"viewBox":c ? '2 3 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.266 11.554 4.388-3.798-1.308-1.512-6.285 5.439-6.414-5.445-1.294 1.524 7.702 6.54A6.97 6.97 0 0 0 11 18c0 1.074.242 2.09.674 3H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255A6.97 6.97 0 0 0 18 11c-.97 0-1.894.197-2.734.554m1.44 9.154a3 3 0 0 0 4.001-4.001l-4 4zm-1.414-1.415 4.001-4a3 3 0 0 0-4.001 4.001zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10"},[])]);
        }
    });
})();

export default IRemixMailForbid;
</script>