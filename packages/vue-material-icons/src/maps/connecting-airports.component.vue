<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialConnectingAirports = /* @__PURE__ */ ((_) => {
    return r('connecting-airports', {
        name: 'i-material-connecting-airports',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4.19 2.6 15.62 18.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.93 10.6c.39 0 .66.37.55.74L15.4 15h2.85l.59-.78c.1-.14.26-.22.43-.22.36 0 .62.35.52.7L19.4 16l.39 1.3c.1.35-.16.7-.52.7-.17 0-.33-.08-.43-.22l-.59-.78H15.4l1.08 3.66c.11.37-.17.74-.55.74-.2 0-.39-.11-.5-.28L13 17h-2.97c-.53 0-1-.4-1.03-.93-.04-.59.43-1.07 1-1.07h3l2.43-4.12c.11-.17.3-.28.5-.28m-7.86-8c-.39 0-.66.37-.55.74L8.6 7H5.75l-.59-.78A.53.53 0 0 0 4.73 6c-.36 0-.62.35-.52.7L4.6 8l-.39 1.3c-.1.35.16.7.52.7.17 0 .33-.08.43-.22L5.75 9H8.6l-1.08 3.66c-.11.37.17.74.55.74.2 0 .39-.11.5-.28L11 9h2.97c.53 0 1-.4 1.03-.93.04-.59-.43-1.07-1-1.07h-3L8.57 2.88a.6.6 0 0 0-.5-.28"},[])]);
return h('svg',{"viewBox":c ? '4 2.6 16 18.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z"},[])]);
        }
    });
})();

export default IMaterialConnectingAirports;
</script>