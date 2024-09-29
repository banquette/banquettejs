<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBoy = /* @__PURE__ */ ((_) => {
    return r('boy', {
        name: 'i-material-boy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '9 4 6 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5M14 19c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4c-.55 0-1-.45-1-1v-3.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V14c0 .55-.45 1-1 1z"},[])]);
return h('svg',{"viewBox":c ? '9 4 6 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5M14 20v-5h1v-4.5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2V15h1v5z"},[])]);
        }
    });
})();

export default IMaterialBoy;
</script>