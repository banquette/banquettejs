<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPieChartOutline = /* @__PURE__ */ ((_) => {
    return r('pie-chart-outline', {
        name: 'i-material-pie-chart-outline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-1 17.94c-3.93-.5-7-3.88-7-7.94s3.07-7.44 7-7.93zm2-.01V13h6.93A8 8 0 0 1 13 19.93M13 11V4.07c3.61.45 6.48 3.33 6.93 6.93z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H14c-.55 0-1-.45-1-1zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V14c0-.55.45-1 1-1h5.93A8 8 0 0 1 13 19.93"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H13zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V13h6.93A8 8 0 0 1 13 19.93"},[])]);
        }
    });
})();

export default IMaterialPieChartOutline;
</script>