<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('signal-wifi-2', {
        name: 'i-remix-signal-wifi-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 9c-1.42 0-2.764.33-3.959.915L12 17.817l3.958-4.902A8.96 8.96 0 0 0 12 12zm0-7c-3.028 0-5.923.842-8.42 2.392l3.178 3.935A10.953 10.953 0 0 1 12 10c1.898 0 3.683.48 5.241 1.327L20.42 7.39A15.928 15.928 0 0 0 12 5z"},[])]);
return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392l3.178 3.935A10.953 10.953 0 0 1 12 10c1.898 0 3.683.48 5.241 1.327L20.42 7.39A15.928 15.928 0 0 0 12 5z"},[])]);
        }
    });
})();
</script>