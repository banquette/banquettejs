<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNoMeals = /* @__PURE__ */ ((_) => {
    return r('no-meals', {
        name: 'i-material-no-meals',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1.1 2 20.38 20.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 18.17-2-2V14h-1c-1.1 0-2-.9-2-2V6c0-1.49 1.6-3.32 3.76-3.85.63-.15 1.24.33 1.24.98zm.19 4.44a.996.996 0 0 1-1.41 0l-9.76-9.76c-.33.09-.66.15-1.02.15v8c0 .55-.45 1-1 1s-1-.45-1-1v-8c-2.21 0-4-1.79-4-4V5.83L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.38 18.38c.4.39.4 1.03.01 1.42M6.17 9 5 7.83V9zM13 9V3c0-.55-.45-1-1-1s-1 .45-1 1v5.17l1.85 1.85c.09-.33.15-.66.15-1.02M9 3c0-.55-.45-1-1-1s-1 .45-1 1v1.17l2 2z"},[])]);
return h('svg',{"viewBox":c ? '0.69 2 21.21 21.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8zM6.17 9 5 7.83V9zM9 2H7v2.17l2 2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02"},[])]);
        }
    });
})();

export default IMaterialNoMeals;
</script>