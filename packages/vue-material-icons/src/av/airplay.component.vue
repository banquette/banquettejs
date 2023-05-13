<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('airplay', {
        name: 'i-material-airplay',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 22h12l-6-6-6 6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6V3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.41 22h7.17c.89 0 1.34-1.08.71-1.71L12.7 16.7a.996.996 0 0 0-1.41 0L7.7 20.29c-.62.63-.18 1.71.71 1.71zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 22h12l-6-6z"},[]),h('path',{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},[])]);
        }
    });
})();
</script>