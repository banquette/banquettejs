<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChrome = /* @__PURE__ */ ((_) => {
    return r('chrome', {
        name: 'i-remix-chrome',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.365 19.833 1.93-3.342a4.5 4.5 0 0 1-4.234-2.315L4.794 8.52a8.003 8.003 0 0 0 5.57 11.313zm2.225.146A8 8 0 0 0 19.602 9.5h-3.86A4.5 4.5 0 0 1 16.5 12a4.5 4.5 0 0 1-.642 2.318zm1.553-6.691.022-.038a2.5 2.5 0 1 0-4.354-.042l.024.042a2.5 2.5 0 0 0 4.308.038m-8.108-6.62 1.929 3.34A4.5 4.5 0 0 1 12 7.5h6.615A7.99 7.99 0 0 0 12 4a7.98 7.98 0 0 0-5.965 2.669zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.827 21.763C5.35 20.771 2 16.777 2 12c0-1.822.487-3.53 1.339-5.002l4.283 7.419a5 5 0 0 0 4.976 2.548zM12 22l4.287-7.425A5 5 0 0 0 17 12a4.98 4.98 0 0 0-1-3h5.542A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10m2.572-8.455a3 3 0 0 1-5.17-.045l-.029-.05a3 3 0 1 1 5.225.05zm-9.94-8.306A9.97 9.97 0 0 1 12 2a10 10 0 0 1 8.662 5H12a5 5 0 0 0-4.599 3.035z"},[])]);
        }
    });
})();

export default IRemixChrome;
</script>