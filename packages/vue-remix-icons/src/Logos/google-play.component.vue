<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixGooglePlay = /* @__PURE__ */ ((_) => {
    return r('google-play', {
        name: 'i-remix-google-play',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1.73 18 20.53' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.501 22.131A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 1-1m8.292 11.68-4.498 4.498 5.699-3.299zM5 6.118v11.76l5.88-5.88zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.579zm-7.49-4.336 4.5 4.5 1.199-1.2z"},[])]);
return h('svg',{"viewBox":c ? '3 1.81 18 20.37' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.609 1.814 13.792 12 3.61 22.186a1 1 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92m10.89 10.893 2.302 2.302-10.937 6.333zm3.199-3.198 2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12zM5.864 2.658 16.802 8.99l-2.303 2.303z"},[])]);
        }
    });
})();

export default IRemixGooglePlay;
</script>