<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('flag', {
        name: 'i-material-flag',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.36 6H7v6h7.24l.4 2H18V8h-5.24z","opacity":"0.3"},[]),h('path',{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.4 6-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-4.6z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12.36 6 .4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z"},[])]);
return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"},[])]);
        }
    });
})();
</script>