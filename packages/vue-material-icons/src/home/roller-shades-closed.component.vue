<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialRollerShadesClosed = /* @__PURE__ */ ((_) => {
    return r('roller-shades-closed', {
        name: 'i-material-roller-shades-closed',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 19.75' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 5h12v10H6z","opacity":"0.3"},[]),h('path',{d:"M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zm-9 0H6v-2h5zm7 0h-5v-2h5zm0-4H6V5h12z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 20 19.75' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h7.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H21c.55 0 1-.45 1-1s-.45-1-1-1zM6 19v-2h5v2zm7 0v-2h5v2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 3 20 19.75' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zM18 5v10H6V5zM6 19v-2h5v2zm7 0v-2h5v2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.75' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zM6 19v-2h5v2zm7 0v-2h5v2z"},[])]);
        }
    });
})();

export default IMaterialRollerShadesClosed;
</script>