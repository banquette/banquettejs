<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFacebook = /* @__PURE__ */ ((_) => {
    return r('facebook', {
        name: 'i-remix-facebook',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '7 2 10.5 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2q.783 0 1.372.15V4h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138z"},[])]);
return h('svg',{"viewBox":c ? '7 2 10.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"},[])]);
        }
    });
})();

export default IRemixFacebook;
</script>