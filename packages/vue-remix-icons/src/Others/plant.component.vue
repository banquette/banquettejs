<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPlant = /* @__PURE__ */ ((_) => {
    return r('plant', {
        name: 'i-remix-plant',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 2a7 7 0 0 1 6.197 3.741A6.49 6.49 0 0 1 17.5 3H21v2.5a6.5 6.5 0 0 1-6.5 6.5H13v1h5v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7h5v-2H9a7 7 0 0 1-7-7V2zm10 13H8v5h8zm3-10h-1.5A4.5 4.5 0 0 0 13 9.5v.5h1.5A4.5 4.5 0 0 0 19 5.5zM6 4H4a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5"},[])]);
return h('svg',{"viewBox":c ? '2 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zM5.5 2a7.49 7.49 0 0 1 6.124 3.169A7.95 7.95 0 0 0 10 10v1h-.5A7.5 7.5 0 0 1 2 3.5V2z"},[])]);
        }
    });
})();

export default IRemixPlant;
</script>