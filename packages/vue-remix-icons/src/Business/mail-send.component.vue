<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMailSend = /* @__PURE__ */ ((_) => {
    return r('mail-send', {
        name: 'i-remix-mail-send',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.434 5 12 11.81 19.566 5zM0 15h8v2H0zm0-5h5v2H0z"},[])]);
return h('svg',{"viewBox":c ? '0 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2zM0 10h5v2H0zm0 5h8v2H0z"},[])]);
        }
    });
})();

export default IRemixMailSend;
</script>