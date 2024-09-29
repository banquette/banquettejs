<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEye = /* @__PURE__ */ ((_) => {
    return r('eye', {
        name: 'i-remix-eye',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.18 3 21.64 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},[])]);
return h('svg',{"viewBox":c ? '1.18 3 21.64 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.181 12C2.121 6.88 6.608 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.819-9M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
        }
    });
})();

export default IRemixEye;
</script>