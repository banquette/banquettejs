<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('home', {
        name: 'i-material-home',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"},[]),h('path',{d:"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z","opacity":"0.3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.8 3.34 18.4 16.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},[])]);
        }
    });
})();
</script>