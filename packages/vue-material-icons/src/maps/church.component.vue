<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('church', {
        name: 'i-material-church',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 10.04 12 8l-4 2.04v3.35L4 15.2V20h5v-2.04c0-1.69 1.35-3.06 3-3.06s3 1.37 3 3.06V20h5v-4.79l-4-1.81v-3.36zm-4 3.46c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z","opacity":"0.3"},[]),h('path',{d:"M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h9v-4c0-.55.45-1 1-1s1 .45 1 1v4h9v-8l-4-1.78zM20 20h-5v-2.04c0-1.69-1.35-3.06-3-3.06s-3 1.37-3 3.06V20H4v-4.79l4-1.81v-3.35L12 8l4 2.04v3.35l4 1.81V20z"},[]),h('circle',{"cx":"12","cy":"12",r:"1.5"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h8v-5h4v5h8v-8l-4-1.78zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 12.22v-1.99a2 2 0 0 0-1.11-1.79L13 6.5V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1.5L7.11 8.45A2 2 0 0 0 6 10.24v1.99l-2.81 1.25C2.47 13.79 2 14.51 2 15.3V20c0 1.1.9 2 2 2h6v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 19v3h6c1.1 0 2-.9 2-2v-4.7c0-.79-.47-1.51-1.19-1.83L18 12.22zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h9v-4c0-.55.45-1 1-1s1 .45 1 1v4h9v-8l-4-1.78zM20 20h-5v-2.04c0-1.69-1.35-3.06-3-3.06s-3 1.37-3 3.06V20H4v-4.79l4-1.81v-3.35L12 8l4 2.04v3.35l4 1.81V20z"},[]),h('circle',{"cx":"12","cy":"12",r:"1.5"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h8v-3c0-1.1.9-2 2-2s2 .9 2 2v3h8v-8l-4-1.78zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"},[])]);
        }
    });
})();
</script>