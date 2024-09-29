<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHonour = /* @__PURE__ */ ((_) => {
    return r('honour', {
        name: 'i-remix-honour',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 21.03' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03l-8.702-3.85A.5.5 0 0 1 3 18.72V4H1V2h22v2zM5 4v13.745l7 3.1 7-3.1V4zm3 4h8v2H8zm0 4h8v2H8z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 21.03' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03l-8.702-3.85A.5.5 0 0 1 3 18.72V4H1V2h22v2zM8 12v2h8v-2zm0-4v2h8V8z"},[])]);
        }
    });
})();

export default IRemixHonour;
</script>