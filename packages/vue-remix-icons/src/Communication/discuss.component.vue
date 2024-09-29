<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDiscuss = /* @__PURE__ */ ((_) => {
    return r('discuss', {
        name: 'i-remix-discuss',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 22.5 11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2zm1.839-5.5H21V8.103H7V17h5.161L14 19.298zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.8 19 14 22.5 11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1"},[])]);
        }
    });
})();

export default IRemixDiscuss;
</script>