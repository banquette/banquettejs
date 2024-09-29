<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterial21mp = /* @__PURE__ */ ((_) => {
    return r('21mp', {
        name: 'i-material-21mp',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 14h1.5v1.5H15z","opacity":"0.3"},[]),h('path',{d:"M5 19h14V5H5zm8-13.5h3v6h-1.5V7H13zm.5 7H17c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5h-1.5zM7.5 9c0-.55.45-1 1-1h2V7h-3V5.5H11c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H9v1h3v1.5H7.5zM6 13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z","opacity":"0.3"},[]),h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"},[]),h('path',{d:"M14.5 11.5H16v-6h-3V7h1.5zM12 10H9V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H7.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H12zm-4.5 4h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm7.5 3h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6H15zm0-3h1.5v1.5H15z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 14h1.5v1.5H15z"},[]),h('path',{d:"M3 3v18h18V3zm4.5 5h3V7h-3V5.5H12V9H9v1h3v1.5H7.5zm5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 14h1.5v1.5H15z"},[]),h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 9c0-.55.45-1 1-1h2V7H8.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H11c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1H9v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H8.5c-.55 0-1-.45-1-1zm5 8.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1zm.5-11.5c0-.41.34-.75.75-.75H15c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h-.75c-.41 0-.75-.34-.75-.75M18 16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"},[]),h('path',{d:"M14.5 11.5H16v-6h-3V7h1.5zM12 10H9V9h2c.55 0 1-.45 1-1V6.5c0-.55-.45-1-1-1H7.5V7h3v1h-2c-.55 0-1 .45-1 1v2.5H12zm-4.5 4h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm7.5 3h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6H15zm0-3h1.5v1.5H15z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zM11 9H9v1h3v1.5H7.5V9c0-.55.45-1 1-1h2V7h-3V5.5H11c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1m3-3.5h3v6h-1.5V7H14zm1.5 8.5H17v1.5h-1.5z"},[])]);
        }
    });
})();

export default IMaterial21mp;
</script>