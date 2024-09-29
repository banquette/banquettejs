<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFilm = /* @__PURE__ */ ((_) => {
    return r('film', {
        name: 'i-remix-film',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM8 5v14h8V5zM4 5v2h2V5zm14 0v2h2V5zM4 9v2h2V9zm14 0v2h2V9zM4 13v2h2v-2zm14 0v2h2v-2zM4 17v2h2v-2zm14 0v2h2v-2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM4 5v2h2V5zm14 0v2h2V5zM4 9v2h2V9zm14 0v2h2V9zM4 13v2h2v-2zm14 0v2h2v-2zM4 17v2h2v-2zm14 0v2h2v-2z"},[])]);
        }
    });
})();

export default IRemixFilm;
</script>