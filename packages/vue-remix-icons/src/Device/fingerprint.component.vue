<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFingerprint = /* @__PURE__ */ ((_) => {
    return r('fingerprint', {
        name: 'i-remix-fingerprint',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2.35 2 18.65 20.27' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42-1.747-.974c1.16-2.08 1.81-4.41 1.882-6.836L15 14v-1zm-6-3h2v4l-.005.379a12.94 12.94 0 0 1-2.691 7.549l-.231.29-1.55-1.264a10.94 10.94 0 0 0 2.471-6.588L11 14zm1-4a5 5 0 0 1 5 5h-2a3 3 0 0 0-6 0v3c0 2.235-.82 4.344-2.271 5.977l-.212.23-1.448-1.38a6.97 6.97 0 0 0 1.925-4.524L7 14v-3a5 5 0 0 1 5-5m0-4a9 9 0 0 1 9 9v3c0 1.698-.202 3.37-.597 4.99l-.139.539-1.93-.526c.392-1.437.613-2.922.658-4.435L19 14v-3A7 7 0 0 0 7.808 5.394L6.383 3.968A8.96 8.96 0 0 1 12 2M4.968 5.383l1.426 1.425a6.97 6.97 0 0 0-1.39 3.951L5 11l.004 2c0 1.12-.264 2.203-.762 3.177l-.156.29-1.737-.992a4.95 4.95 0 0 0 .646-2.183L3.004 13v-2a8.94 8.94 0 0 1 1.964-5.617"},[])]);
        }
    });
})();

export default IRemixFingerprint;
</script>