<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDock = /* @__PURE__ */ ((_) => {
    return r('dock', {
        name: 'i-material-dock',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 1 12 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5h8v10H8z","opacity":"0.3"},[]),h('path',{d:"M8 21h8v2H8zm8-19.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M16 15H8V5h8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '6 1 12 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 23h8v-2H8zM18 1.01 6 1v18h12zM16 15H8V5h8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 1 12 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 23h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1m7-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M16 15H8V5h8z"},[])]);
return h('svg',{"viewBox":c ? '6 1 12 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 23h8v-2H8zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M16 15H8V5h8z"},[])]);
        }
    });
})();

export default IMaterialDock;
</script>