<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialRestaurantMenu = /* @__PURE__ */ ((_) => {
    return r('restaurant-menu', {
        name: 'i-material-restaurant-menu',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.74 3.13 19.12 18.16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.1 13.34 2.83-2.83L3.91 3.5a4.01 4.01 0 0 0 0 5.66zm12.05-3.19c1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47c1.53.71 3.68.21 5.27-1.38"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.74 3.13 19.12 17.75' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.1 13.34 2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17a.996.996 0 1 0 1.41 1.41L12 14.41l6.18 6.18a.996.996 0 1 0 1.41-1.41L13.41 13z"},[])]);
return h('svg',{"viewBox":c ? '2.74 3.13 19.12 18.16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.1 13.34 2.83-2.83L3.91 3.5a4.01 4.01 0 0 0 0 5.66zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13z"},[])]);
        }
    });
})();

export default IMaterialRestaurantMenu;
</script>