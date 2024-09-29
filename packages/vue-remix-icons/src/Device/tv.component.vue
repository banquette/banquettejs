<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTv = /* @__PURE__ */ ((_) => {
    return r('tv', {
        name: 'i-remix-tv',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.05 20 19.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414zM4 7v12h16V7z"},[])]);
return h('svg',{"viewBox":c ? '2 1.05 20 19.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414z"},[])]);
        }
    });
})();

export default IRemixTv;
</script>