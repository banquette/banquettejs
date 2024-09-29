<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixGitRepositoryPrivate = /* @__PURE__ */ ((_) => {
    return r('git-repository-private', {
        name: 'i-remix-git-repository-private',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 10v10h13V10zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 1 0-8 0v1zm-9 3h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 1 0-8 0v1zm-9 3v2h2v-2zm0 3v2h2v-2zm0 3v2h2v-2z"},[])]);
        }
    });
})();

export default IRemixGitRepositoryPrivate;
</script>