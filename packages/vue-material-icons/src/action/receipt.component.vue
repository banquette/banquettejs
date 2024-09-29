<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialReceipt = /* @__PURE__ */ ((_) => {
    return r('receipt', {
        name: 'i-material-receipt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 19.09h14V4.91H5zM6 7h12v2H6zm0 4h12v2H6zm0 4h12v2H6z","opacity":"0.3"},[]),h('path',{d:"M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2zM19 19.09H5V4.91h14zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 2.2 18 19.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2.21a.47.47 0 0 0-.35.15l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.8-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8A.5.5 0 0 0 3 2.21V21.8c.13 0 .26-.05.35-.15l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.1.1.23.15.35.15V2.21zM17 17H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2zM19 19.09H5V4.91h14zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 17H6v-2h12zm0-4H6v-2h12zm0-4H6V7h12zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2z"},[])]);
        }
    });
})();

export default IMaterialReceipt;
</script>