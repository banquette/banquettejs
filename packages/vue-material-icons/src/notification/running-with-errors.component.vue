<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialRunningWithErrors = /* @__PURE__ */ ((_) => {
    return r('running-with-errors', {
        name: 'i-material-running-with-errors',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-3-2.71A8 8 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.97 9.97 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 10v8h-2v-8zm-2 10v2h2v-2zm-2-2.71A8 8 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.97 9.97 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2z"},[])]);
        }
    });
})();

export default IMaterialRunningWithErrors;
</script>