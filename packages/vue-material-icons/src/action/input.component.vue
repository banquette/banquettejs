<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('input', {
        name: 'i-material-input',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3zM23 3.01H1V9h2V4.99h18v14.03H3V15H1v5.99h22V3.01zM11 16l4-4-4-4v3H1v2h10v3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M21 3.01H3c-1.1 0-2 .9-2 2V8c0 .55.45 1 1 1s1-.45 1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V16c0-.55-.45-1-1-1s-1 .45-1 1v3.01c0 1.09.89 1.98 1.98 1.98H21c1.1 0 2-.9 2-2V5.01c0-1.1-.9-2-2-2zm-9.15 12.14 2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.495.495 0 0 0-.85.35V11H2c-.55 0-1 .45-1 1s.45 1 1 1h9v1.79c0 .45.54.67.85.36z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('g',{"fill":"none"},[h('path',{d:"M0 0h24v24H0V0z"},[]),h('path',{d:"M0 0h24v24H0V0z","opacity":"0.87"},[])]),h('path',{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3zM21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3z"},[])]);
return h('svg',{"viewBox":c ? '1 3.01 22 17.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3z"},[])]);
        }
    });
})();
</script>