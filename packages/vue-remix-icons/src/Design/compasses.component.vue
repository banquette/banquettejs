<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCompasses = /* @__PURE__ */ ((_) => {
    return r('compasses', {
        name: 'i-remix-compasses',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.13 2 17.73 20.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728l6.063 10.502-1.732 1-6.063-10.501a4 4 0 0 1-2.142 0L4.866 22.356l-1.732-1 6.063-10.502A4.002 4.002 0 0 1 11 4.126M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
return h('svg',{"viewBox":c ? '3.13 2 17.73 20.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728l6.063 10.502-1.732 1-6.063-10.501a4 4 0 0 1-2.142 0L4.866 22.356l-1.732-1 6.063-10.502A4.002 4.002 0 0 1 11 4.126M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
        }
    });
})();

export default IRemixCompasses;
</script>