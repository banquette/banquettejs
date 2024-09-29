<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAssistantPhoto = /* @__PURE__ */ ((_) => {
    return r('assistant-photo', {
        name: 'i-material-assistant-photo',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z","opacity":"0.3"},[]),h('path',{d:"M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.4 6-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12.36 6 .08.39.32 1.61H18v6h-3.36l-.08-.39-.32-1.61H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"},[])]);
return h('svg',{"viewBox":c ? '5 4 15 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"},[])]);
        }
    });
})();

export default IMaterialAssistantPhoto;
</script>