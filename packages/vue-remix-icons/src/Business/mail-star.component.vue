<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMailStar = /* @__PURE__ */ ((_) => {
    return r('mail-star', {
        name: 'i-remix-mail-star',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21.78 20.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM19.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L19.5 15l1.323 2.68 2.957.43-2.14 2.085.505 2.946z"},[])]);
return h('svg',{"viewBox":c ? '2 3 21.78 20.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 14.044A6 6 0 0 0 13.689 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-2.361L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513zM19.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L19.5 15l1.323 2.68 2.957.43-2.14 2.085.505 2.946z"},[])]);
        }
    });
})();

export default IRemixMailStar;
</script>