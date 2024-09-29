<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFlutter = /* @__PURE__ */ ((_) => {
    return r('flutter', {
        name: 'i-remix-flutter',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4.5 2 12.92 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.597 10.684h2.828l-5.657 5.658 5.657 5.656h-2.828L8.94 16.34zm-.194-8.68h2.829L5.918 13.318l-1.414-1.414z"},[])]);
return h('svg',{"viewBox":c ? '3.5 2 16.18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.503 2.001-10 10 3.083 3.083 13.08-13.083zm-.006 9.198L8.122 16.62 13.494 22h6.189l-5.387-5.4 5.389-5.4h-6.188z"},[])]);
        }
    });
})();

export default IRemixFlutter;
</script>