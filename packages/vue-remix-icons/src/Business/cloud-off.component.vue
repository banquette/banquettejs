<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCloudOff = /* @__PURE__ */ ((_) => {
    return r('cloud-off', {
        name: 'i-remix-cloud-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.515 2.1 19.092 19.092-1.415 1.415-2.014-2.015A6 6 0 0 1 17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 .353-2.563L2.1 3.514zM7 9q0 .122.006.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10q.28 0 .548-.037L7.03 8.445Q7 8.718 7 9m5-7a7 7 0 0 1 6.992 7.339 6.003 6.003 0 0 1 3.212 8.65l-1.493-1.493a3.999 3.999 0 0 0-5.207-5.206L14.01 9.795A6 6 0 0 1 17 9a5 5 0 0 0-7.876-4.09l-1.43-1.43A6.97 6.97 0 0 1 12 2"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.515 2.1 19.092 19.092-1.415 1.415-2.014-2.015A6 6 0 0 1 17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 .353-2.563L2.1 3.514zM17 9a6.003 6.003 0 0 1 5.204 8.989L14.01 9.796C14.89 9.29 15.91 9 17 9m-5-7a7 7 0 0 1 6.765 5.195 8.03 8.03 0 0 0-6.206 1.15L7.694 3.48A6.97 6.97 0 0 1 12 2"},[])]);
        }
    });
})();

export default IRemixCloudOff;
</script>