<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixStrikethrough = /* @__PURE__ */ ((_) => {
    return r('strikethrough', {
        name: 'i-remix-strikethrough',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.154 14q.346.774.346 1.72 0 2.014-1.571 3.147Q14.356 20 11.586 20q-2.46 0-4.87-1.144V16.6q2.28 1.316 4.666 1.316 3.826 0 3.839-2.197a2.2 2.2 0 0 0-.648-1.603l-.12-.117H3v-2h18v2zm-4.078-3H7.629a4 4 0 0 1-.481-.522Q6.5 9.642 6.5 8.452q0-1.854 1.397-3.153Q9.296 4 12.222 4q2.207 0 4.222.984v2.152q-1.8-1.03-3.946-1.03-3.72 0-3.719 2.346 0 .63.654 1.099t1.613.75q.93.27 2.03.699"},[])]);
        }
    });
})();

export default IRemixStrikethrough;
</script>