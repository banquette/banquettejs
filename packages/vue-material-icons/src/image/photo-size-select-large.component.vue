<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPhotoSizeSelectLarge = /* @__PURE__ */ ((_) => {
    return r('photo-size-select-large', {
        name: 'i-material-photo-size-select-large',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 19h2v2h-2zM1 19c0 1.1.9 2 2 2h12V11H1zm4.5-3.21 1.79 2.15 2.5-3.22L13 19H3zM17 3h2v2h-2zm4 8h2v2h-2zm0 4h2v2h-2zM3 3C2 3 1 4 1 5h2zm18 4h2v2h-2zm-8-4h2v2h-2zm8 18c1 0 2-1 2-2h-2zM1 7h2v2H1zm8-4h2v2H9zM5 3h2v2H5zm16 0v2h2c0-1-1-2-2-2"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 15h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-8-8h2v2h-2zm8 4h2v2h-2zM1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3H1v2h2zm20 0h-2v2h2zM9 3h2v2H9zM5 3h2v2H5zm-4 8v10h14V11zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 15h2v2h-2zm0-4h2v2h-2zm2 8h-2v2c1 0 2-1 2-2M13 3h2v2h-2zm8 4h2v2h-2zm0-4v2h2c0-1-1-2-2-2M1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3C2 3 1 4 1 5h2zm6 0h2v2H9zM5 3h2v2H5zm-4 8v8c0 1.1.9 2 2 2h12v-8c0-1.1-.9-2-2-2zm2.63 7.19 1.49-1.91a.5.5 0 0 1 .78-.01l1.39 1.67 2.1-2.7c.2-.26.6-.26.79.01l2.22 2.96a.5.5 0 0 1-.4.8H4.02c-.41-.01-.65-.49-.39-.82"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 15h2v2h-2zm0-4h2v2h-2zm2 8h-2v2c1 0 2-1 2-2M13 3h2v2h-2zm8 4h2v2h-2zm0-4v2h2c0-1-1-2-2-2M1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3C2 3 1 4 1 5h2zm6 0h2v2H9zM5 3h2v2H5zm-4 8v8c0 1.1.9 2 2 2h12V11zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19z"},[])]);
        }
    });
})();

export default IMaterialPhotoSizeSelectLarge;
</script>