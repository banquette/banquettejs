<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTypeSpecimen = /* @__PURE__ */ ((_) => {
    return r('type-specimen', {
        name: 'i-material-type-specimen',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.04 7.17h-.08l-1.31 3.72h2.69z","opacity":"0.3"},[]),h('path',{d:"M8 16h12V4H8zm5.2-10.5h1.61l3.38 9h-1.56l-.8-2.3H12.2l-.82 2.3H9.81z","opacity":"0.3"},[]),h('path',{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z"},[]),h('path',{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12z"},[]),h('path',{d:"M12.19 12.2h3.63l.8 2.3h1.56l-3.38-9h-1.6l-3.38 9h1.56zm1.77-5.03h.08l1.31 3.72h-2.69z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6H2v16h16v-2H4z"},[]),h('path',{d:"M22 2H6v16h16zm-5.37 12.5-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9z"},[]),h('path',{d:"m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H4V7c0-.55-.45-1-1-1"},[]),h('path',{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.54 12.01-.63-1.82H12.2l-.65 1.82a.725.725 0 1 1-1.36-.5l2.73-7.27c.16-.44.6-.74 1.08-.74s.92.3 1.09.75l2.73 7.27c.18.47-.17.98-.68.98-.31 0-.58-.19-.68-.49"},[]),h('path',{d:"m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z"},[]),h('path',{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12z"},[]),h('path',{d:"M12.19 12.2h3.63l.8 2.3h1.56l-3.38-9h-1.6l-3.38 9h1.56zm1.77-5.03h.08l1.31 3.72h-2.69z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z"},[]),h('path',{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.37 12.5-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9z"},[]),h('path',{d:"m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z"},[])]);
        }
    });
})();

export default IMaterialTypeSpecimen;
</script>