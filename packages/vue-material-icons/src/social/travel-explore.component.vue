<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTravelExplore = /* @__PURE__ */ ((_) => {
    return r('travel-explore', {
        name: 'i-material-travel-explore',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20.08 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.3 16.9c.58-1.01.95-2.23.51-3.65-.53-1.72-2.04-3.05-3.84-3.22a4.498 4.498 0 0 0-4.95 4.95c.18 1.79 1.5 3.31 3.22 3.84 1.43.44 2.64.07 3.65-.51l2.5 2.5c.39.39 1.01.39 1.4 0a.984.984 0 0 0 0-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"},[])]);
return h('svg',{"viewBox":c ? '2 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"},[])]);
        }
    });
})();

export default IMaterialTravelExplore;
</script>