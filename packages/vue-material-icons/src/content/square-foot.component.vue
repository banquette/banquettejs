<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('square-foot', {
        name: 'i-material-square-foot',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 17h5.76L7 11.24z","opacity":"0.3"},[]),h('path',{d:"m17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14l-2.34-2.34zM7 17v-5.76L12.76 17H7z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v16h16l-2.34-2.34zM7 17v-5.76L12.76 17H7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 4.71 15.29 15.29' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.66 17.66-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71L9.7 9.7l-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.49-1.49a.5.5 0 0 0-.85.36V18c0 1.1.9 2 2 2h12.79c.45 0 .67-.54.35-.85l-1.48-1.49zM7 16v-4.76L12.76 17H8c-.55 0-1-.45-1-1z"},[])]);
return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14l-2.34-2.34zM7 17v-5.76L12.76 17H7z"},[])]);
        }
    });
})();
</script>