<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialGolfCourse = /* @__PURE__ */ ((_) => {
    return r('golf-course', {
        name: 'i-material-golf-course',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"19.5","cy":"19.5",r:"1.5","opacity":"0.3"},[]),h('path',{d:"M17 5.92 9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98z","opacity":"0.3"},[]),h('circle',{"cx":"19.5","cy":"19.5",r:"1.5"},[]),h('path',{d:"M17 5.92 9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2.6 17 19.4' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"19.5","cy":"19.5",r:"1.5"},[]),h('path',{d:"M11 18.03V8.98l4.22-2.15c.73-.37.73-1.43-.01-1.79l-4.76-2.33C9.78 2.38 9 2.86 9 3.6V19c0 .55-.45 1-1 1s-1-.45-1-1v-.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97"},[])]);
return h('svg',{"viewBox":c ? '4 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"19.5","cy":"19.5",r:"1.5"},[]),h('path',{d:"M17 5.92 9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98z"},[])]);
        }
    });
})();

export default IMaterialGolfCourse;
</script>