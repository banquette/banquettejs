<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHandbag = /* @__PURE__ */ ((_) => {
    return r('handbag', {
        name: 'i-remix-handbag',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.08 2 19.84 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7m7.147 9H4.852l-.693 9H19.84zM14 13v2h-4v-2zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995z"},[])]);
return h('svg',{"viewBox":c ? '2.08 2 19.84 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7m2 11h-4v2h4zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995z"},[])]);
        }
    });
})();

export default IRemixHandbag;
</script>