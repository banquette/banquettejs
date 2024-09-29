<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRocket2 = /* @__PURE__ */ ((_) => {
    return r('rocket-2', {
        name: 'i-remix-rocket-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 1.46 16 22.05' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.502 20A6.52 6.52 0 0 1 12 23.502 6.52 6.52 0 0 1 8.498 20h2.26c.326.489.747.912 1.242 1.243.495-.33.916-.754 1.243-1.243zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9zM17.27 17 16 15.56V9c0-2.318-1.57-4.43-4-5.42C9.57 4.57 8 6.681 8 9v6.56L6.73 17zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
return h('svg',{"viewBox":c ? '4 1.46 16 22.05' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.498 20h7.004A6.52 6.52 0 0 1 12 23.502 6.52 6.52 0 0 1 8.498 20M18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixRocket2;
</script>