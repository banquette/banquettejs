<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCodepen = /* @__PURE__ */ ((_) => {
    return r('codepen', {
        name: 'i-remix-codepen',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.5 13.202 13 15.535v3.596L19.197 15zM14.697 12 12 10.202 9.303 12 12 13.798zM20 10.869 18.303 12 20 13.131zM19.197 9 13 4.869v3.596l3.5 2.333zM7.5 10.798 11 8.465V4.869L4.803 9zM4.803 15 11 19.131v-3.596l-3.5-2.333zM4 13.131 5.697 12 4 10.869zM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 10.202 9.303 12 12 13.798 14.697 12zm4.5.596L19.197 9 13 4.869v3.596zm3.5.07L18.303 12 20 13.131V10.87zm-3.5 2.334L13 15.535v3.596L19.197 15zM11 8.465V4.869L4.803 9 7.5 10.798zM4.803 15 11 19.131v-3.596l-3.5-2.333zm.894-3L4 10.869v2.262zM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15z"},[])]);
        }
    });
})();

export default IRemixCodepen;
</script>