<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixUserStar = /* @__PURE__ */ ((_) => {
    return r('user-star', {
        name: 'i-remix-user-star',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 1 18.75 22.05' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m6 10.5-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272z"},[])]);
return h('svg',{"viewBox":c ? '4 1 18.75 22.05' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14v8H4a8 8 0 0 1 8-8m6 7.5-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6"},[])]);
        }
    });
})();

export default IRemixUserStar;
</script>