<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFlightClass = /* @__PURE__ */ ((_) => {
    return r('flight-class', {
        name: 'i-material-flight-class',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 4 13 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 6h2v5h-2z","opacity":"0.3"},[]),h('path',{d:"M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 7h-2V6h2zm-6.5 5H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4zM8 19h10v2H8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 4 13 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4h-6v9h6zM9.5 16H18v2H8L5 8V4h2v4zM8 19h10v2H8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 13 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M6 4c.55 0 1 .45 1 1v3l2.5 8H17c.55 0 1 .45 1 1s-.45 1-1 1H9.49c-.88 0-1.66-.58-1.92-1.43L5.08 8.28A2.2 2.2 0 0 1 5 7.71V5c0-.55.45-1 1-1m12 16c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 4 13 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 7h-2V6h2zm-6.5 5H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4zM8 19h10v2H8z"},[])]);
return h('svg',{"viewBox":c ? '5 4 13 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.5 16H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4zM8 19h10v2H8z"},[])]);
        }
    });
})();

export default IMaterialFlightClass;
</script>