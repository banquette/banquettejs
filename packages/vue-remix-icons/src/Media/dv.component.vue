<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDv = /* @__PURE__ */ ((_) => {
    return r('dv', {
        name: 'i-remix-dv',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.63 1.76 21.37 20.24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.608 3H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7v-2h6V5h-6.255A6.97 6.97 0 0 1 15 9a6.99 6.99 0 0 1-3 5.745V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6.255A7 7 0 1 1 11.608 3M6 13.584V20h4v-6.416a5.001 5.001 0 1 0-4 0M8 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-3h2v2h-2zM7 17h2v2H7z"},[])]);
return h('svg',{"viewBox":c ? '1 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 14.745a7 7 0 1 1 8 0V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM8 14A5 5 0 1 0 8 4a5 5 0 0 0 0 10m-1 4v2h2v-2zm1-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m6 5v-1.292A8.98 8.98 0 0 0 17 9a8.97 8.97 0 0 0-2.292-6H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm4-10v2h2V7z"},[])]);
        }
    });
})();

export default IRemixDv;
</script>