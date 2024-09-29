<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDirectionsRailwayFilled = /* @__PURE__ */ ((_) => {
    return r('directions-railway-filled', {
        name: 'i-material-directions-railway-filled',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 15.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V12H6zm6-2.5c.83 0 1.5.67 1.5 1.5S12.83 16 12 16s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m0-9c-3.52 0-4.97.48-5.57 1h11.24c-.54-.54-1.96-1-5.67-1","opacity":"0.3"},[]),h('path',{d:"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4m0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1m6 11.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12zm0-5.5H6V7h12z"},[]),h('circle',{"cx":"12","cy":"14.5",r:"1.5"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.21.81A.649.649 0 0 0 6.65 21h10.7a.649.649 0 0 0 .36-1.19L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4m0 14c-.83 0-1.5-.67-1.5-1.5S11.17 13 12 13s1.5.67 1.5 1.5S12.83 16 12 16m6-6H6V7h12z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4m0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1m6 11.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12zm0-5.5H6V7h12z"},[]),h('circle',{"cx":"12","cy":"14.5",r:"1.5"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4m0 14c-.83 0-1.5-.67-1.5-1.5S11.17 13 12 13s1.5.67 1.5 1.5S12.83 16 12 16m6-6H6V7h12z"},[])]);
        }
    });
})();

export default IMaterialDirectionsRailwayFilled;
</script>