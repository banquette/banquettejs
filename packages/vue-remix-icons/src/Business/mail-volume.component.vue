<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMailVolume = /* @__PURE__ */ ((_) => {
    return r('mail-volume', {
        name: 'i-remix-mail-volume',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21.01 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 14.5v9L16.667 21H14v-4h2.667zM21 3a1 1 0 0 1 1 1v9h-2V7.237l-7.928 7.101L4 7.215V19h8v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 14a2 2 0 0 1 .15 3.995L21 21zM19.5 5H4.511l7.55 6.662z"},[])]);
return h('svg',{"viewBox":c ? '2 3 21.01 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 14.5v9L16.667 21H14v-4h2.667zM21 3a1 1 0 0 1 1 1v10.529A6 6 0 0 0 12.34 21H3.002a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 14a2 2 0 0 1 .15 3.995L21 21zM5.647 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.286 5.438z"},[])]);
        }
    });
})();

export default IRemixMailVolume;
</script>