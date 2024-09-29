<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixVolumeUp = /* @__PURE__ */ ((_) => {
    return r('volume-up', {
        name: 'i-remix-volume-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3.55 22 16.89' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 7.22 6.603 10H3v4h3.603L10 16.78zM5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm13.517 4.134-1.416-1.416A8.98 8.98 0 0 0 21 12a8.98 8.98 0 0 0-3.304-6.968l1.42-1.42A10.98 10.98 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134m-3.543-3.543-1.422-1.422A4 4 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.99 5.99 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591"},[])]);
return h('svg',{"viewBox":c ? '1 3.55 22 16.89' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm13.517 4.134-1.416-1.416A8.98 8.98 0 0 0 21 12a8.98 8.98 0 0 0-3.304-6.968l1.42-1.42A10.98 10.98 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134m-3.543-3.543-1.422-1.422A4 4 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.99 5.99 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591"},[])]);
        }
    });
})();

export default IRemixVolumeUp;
</script>