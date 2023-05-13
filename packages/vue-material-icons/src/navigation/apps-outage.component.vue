<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('apps-outage', {
        name: 'i-material-apps-outage',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 0 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm.07-10H12c-1.1 0-2 .9-2 2s.9 2 2 2c.22 0 .43-.04.63-.1A6.9 6.9 0 0 1 12 5c0-.34.02-.67.07-1zM19 12a6.9 6.9 0 0 1-2.9-.63c-.06.2-.1.41-.1.63 0 1.1.9 2 2 2s2-.9 2-2v-.07c-.33.05-.66.07-1 .07zm-1 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1-20c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 7.5c0 .28-.22.5-.5.5-.27 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5zM19 6c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5z"},[])]);
return h('svg',{"viewBox":c ? '4 0 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6 6h4v-4h-4v4zm3-20c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V7h1v1zm0-2h-1V2h1v4zM16 14h4v-2.07c-.33.05-.66.07-1 .07-1.07 0-2.09-.24-3-.68V14zM10 4v4h2.68c-.44-.91-.68-1.93-.68-3 0-.34.02-.67.07-1H10z"},[])]);
        }
    });
})();
</script>