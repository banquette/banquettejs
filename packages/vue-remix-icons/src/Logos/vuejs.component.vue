<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixVuejs = /* @__PURE__ */ ((_) => {
    return r('vuejs', {
        name: 'i-remix-vuejs',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.316 3 12 18l8.684-15H23L12 22 1 3zm4.342 0L12 10.5 16.342 3h2.316L12 14.5 5.342 3z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1 3h4l7 12 7-12h4L12 22zm8.667 0L12 7l2.333-4h4.035L12 14 5.632 3z"},[])]);
        }
    });
})();

export default IRemixVuejs;
</script>