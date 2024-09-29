<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTimer = /* @__PURE__ */ ((_) => {
    return r('timer', {
        name: 'i-remix-timer',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.618 5.968 1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414M12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14M11 8h2v6h-2zM8 1h8v2H8z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.618 5.968 1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414M11 8v6h2V8zM8 1h8v2H8z"},[])]);
        }
    });
})();

export default IRemixTimer;
</script>