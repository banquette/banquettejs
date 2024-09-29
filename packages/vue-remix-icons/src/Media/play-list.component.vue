<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPlayList = /* @__PURE__ */ ((_) => {
    return r('play-list', {
        name: 'i-remix-play-list',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83M18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
return h('svg',{"viewBox":c ? '2 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83"},[])]);
        }
    });
})();

export default IRemixPlayList;
</script>