<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCloudy = /* @__PURE__ */ ((_) => {
    return r('cloudy', {
        name: 'i-remix-cloudy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 4 22.02 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.5 6a6.5 6.5 0 0 0 0 13h7a4.5 4.5 0 1 0-.957-8.898A6.5 6.5 0 0 0 9.5 6m7 15h-7a8.5 8.5 0 1 1 7.215-12.997A6.5 6.5 0 0 1 16.5 21"},[])]);
return h('svg',{"viewBox":c ? '1 4 22.01 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 20.986a8.5 8.5 0 1 1 7.715-12.983A6.5 6.5 0 0 1 17 20.981V21H9z"},[])]);
        }
    });
})();

export default IRemixCloudy;
</script>