<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRepeatOne = /* @__PURE__ */ ((_) => {
    return r('repeat-one', {
        name: 'i-remix-repeat-one',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.57 20 20.87' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-17.932a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zM11 8h2v8h-2v-6H9V9z"},[])]);
return h('svg',{"viewBox":c ? '2 1.57 20 20.87' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4zm-5 4h2v8h-2v-6H9V9z"},[])]);
        }
    });
})();

export default IRemixRepeatOne;
</script>