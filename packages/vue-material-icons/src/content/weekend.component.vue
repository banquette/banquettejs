<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialWeekend = /* @__PURE__ */ ((_) => {
    return r('weekend', {
        name: 'i-material-weekend',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 4 24 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 11c-.55 0-1 .45-1 1v4H4v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1M6 14h12v-2c0-.88.39-1.67 1-2.22V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22z","opacity":"0.3"},[]),h('path',{d:"M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3M5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 4 24 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3M5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1z"},[])]);
return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 10c-1.1 0-2 .9-2 2v3H5v-3a2 2 0 1 0-4 0v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.52 2 2.81V14h12v-2.03c0-1.3.84-2.4 2-2.81V7c0-1.1-.9-2-2-2"},[])]);
        }
    });
})();

export default IMaterialWeekend;
</script>