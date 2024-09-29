<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFormatListBulletedAdd = /* @__PURE__ */ ((_) => {
    return r('format-list-bulleted-add', {
        name: 'i-material-format-list-bulleted-add',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 4.5 21 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21zM7 5h13v2H7z"},[]),h('circle',{"cx":"3.5","cy":"18",r:"1.5"},[]),h('path',{d:"M18 11H7v2h6.11c1.26-1.24 2.99-2 4.89-2M7 17v2h4.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1z"},[]),h('circle',{"cx":"3.5","cy":"6",r:"1.5"},[]),h('circle',{"cx":"3.5","cy":"12",r:"1.5"},[])]);
        }
    });
})();

export default IMaterialFormatListBulletedAdd;
</script>