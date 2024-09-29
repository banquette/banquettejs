<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialWebAssetOff = /* @__PURE__ */ ((_) => {
    return r('web-asset-off', {
        name: 'i-material-web-asset-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0.69 2.1 21.31 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 17.17V8h-9.17zM5.17 8H4v10h11.17z","opacity":"0.3"},[]),h('path',{d:"M6.83 4H20a2 2 0 0 1 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17zm13.66 19.31L17.17 20H4a2 2 0 0 1-2-2V6c0-.34.08-.66.23-.94L.69 3.51 2.1 2.1l19.8 19.8zM15.17 18l-10-10H4v10z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0.69 2.1 21.31 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.83 4H22v15.17l-2-2V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51 2.1 2.1l19.8 19.8zM15.17 18l-10-10H4v10z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.1 2.52 20.9 20.38' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.83 4H20a2 2 0 0 1 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17zm12.95 18.61L17.17 20H4a2 2 0 0 1-2-2V6c0-.34.08-.66.23-.94l-.84-.84A.996.996 0 1 1 2.8 2.81l18.38 18.38c.39.39.39 1.02 0 1.41-.38.4-1.01.4-1.4.01M15.17 18l-10-10H4v10z"},[])]);
return h('svg',{"viewBox":c ? '0.69 2.1 21.31 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.83 4H20a2 2 0 0 1 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17zm13.66 19.31L17.17 20H4a2 2 0 0 1-2-2V6c0-.34.08-.66.23-.94L.69 3.51 2.1 2.1l19.8 19.8zM15.17 18l-10-10H4v10z"},[])]);
        }
    });
})();

export default IMaterialWebAssetOff;
</script>