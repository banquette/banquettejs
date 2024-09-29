<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixScales3 = /* @__PURE__ */ ((_) => {
    return r('scales-3', {
        name: 'i-remix-scales-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.67 2 20.66 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A6 6 0 0 1 18 17a6 6 0 0 1-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.98 5.98 0 0 1 6 17a6 6 0 0 1-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2zm5 7.103-1.958 5.386A4 4 0 0 0 18 15c.7 0 1.37-.18 1.958-.51zm-12 0-1.958 5.386A4 4 0 0 0 6 15c.7 0 1.37-.18 1.958-.51z"},[])]);
return h('svg',{"viewBox":c ? '1.67 2 20.66 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A6 6 0 0 1 18 17a6 6 0 0 1-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.98 5.98 0 0 1 6 17a6 6 0 0 1-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2zm5 7.103L16.582 13h2.835zm-12 0L4.582 13h2.835z"},[])]);
        }
    });
})();

export default IRemixScales3;
</script>