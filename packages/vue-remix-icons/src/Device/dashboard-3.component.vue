<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDashboard3 = /* @__PURE__ */ ((_) => {
    return r('dashboard-3', {
        name: 'i-remix-dashboard-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m3.833 3.337a.595.595 0 0 1 .763.067.59.59 0 0 1 .063.76q-3.27 4.569-3.598 4.897a1.5 1.5 0 0 1-2.122 0 1.5 1.5 0 0 1 0-2.122q.56-.56 4.894-3.602M17.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m2.318-3.596a1 1 0 1 1-1.416 1.414 1 1 0 0 1 1.416-1.414M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m4.596 5.404a.595.595 0 0 0-.763-.067q-4.334 3.043-4.894 3.602a1.5 1.5 0 0 0 0 2.122 1.5 1.5 0 0 0 2.122 0q.328-.329 3.598-4.897a.59.59 0 0 0-.063-.76M17.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2.318-3.596A1 1 0 1 0 7.404 8.82a1 1 0 0 0 1.414-1.416M12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"},[])]);
        }
    });
})();

export default IRemixDashboard3;
</script>