<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCallMissed = /* @__PURE__ */ ((_) => {
    return r('call-missed', {
        name: 'i-material-call-missed',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 7 18 10.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5 10.41 7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 7 17.58 9.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.89 7.7 12 14.59 6.41 9H10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-3.59l6.29 6.29c.39.39 1.02.39 1.41 0l7.59-7.59a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.4 0"},[])]);
return h('svg',{"viewBox":c ? '3 7 18 10.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"},[])]);
        }
    });
})();

export default IMaterialCallMissed;
</script>