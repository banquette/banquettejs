<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPieChart2 = /* @__PURE__ */ ((_) => {
    return r('pie-chart-2', {
        name: 'i-remix-pie-chart-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 0.5 21.5 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 .543Q11.495.5 12 .5C18.351.5 23.5 5.649 23.5 12q0 .505-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95V.542zM11 13V4.062A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7zm10.448-2A9.5 9.5 0 0 0 13 2.552V11z"},[])]);
return h('svg',{"viewBox":c ? '2 0.54 21.46 21.46' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95m2-1.507C18.553 1.02 22.979 5.447 23.457 11H13z"},[])]);
        }
    });
})();

export default IRemixPieChart2;
</script>