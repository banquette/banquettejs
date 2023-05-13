<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('gite', {
        name: 'i-material-gite',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z","opacity":"0.3"},[]),h('path',{d:"M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.41 9.41-2.83-2.83c-.37-.37-.88-.58-1.41-.58H9V5c0-.55-.45-1-1-1s-1 .45-1 1v1h-.17c-.53 0-1.04.21-1.42.59L2.59 9.41c-.38.38-.59.89-.59 1.42V17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.17c0-.53-.21-1.04-.59-1.42zM14 17H4v-5h10v5zm6 0h-4v-6.17l2-2 2 2V17z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z"},[])]);
        }
    });
})();
</script>