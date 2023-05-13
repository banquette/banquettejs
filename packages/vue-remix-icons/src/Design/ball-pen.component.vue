<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('ball-pen', {
        name: 'i-remix-ball-pen',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.32 18.68 18.68' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.849 11.808-.707-.707-9.9 9.9H3v-4.243L14.313 5.444l5.657 5.657a1 1 0 0 1 0 1.414l-7.07 7.071-1.415-1.414 6.364-6.364zm-2.121-2.121-1.415-1.414L5 17.586v1.415h1.414l9.314-9.314zm2.828-7.071 2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.273 15.728 4.03l1.414-1.414a1 1 0 0 1 1.414 0z"},[])]);
return h('svg',{"viewBox":c ? '3 2.32 18.68 18.68' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.849 11.808-.707-.707-9.9 9.9H3v-4.243L14.313 5.444l5.657 5.657a1 1 0 0 1 0 1.414l-7.07 7.071-1.415-1.414 6.364-6.364zm.707-9.192 2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.273 15.728 4.03l1.414-1.414a1 1 0 0 1 1.414 0z"},[])]);
        }
    });
})();
</script>