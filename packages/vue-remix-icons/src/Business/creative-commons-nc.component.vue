<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('creative-commons-nc', {
        name: 'i-remix-creative-commons-nc',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l.034.036-1.414 1.414-.036-.034A9.959 9.959 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zM4 12a8 8 0 0 0 12.905 6.32l-2.375-2.376A2.51 2.51 0 0 1 14 16h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 0 1-2.165-3.75L5.679 7.094A7.965 7.965 0 0 0 4 12zm8-8c-1.848 0-3.55.627-4.905 1.68L9.47 8.055A2.51 2.51 0 0 1 10 8h1V6h2v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 0 1 2.165 3.75l2.156 2.155A8 8 0 0 0 12 4z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4.256 5.672 3.58 3.577a2.5 2.5 0 0 0 2 3.746L10 13h4l.09.008a.5.5 0 0 1 0 .984L14 14H8.5v2H11v2h2v-2h1c.121 0 .24-.009.357-.025l.173-.031 3.798 3.8A9.959 9.959 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.4.846-4.604 2.256-6.328zM12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l-3.579-3.577a2.5 2.5 0 0 0-2-3.745L14 11h-4l-.09-.008a.5.5 0 0 1 0-.984L10 10h5.5V8H13V6h-2v2h-1c-.121 0-.24.009-.356.025l-.173.031-3.799-3.8A9.959 9.959 0 0 1 12 2z"},[])]);
        }
    });
})();
</script>