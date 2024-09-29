<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBluetoothSearching = /* @__PURE__ */ ((_) => {
    return r('bluetooth-searching', {
        name: 'i-material-bluetooth-searching',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.41 2.41 17.6 19.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.98 10.28-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23.11-.5.17-1 .17-1.52a6 6 0 0 0-.18-1.48.5.5 0 0 0-.84-.24m4.12-2.5a.863.863 0 0 0-1.4-.24c-.26.26-.31.64-.17.98.46 1.07.72 2.24.72 3.47 0 1.24-.26 2.42-.73 3.49a.84.84 0 0 0 .16.94.84.84 0 0 0 1.35-.23c.63-1.3.98-2.76.98-4.3a10 10 0 0 0-.91-4.11M11.41 12 15 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L5.11 5.7A.996.996 0 1 0 3.7 7.11L8.59 12 3.7 16.89a.996.996 0 1 0 1.41 1.41L9 14.41v6.18c0 .89 1.08 1.34 1.71.71L15 17c.39-.39.39-1.02 0-1.42zM11 5.83l1.88 1.88L11 9.59zm0 12.34v-3.76l1.88 1.88z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18.01 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.24 12.01 2.32 2.32c.28-.72.44-1.51.44-2.33s-.16-1.59-.43-2.31zm5.29-5.3-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2a9.94 9.94 0 0 0 1.54-5.31c-.01-1.89-.55-3.67-1.48-5.19m-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29zM11 5.83l1.88 1.88L11 9.59zm1.88 10.46L11 18.17v-3.76z"},[])]);
        }
    });
})();

export default IMaterialBluetoothSearching;
</script>