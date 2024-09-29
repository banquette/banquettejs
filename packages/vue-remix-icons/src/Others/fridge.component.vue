<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFridge = /* @__PURE__ */ ((_) => {
    return r('fridge', {
        name: 'i-remix-fridge',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-1 11H6v9h12zm-8 2v4H8v-4zm8-11H6v7h12zm-8 2v3H8V5z"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 12v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12zM9 14H7v5h2zM19 1a1 1 0 0 1 1 1v8H4V2a1 1 0 0 1 1-1zM9 4H7v4h2z"},[])]);
        }
    });
})();

export default IRemixFridge;
</script>