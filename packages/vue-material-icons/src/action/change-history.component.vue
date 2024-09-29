<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialChangeHistory = /* @__PURE__ */ ((_) => {
    return r('change-history', {
        name: 'i-material-change-history',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.77 5.61 18h12.78z","opacity":"0.3"},[]),h('path',{d:"M12 4 2 20h20zm0 3.77L18.39 18H5.61z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.8 4.89 18.4 15.11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.77 18.39 18H5.61zm-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.77 18.39 18H5.61zM12 4 2 20h20z"},[])]);
        }
    });
})();

export default IMaterialChangeHistory;
</script>