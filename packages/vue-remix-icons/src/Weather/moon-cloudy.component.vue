<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMoonCloudy = /* @__PURE__ */ ((_) => {
    return r('moon-cloudy', {
        name: 'i-remix-moon-cloudy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.67 5.007a7 7 0 0 1 7.55-3.901 4.5 4.5 0 0 0 5.674 5.674q.105.595.106 1.22a7 7 0 0 1-.865 3.373A5.5 5.5 0 0 1 17.5 21H9a8 8 0 0 1-.33-15.993m2.177.207a8.02 8.02 0 0 1 5.61 4.885 5.53 5.53 0 0 1 2.96.245c.226-.425.393-.885.488-1.37a6.5 6.5 0 0 1-5.878-5.88 5 5 0 0 0-3.18 2.12M17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.67 5.007a7 7 0 0 1 7.55-3.901 4.5 4.5 0 0 0 5.674 5.674q.105.595.106 1.22a7 7 0 0 1-.865 3.373A5.5 5.5 0 0 1 17.5 21H9a8 8 0 0 1-.33-15.993m2.177.207a8.02 8.02 0 0 1 5.61 4.885 5.53 5.53 0 0 1 2.96.245c.226-.425.393-.885.488-1.37a6.5 6.5 0 0 1-5.878-5.88 5 5 0 0 0-3.18 2.12"},[])]);
        }
    });
})();

export default IRemixMoonCloudy;
</script>