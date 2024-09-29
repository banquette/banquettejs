<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBug2 = /* @__PURE__ */ ((_) => {
    return r('bug-2', {
        name: 'i-remix-bug-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.46 18 19.54' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.562 4.148a7 7 0 0 1 2.876 0l1.683-1.684 1.415 1.415-1.05 1.05A7.03 7.03 0 0 1 18.326 8H21v2h-2.07q.07.49.07 1v1h2v2h-2v1q0 .51-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07A7 7 0 0 1 5 15v-1H3v-2h2v-1q0-.51.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684zM12 6a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5m-3 8h6v2H9zm0-4h6v2H9z"},[])]);
return h('svg',{"viewBox":c ? '3 2.46 18 19.54' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.07 16A7 7 0 0 1 5 15v-1H3v-2h2v-1q0-.51.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684a7 7 0 0 1 2.876 0l1.683-1.684 1.415 1.415-1.05 1.05A7.03 7.03 0 0 1 18.326 8H21v2h-2.07q.07.49.07 1v1h2v2h-2v1q0 .51-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2zM9 10v2h6v-2zm0 4v2h6v-2z"},[])]);
        }
    });
})();

export default IRemixBug2;
</script>