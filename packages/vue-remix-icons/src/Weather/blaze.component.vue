<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBlaze = /* @__PURE__ */ ((_) => {
    return r('blaze', {
        name: 'i-remix-blaze',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.5 1 16.5 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9q1 1.59 1 4c0 3-3.5 4-5 9q-1-.862-1-2.5c0-3.482 5-5.29 5-10.5m-4.5-4a8.3 8.3 0 0 1 1 4c0 5-6 6-4 13Q9 20.26 9 17c0-3.325 5.5-6 5.5-12M10 1q1 2 1 4.5c0 6-9 7.5-3 16.5-2.5-.5-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1"},[])]);
return h('svg',{"viewBox":c ? '3.5 1 16.5 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 9q1.5 1.59 1.5 4c0 3.466-3.7 4.276-5.5 9q-1-.862-1-2.5c0-3.482 5-5.29 5-10.5m-4-4q1.8 1.858 1.8 4c0 4.951-6.045 5.692-4.8 13Q9 20.26 9 17c0-3.325 5.5-6 5.5-12M10 1q2 2.5 2 4.5c0 6.25-8.5 8.222-4 16.5-2.616-.58-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1"},[])]);
        }
    });
})();

export default IRemixBlaze;
</script>