<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTrophy = /* @__PURE__ */ ((_) => {
    return r('trophy', {
        name: 'i-remix-trophy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 16.938V19h5v2H6v-2h5v-2.062A8 8 0 0 1 4 9V3h16v6a8 8 0 0 1-7 7.938M6 5v4a6 6 0 1 0 12 0V5zM1 5h2v4H1zm20 0h2v4h-2z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 16.938V19h5v2H6v-2h5v-2.062A8 8 0 0 1 4 9V3h16v6a8 8 0 0 1-7 7.938M1 5h2v4H1zm20 0h2v4h-2z"},[])]);
        }
    });
})();

export default IRemixTrophy;
</script>