<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('private-connectivity', {
        name: 'i-material-private-connectivity',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 7.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1v3zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zM13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1z","opacity":"0.3"},[]),h('path',{d:"M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm-6.93 6c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07zM14 10.5v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 10 9.5v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-2 3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm1-3.25h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.93 11c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07zM15 10.5v5H9v-5h1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89h1zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zM13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12c0-.55-.45-1-1-1h-2.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H3c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H21c.55 0 1-.45 1-1zm-7 2.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1v3zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zM13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm-6.93 6c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07zM14 10.5v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 10 9.5v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-2 3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm1-3.25h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"},[])]);
return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.93 11c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07zM15 14.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1v3zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zM13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"},[])]);
        }
    });
})();
</script>