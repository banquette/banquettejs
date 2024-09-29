<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHouseSiding = /* @__PURE__ */ ((_) => {
    return r('house-siding', {
        name: 'i-material-house-siding',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.21 10h9.58l.21.19V12H7v-1.81zm7.36-2H9.43L12 5.69zM7 16v-2h10v2z","opacity":"0.3"},[]),h('path',{d:"M19 12h3L12 3 2 12h3v8h2v-2h10v2h2zM7.21 10h9.58l.21.19V12H7v-1.81zm7.36-2H9.43L12 5.69zM7 16v-2h10v2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.8 3.34 18.4 16.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1zM7.21 10h9.58l.21.19V12H7v-1.81zm7.36-2H9.43L12 5.69zM7 16v-2h10v2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 12h3L12 3 2 12h3v8h2v-2h10v2h2zM7.21 10h9.58l.21.19V12H7v-1.81zm7.36-2H9.43L12 5.69zM7 16v-2h10v2z"},[])]);
        }
    });
})();

export default IMaterialHouseSiding;
</script>