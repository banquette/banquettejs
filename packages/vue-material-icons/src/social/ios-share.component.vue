<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialIosShare = /* @__PURE__ */ ((_) => {
    return r('ios-share', {
        name: 'i-material-ios-share',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V10a2 2 0 0 0-2-2"},[]),h('path',{d:"M11 16h2V5h3l-4-4-4 4h3z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8h-5v2h3v11H6V10h3V8H4v15h16z"},[]),h('path',{d:"M11 16h2V5h3l-4-4-4 4h3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 1.21 16 21.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v11H6V10h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2"},[]),h('path',{d:"M12 16c.55 0 1-.45 1-1V5h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0L8.85 4.15a.5.5 0 0 0 .36.85H11v10c0 .55.45 1 1 1"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4zm4 5v11c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3a2 2 0 0 1 2 2"},[])]);
        }
    });
})();

export default IMaterialIosShare;
</script>