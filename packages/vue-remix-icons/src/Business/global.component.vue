<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('global', {
        name: 'i-remix-global',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"},[])]);
return h('svg',{"viewBox":c ? '2.05 2.12 19.9 19.76' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.05 13zm0-2a10.005 10.005 0 0 1 8.402-8.88A17.9 17.9 0 0 0 7.527 11H2.05zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.88A10.005 10.005 0 0 1 21.95 11zm0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13h5.478zM9.53 13h4.94A15.908 15.908 0 0 1 12 20.592 15.908 15.908 0 0 1 9.53 13zm0-2A15.908 15.908 0 0 1 12 3.408 15.908 15.908 0 0 1 14.47 11H9.53z"},[])]);
        }
    });
})();
</script>