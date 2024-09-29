<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPhonelink = /* @__PURE__ */ ((_) => {
    return r('phonelink', {
        name: 'i-material-phonelink',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 4 24 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 10h4v7h-4z","opacity":"0.3"},[]),h('path',{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 4 24 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6h18V4H2v13H0v3h14v-3H4zm20 2h-8v12h8zm-2 9h-4v-7h4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 4 24 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20h11c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H4zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"},[])]);
return h('svg',{"viewBox":c ? '0 4 24 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"},[])]);
        }
    });
})();

export default IMaterialPhonelink;
</script>