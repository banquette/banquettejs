<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCompass2 = /* @__PURE__ */ ((_) => {
    return r('compass-2', {
        name: 'i-remix-compass-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.625 3.133-1.5 1.5A8 8 0 0 0 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8a8 8 0 0 0-.633-3.125l1.5-1.5A9.95 9.95 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2a9.96 9.96 0 0 1 4.625 1.133m1.739 1.089 1.414 1.414L12 13.414 10.586 12z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.328 4.258 10.586 12 12 13.414l7.742-7.742A9.96 9.96 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c2.4 0 4.604.847 6.328 2.258"},[])]);
        }
    });
})();

export default IRemixCompass2;
</script>