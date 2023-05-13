<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('keyboard-double-arrow-up', {
        name: 'i-material-keyboard-double-arrow-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6.41 5.42 11.17 13.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.7 18.29c.39.39 1.02.39 1.41 0L12 14.42l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 12.3a.996.996 0 0 0-1.41 0L6.7 16.88a.996.996 0 0 0 0 1.41z"},[]),h('path',{d:"M6.7 11.7c.39.39 1.02.39 1.41 0L12 7.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L6.7 10.29a.996.996 0 0 0 0 1.41z"},[])]);
return h('svg',{"viewBox":c ? '6 5 12 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},[]),h('path',{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},[])]);
        }
    });
})();
</script>