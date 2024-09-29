<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixGift = /* @__PURE__ */ ((_) => {
    return r('gift', {
        name: 'i-remix-gift',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.98 3.98 0 0 1 15 2m-4 8H5v9h6zm8 0h-6v9h6zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.98 3.98 0 0 1 15 2m-2 8h-2v10h2zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2"},[])]);
        }
    });
})();

export default IRemixGift;
</script>