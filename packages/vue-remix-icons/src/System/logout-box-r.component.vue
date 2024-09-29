<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLogoutBoxR = /* @__PURE__ */ ((_) => {
    return r('logout-box-r', {
        name: 'i-remix-logout-box-r',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1zm13-6v-3h-7v-2h7V8l5 4z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm10-6 5-4-5-4v3H9v2h6z"},[])]);
        }
    });
})();

export default IRemixLogoutBoxR;
</script>