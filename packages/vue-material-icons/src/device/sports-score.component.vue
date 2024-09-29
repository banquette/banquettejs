<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSportsScore = /* @__PURE__ */ ((_) => {
    return r('sports-score', {
        name: 'i-material-sports-score',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1v-7h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z"},[])]);
return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z"},[])]);
        }
    });
})();

export default IMaterialSportsScore;
</script>