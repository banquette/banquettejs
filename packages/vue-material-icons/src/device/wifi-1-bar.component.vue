<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('wifi-1-bar', {
        name: 'i-material-wifi-1-bar',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '10 16 4 4' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"18",r:"2"},[])]);
return h('svg',{"viewBox":c ? '8.47 16 7.06 5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.53 17.46 12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46z"},[])]);
        }
    });
})();
</script>