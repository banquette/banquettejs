<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixGitRepository = /* @__PURE__ */ ((_) => {
    return r('git-repository', {
        name: 'i-remix-git-repository',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6zm6-5V4H6v10.035A3.5 3.5 0 0 1 6.5 14zM7 5h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 0 0 0 3zM7 5v2h2V5zm0 3v2h2V8zm0 3v2h2v-2z"},[])]);
        }
    });
})();

export default IRemixGitRepository;
</script>