<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPowerSettingsNew = /* @__PURE__ */ ((_) => {
    return r('power-settings-new', {
        name: 'i-material-power-settings-new',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 17.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1m5.14 2.86a.99.99 0 0 0-.01 1.39c1.13 1.2 1.83 2.8 1.87 4.57.09 3.83-3.08 7.13-6.91 7.17A6.98 6.98 0 0 1 5 12c0-1.84.71-3.51 1.87-4.76.37-.39.37-1-.01-1.38a.993.993 0 0 0-1.43.02A8.92 8.92 0 0 0 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25 5.1.16 9.29-3.93 9.29-9 0-2.37-.92-4.51-2.42-6.11-.38-.41-1.04-.42-1.44-.02"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 3h-2v10h2zm4.83 2.17-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7A6.995 6.995 0 0 1 7.58 6.58L6.17 5.17A8.93 8.93 0 0 0 3 12a9 9 0 0 0 18 0c0-2.74-1.23-5.18-3.17-6.83"},[])]);
        }
    });
})();

export default IMaterialPowerSettingsNew;
</script>