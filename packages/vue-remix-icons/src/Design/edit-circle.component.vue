<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEditCircle = /* @__PURE__ */ ((_) => {
    return r('edit-circle', {
        name: 'i-remix-edit-circle',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.684 4.029a8 8 0 1 0 7.287 7.287 8 8 0 0 0-.603-2.44l1.5-1.502A9.9 9.9 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a10 10 0 0 1 4.626 1.132l-1.501 1.5a8 8 0 0 0-2.44-.603zM20.485 2.1 21.9 3.515l-9.192 9.192-1.412.003-.002-1.417z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.626 3.132 9.29 10.466l.008 4.247 4.238-.007 7.331-7.332A9.96 9.96 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.96 9.96 0 0 1 4.626 1.132m3.86-1.031 1.413 1.414-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"},[])]);
        }
    });
})();

export default IRemixEditCircle;
</script>