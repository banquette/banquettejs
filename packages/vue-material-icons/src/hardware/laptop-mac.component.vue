<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLaptopMac = /* @__PURE__ */ ((_) => {
    return r('laptop-mac', {
        name: 'i-material-laptop-mac',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 5h16v11H4z","opacity":"0.3"},[]),h('path',{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 18 1.99-2L22 3H2v13l2 2H0v2h24v-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1m7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
        }
    });
})();

export default IMaterialLaptopMac;
</script>