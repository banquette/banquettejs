<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('play-mini', {
        name: 'i-remix-play-mini',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '7 5.37 11.51 13.26' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 8.482v7.036L15.03 12 9 8.482zM7.752 5.44l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.128V5.871a.5.5 0 0 1 .752-.432z"},[])]);
return h('svg',{"viewBox":c ? '7 5.37 11.51 13.26' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7.752 5.439 10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.128V5.871a.5.5 0 0 1 .752-.432z"},[])]);
        }
    });
})();
</script>