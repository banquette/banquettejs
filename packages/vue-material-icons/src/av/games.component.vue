<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialGames = /* @__PURE__ */ ((_) => {
    return r('games', {
        name: 'i-material-games',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 17.33V20h2v-2.67l-1-1zm2-10.66V4h-2v2.67l1 1zM16.33 12l1 1H20v-2h-2.67zM4 11v2h2.67l1-1-1-1z","opacity":"0.3"},[]),h('path',{d:"M2 9v6h5.5l3-3-3-3zm4.67 4H4v-2h2.67l1 1zM22 9h-5.5l-3 3 3 3H22zm-2 4h-2.67l-1-1 1-1H20zm-5 3.5-3-3-3 3V22h6zM13 20h-2v-2.67l1-1 1 1zM9 7.5l3 3 3-3V2H9zM11 4h2v2.67l-1 1-1-1z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 7.29V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4.29c0 .13.05.26.15.35l2.5 2.5c.2.2.51.2.71 0l2.5-2.5c.09-.09.14-.21.14-.35M7.29 9H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4.29c.13 0 .26-.05.35-.15l2.5-2.5c.2-.2.2-.51 0-.71l-2.5-2.5A.48.48 0 0 0 7.29 9M9 16.71V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4.29a.47.47 0 0 0-.15-.35l-2.5-2.5c-.2-.2-.51-.2-.71 0l-2.5 2.5c-.09.09-.14.21-.14.35m7.35-7.56-2.5 2.5c-.2.2-.2.51 0 .71l2.5 2.5c.09.09.22.15.35.15H21c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4.29a.45.45 0 0 0-.36.14"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 4v2.67l-1 1-1-1V4zm7 7v2h-2.67l-1-1 1-1zM6.67 11l1 1-1 1H4v-2zM12 16.33l1 1V20h-2v-2.67zM15 2H9v5.5l3 3 3-3zm7 7h-5.5l-3 3 3 3H22zM7.5 9H2v6h5.5l3-3zm4.5 4.5-3 3V22h6v-5.5z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 7.5V2H9v5.5l3 3zM7.5 9H2v6h5.5l3-3zM9 16.5V22h6v-5.5l-3-3zM16.5 9l-3 3 3 3H22V9z"},[])]);
        }
    });
})();

export default IMaterialGames;
</script>