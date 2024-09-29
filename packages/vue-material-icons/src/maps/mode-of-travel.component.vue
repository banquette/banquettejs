<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialModeOfTravel = /* @__PURE__ */ ((_) => {
    return r('mode-of-travel', {
        name: 'i-material-mode-of-travel',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 18.79 19.67' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 10.2C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h2.32c.45 0 .67.54.35.85l-3.29 3.29c-.2.2-.51.2-.71 0l-3.29-3.29a.5.5 0 0 1 .35-.85h2.26C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14q.96-.885 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39c-.78.82-1.67 1.66-2.65 2.52-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 19.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4.19 0 7.99 3.21 8 8.17l2.09-2.09L23.5 9.5 19 14l-4.5-4.5 1.41-1.41L18 10.17C17.99 6.55 15.34 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14q.96-.885 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39"},[])]);
return h('svg',{"viewBox":c ? '4 2 19.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h3.53L19 14l-4.5-4.5h3.47C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14q.96-.885 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39"},[])]);
        }
    });
})();

export default IMaterialModeOfTravel;
</script>