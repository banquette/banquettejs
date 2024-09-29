<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCollage = /* @__PURE__ */ ((_) => {
    return r('collage', {
        name: 'i-remix-collage',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-8.811 10.158L5 14.25V19h7.218zM19 5h-7.219l2.468 14H19zM9.75 5H5v7.218l5.842-1.03z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.189 13.157 12.57 21H4a1 1 0 0 1-1-1v-5.398zM20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5.398L11.428 3zM9.397 3l1.444 8.188L3 12.57V4a1 1 0 0 1 1-1z"},[])]);
        }
    });
})();

export default IRemixCollage;
</script>