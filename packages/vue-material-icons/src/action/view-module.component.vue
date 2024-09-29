<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialViewModule = /* @__PURE__ */ ((_) => {
    return r('view-module', {
        name: 'i-material-view-module',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 11h-3.33V7H19zm-5.33 0h-3.33V7h3.33zM8.33 7v4H5V7zM5 17v-4h3.33v4zm5.33 0v-4h3.33v4zm5.34 0v-4H19v4z","opacity":"0.3"},[]),h('path',{d:"M3 5v14h18V5zm16 6h-3.33V7H19zm-5.33 0h-3.33V7h3.33zM8.33 7v4H5V7zM5 17v-4h3.33v4zm5.33 0v-4h3.33v4zm5.34 0v-4H19v4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.67 6v4.5c0 .55-.45 1-1 1h-3.33c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h3.33c.55 0 1 .45 1 1m2 5.5H20c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1v4.5c0 .55.44 1 1 1m-2 6.5v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1m1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1m-8.34-1H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1v-4.5c0-.55-.44-1-1-1m1-2V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4.5c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5v14h18V5zm16 6h-3.33V7H19zm-5.33 0h-3.33V7h3.33zM8.33 7v4H5V7zM5 17v-4h3.33v4zm5.33 0v-4h3.33v4zm5.34 0v-4H19v4z"},[])]);
return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"},[])]);
        }
    });
})();

export default IMaterialViewModule;
</script>