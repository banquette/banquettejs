<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixVidicon2 = /* @__PURE__ */ ((_) => {
    return r('vidicon-2', {
        name: 'i-remix-vidicon-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm2 2H3v10h12zm2 4.359 4 2.8V8.84l-4 2.8zM5 10h2v2H5z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-8 4v2h2v-2z"},[])]);
        }
    });
})();

export default IRemixVidicon2;
</script>