<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterial14mp = /* @__PURE__ */ ((_) => {
    return r('14mp', {
        name: 'i-material-14mp',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-8h1.5v3H15v-3h1.5v3h1V10h-1v1.5H15V10h-3zm-5 0h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z","opacity":"0.3"},[]),h('path',{d:"M15 14h1.5v1.5H15z","opacity":"0.3"},[]),h('path',{d:"M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm3 3H15V14h1.5z"},[]),h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"},[]),h('path',{d:"M8.5 11.5H10v-6H7V7h1.5zm6.5 0h1.5V10h1V8.5h-1v-3H15v3h-1.5v-3H12V10h3z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 14h1.5v1.5H15z"},[]),h('path',{d:"M3 3v18h18V3zm9 2.5h1.5v3H15v-3h1.5v3h1V10h-1v1.5H15V10h-3zm-5 0h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.75 5.5H9c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h-.75C7.34 7 7 6.66 7 6.25s.34-.75.75-.75m4.75 12.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1zM12 9V6.25c0-.41.34-.75.75-.75s.75.34.75.75V8.5H15V6.25c0-.41.34-.75.75-.75s.75.34.75.75V8.5h.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.25v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10h-2c-.55 0-1-.45-1-1m6 7c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1z"},[]),h('path',{d:"M15 14h1.5v1.5H15z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1zm3 3H15V14h1.5z"},[]),h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"},[]),h('path',{d:"M8.5 11.5H10v-6H7V7h1.5zm6.5 0h1.5V10h1V8.5h-1v-3H15v3h-1.5v-3H12V10h3z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zM10 5.5v6H8.5V7H7V5.5zm7.5 4.5h-1v1.5H15V10h-3V5.5h1.5v3H15v-3h1.5v3h1zm-2 4H17v1.5h-1.5z"},[])]);
        }
    });
})();

export default IMaterial14mp;
</script>