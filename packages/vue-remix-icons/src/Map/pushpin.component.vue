<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPushpin = /* @__PURE__ */ ((_) => {
    return r('pushpin', {
        name: 'i-remix-pushpin',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.22 1.69 19.09 19.09' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.828 1.686 8.486 8.486-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.242 1.414-1.415L8.88 8.05l4.242-4.242-.707-.707zm.708 3.536-4.671 4.67-2.822.565 6.5 6.5.564-2.822 4.671-4.67z"},[])]);
return h('svg',{"viewBox":c ? '3.22 1.69 19.09 19.09' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22.314 10.172-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.242 1.414-1.415L8.88 8.05l4.242-4.242-.707-.707 1.414-1.415z"},[])]);
        }
    });
})();

export default IRemixPushpin;
</script>