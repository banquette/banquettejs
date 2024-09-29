<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixGame = /* @__PURE__ */ ((_) => {
    return r('game', {
        name: 'i-remix-game',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 17.74 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 4.697 14.477l.208-.157-6.32-6.32 6.32-6.321-.208-.156a7.96 7.96 0 0 0-4.394-1.517zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"},[])]);
return h('svg',{"viewBox":c ? '2 2 17.74 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"},[])]);
        }
    });
})();

export default IRemixGame;
</script>