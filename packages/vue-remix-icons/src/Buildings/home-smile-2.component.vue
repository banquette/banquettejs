<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHomeSmile2 = /* @__PURE__ */ ((_) => {
    return r('home-smile-2', {
        name: 'i-remix-home-smile-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 19V9.799l-7-5.522-7 5.522V19zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0z"},[])]);
        }
    });
})();

export default IRemixHomeSmile2;
</script>