<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFormatColorText = /* @__PURE__ */ ((_) => {
    return r('format-color-text', {
        name: 'i-material-format-color-text',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 20H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2M7.11 17c.48 0 .91-.3 1.06-.75l1.01-2.83h5.65l.99 2.82c.16.46.59.76 1.07.76.79 0 1.33-.79 1.05-1.52L13.69 4.17C13.43 3.47 12.75 3 12 3s-1.43.47-1.69 1.17L6.06 15.48c-.28.73.27 1.52 1.05 1.52m4.83-11.4h.12l2.03 5.79H9.91z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 20h20v4H2zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5zm4.42-5.61 2.03-5.79h.12l2.03 5.79z"},[])]);
        }
    });
})();

export default IMaterialFormatColorText;
</script>