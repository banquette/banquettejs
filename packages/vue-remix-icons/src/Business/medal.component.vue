<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMedal = /* @__PURE__ */ ((_) => {
    return r('medal', {
        name: 'i-remix-medal',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 1.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43zM18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.049V2zm-7-.001v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 3.5-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L12 17.25l2.645 1.39-.505-2.945 2.14-2.086-2.957-.43zm1-8.501L18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.049zm-2 0v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z"},[])]);
        }
    });
})();

export default IRemixMedal;
</script>