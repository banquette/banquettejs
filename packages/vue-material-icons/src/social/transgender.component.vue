<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('transgender', {
        name: 'i-material-transgender',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1.5 1 21 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.5 1h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.58l-3.97 3.97C14.23 6.36 13.16 6 12 6s-2.23.36-3.11.97l-.65-.65.7-.7a.996.996 0 1 0-1.41-1.41l-.7.7L4.92 3H6.5c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V4.42l1.91 1.9-.71.71a.996.996 0 1 0 1.41 1.41l.71-.71.65.65A5.5 5.5 0 0 0 11 16.91V19h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2.09a5.5 5.5 0 0 0 3.53-8.53l3.97-3.96V6c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zM12 15c-1.93 0-3.5-1.57-3.5-3.5S10.07 8 12 8s3.5 1.57 3.5 3.5S13.93 15 12 15z"},[])]);
return h('svg',{"viewBox":c ? '1.5 1 21 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8c1.93 0 3.5 1.57 3.5 3.5S13.93 15 12 15s-3.5-1.57-3.5-3.5S10.07 8 12 8zm4.53.38 3.97-3.96V7h2V1h-6v2h2.58l-3.97 3.97C14.23 6.36 13.16 6 12 6s-2.23.36-3.11.97l-.65-.65 1.41-1.41-1.41-1.42L6.82 4.9 4.92 3H7.5V1h-6v6h2V4.42l1.91 1.9-1.42 1.42L5.4 9.15l1.41-1.41.65.65c-.6.88-.96 1.95-.96 3.11a5.5 5.5 0 0 0 4.5 5.41V19H9v2h2v2h2v-2h2v-2h-2v-2.09a5.5 5.5 0 0 0 3.53-8.53z"},[])]);
        }
    });
})();
</script>