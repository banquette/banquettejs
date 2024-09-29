<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSpeakerNotesOff = /* @__PURE__ */ ((_) => {
    return r('speaker-notes-off', {
        name: 'i-material-speaker-notes-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 1.59 22.14 22.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 11V9L4 7v10.17L5.17 16H13l-5-5zm2 3H6v-2h2zM20 4H6.66L10 7.34V6h8v2h-7.34l1 1H18v2h-4.34l5 5H20z","opacity":"0.3"},[]),h('path',{d:"M20 4v12h-1.34l1.91 1.91A2.01 2.01 0 0 0 22 16V4c0-1.1-.9-2-2-2H4.66l2 2zM6 12h2v2H6zm12-1V9h-6.34l2 2zm0-3V6h-8v1.34l.66.66zM1.41 1.59 0 3l2 2.01V22l4-4h9l5.73 5.73 1.41-1.41zM5.17 16 4 17.17V7l2 2v2h2l5 5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 1.73 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46zM8 14H6v-2h2zm-2-3V9l2 2zm16-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99H22z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.38 2 21.62 21.35' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.91 2.36c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l1.38 1.38L2 22l4-4h9l5.09 5.09c.35.35.92.35 1.27 0s.35-.92 0-1.27zM7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m13-9H4.08l7 7H17c.55 0 1 .45 1 1s-.45 1-1 1h-3.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2m-3 6h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 1.59 22.14 22.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4v12h-1.34l1.91 1.91A2.01 2.01 0 0 0 22 16V4c0-1.1-.9-2-2-2H4.66l2 2zM6 12h2v2H6zm12-3h-6.34l2 2H18zm0-3h-8v1.34l.66.66H18zM1.41 1.59 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73 1.41-1.41zM5.17 16 4 17.17V7l2 2v2h2l5 5z"},[])]);
return h('svg',{"viewBox":c ? '0 1.73 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.54 11-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18zM8 14H6v-2h2zm-2-3V9l2 2zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2"},[])]);
        }
    });
})();

export default IMaterialSpeakerNotesOff;
</script>