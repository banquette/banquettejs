<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSportsGymnastics = /* @__PURE__ */ ((_) => {
    return r('sports-gymnastics', {
        name: 'i-material-sports-gymnastics',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1 4 21.56 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m9 16c-.56 0-1.02-.44-1.05-1l-.45-9L8 11H2c-.55 0-1-.45-1-1s.45-1 1-1h5l6.26-4.47c.42-.3 1-.23 1.34.16.38.45.3 1.12-.18 1.46L11.14 8.5H14l7.09-4.09a.98.98 0 0 1 1.1 1.62L14.5 12l-.45 9c-.03.56-.49 1-1.05 1"},[])]);
return h('svg',{"viewBox":c ? '1 4 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1z"},[])]);
        }
    });
})();

export default IMaterialSportsGymnastics;
</script>