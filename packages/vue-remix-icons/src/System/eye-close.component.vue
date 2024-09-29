<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEyeClose = /* @__PURE__ */ ((_) => {
    return r('eye-close', {
        name: 'i-remix-eye-close',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.18 6.61 21.65 12.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9.342 18.782-1.931-.518.787-2.939a11 11 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.96 10.96 0 0 1-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.96 10.96 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a11 11 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.1 11.1 0 0 1-3.74 0z"},[])]);
return h('svg',{"viewBox":c ? '1.18 6.8 21.65 11.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.13 15.842-.788 2.94-1.931-.518.787-2.939a11 11 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.96 10.96 0 0 1-2.371-5.07l.9-.165A16.92 16.92 0 0 0 12 10c3.704 0 7.131-1.185 9.924-3.196l.9.164a10.96 10.96 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a11 11 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.1 11.1 0 0 1-3.74 0"},[])]);
        }
    });
})();

export default IRemixEyeClose;
</script>