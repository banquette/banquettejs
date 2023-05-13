<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('no-meals-ouline', {
        name: 'i-material-no-meals-ouline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0.69 2 21.21 21.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14h-3zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM6.17 9 5 7.83V9h1.17zM9 2H7v2.17l2 2V2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02z"},[])]);
        }
    });
})();
</script>