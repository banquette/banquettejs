<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixContactsBookUpload = /* @__PURE__ */ ((_) => {
    return r('contacts-book-upload', {
        name: 'i-remix-contacts-book-upload',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.005 2C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zM7 4H5v16h2zm12 0H9v16h10zm-5 4 4 4h-3v4h-2v-4h-3zm10 4v4h-2v-4zm0-6v4h-2V6z"},[])]);
return h('svg',{"viewBox":c ? '3 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 2v20H3V2zm12.005 0C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9V2zM15 8l-4 4h3v4h2v-4h3zm9 4v4h-2v-4zm0-6v4h-2V6z"},[])]);
        }
    });
})();

export default IRemixContactsBookUpload;
</script>