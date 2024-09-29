<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixContactsBook2 = /* @__PURE__ */ ((_) => {
    return r('contacts-book-2', {
        name: 'i-remix-contacts-book-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-2H6a1 1 0 0 0 0 2zM5 16.17c.313-.11.65-.17 1-.17h13V4H6a1 1 0 0 0-1 1zM12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-3 4a3 3 0 0 1 6 0z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-2H6a1 1 0 0 0 0 2zm-7-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-3 4h6a3 3 0 0 0-6 0"},[])]);
        }
    });
})();

export default IRemixContactsBook2;
</script>