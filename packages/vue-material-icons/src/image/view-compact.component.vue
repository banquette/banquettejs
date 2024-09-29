<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialViewCompact = /* @__PURE__ */ ((_) => {
    return r('view-compact', {
        name: 'i-material-view-compact',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 13.25h2.5v-2.5H4zM4 18h2.5v-2.5H4zm4.5-9.5H11V6H8.5zm9 9.5H20v-2.5h-2.5zm0-4.75H20v-2.5h-2.5zm0-7.25v2.5H20V6zM13 8.5h2.5V6H13zm-4.5 4.75H11v-2.5H8.5zm0 4.75H11v-2.5H8.5zM4 8.5h2.5V6H4zm9 4.75h2.5v-2.5H13zM13 18h2.5v-2.5H13z","opacity":"0.3"},[]),h('path',{d:"M2 4v16h20V4zm4.5 14H4v-2.5h2.5zm0-4.75H4v-2.5h2.5zm0-4.75H4V6h2.5zM11 18H8.5v-2.5H11zm0-4.75H8.5v-2.5H11zm0-4.75H8.5V6H11zm4.5 9.5H13v-2.5h2.5zm0-4.75H13v-2.5h2.5zm0-4.75H13V6h2.5zM20 18h-2.5v-2.5H20zm0-4.75h-2.5v-2.5H20zm0-4.75h-2.5V6H20z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 4v16h20V4zm4.5 14H4v-2.5h2.5zm0-4.75H4v-2.5h2.5zm0-4.75H4V6h2.5zM11 18H8.5v-2.5H11zm0-4.75H8.5v-2.5H11zm0-4.75H8.5V6H11zm4.5 9.5H13v-2.5h2.5zm0-4.75H13v-2.5h2.5zm0-4.75H13V6h2.5zM20 18h-2.5v-2.5H20zm0-4.75h-2.5v-2.5H20zm0-4.75h-2.5V6H20z"},[])]);
return h('svg',{"viewBox":c ? '4 6 16 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 18h2.5v-2.5H4zm0-4.75h2.5v-2.5H4zM4 8.5h2.5V6H4zM17.5 6v2.5H20V6zM13 8.5h2.5V6H13zm4.5 9.5H20v-2.5h-2.5zm0-4.75H20v-2.5h-2.5zM8.5 18H11v-2.5H8.5zm4.5 0h2.5v-2.5H13zM8.5 8.5H11V6H8.5zm4.5 4.75h2.5v-2.5H13zm-4.5 0H11v-2.5H8.5z"},[])]);
        }
    });
})();

export default IMaterialViewCompact;
</script>