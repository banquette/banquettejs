<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('network-ping', {
        name: 'i-material-network-ping',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2.42 6 19.58 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.71 6.79a.996.996 0 0 0 0 1.41L10.5 16H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-5.5l5.15-5.15A2.5 2.5 0 1 0 19.5 6 2.5 2.5 0 0 0 17 8.5c0 .35.07.67.2.97l-5.2 5.2-7.88-7.88a.996.996 0 0 0-1.41 0z"},[])]);
return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14.67 3.41 6.09 2 7.5l8.5 8.5H4v2h16v-2h-6.5l5.15-5.15A2.5 2.5 0 1 0 19.5 6 2.5 2.5 0 0 0 17 8.5c0 .35.07.67.2.97l-5.2 5.2z"},[])]);
        }
    });
})();
</script>