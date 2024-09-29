<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCompasses2 = /* @__PURE__ */ ((_) => {
    return r('compasses-2', {
        name: 'i-remix-compasses-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.87 2 17.13 20.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.33 13.5A6.99 6.99 0 0 0 19 8h2a8.99 8.99 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108A9 9 0 0 1 12 17a9 9 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.063-8.77A4.002 4.002 0 0 1 11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728zm-1.73 1.002-1.528-2.647a4 4 0 0 1-2.142 0l-1.528 2.647a7 7 0 0 0 2.599.498c.918 0 1.795-.177 2.599-.498M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
return h('svg',{"viewBox":c ? '3.87 2 17.13 20.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.33 13.5A6.99 6.99 0 0 0 19 8h2a8.99 8.99 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108A9 9 0 0 1 12 17a9 9 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.063-8.77A4.002 4.002 0 0 1 11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728zm-1.73 1.002-1.528-2.647a4 4 0 0 1-2.142 0l-1.528 2.647a7 7 0 0 0 2.599.498c.918 0 1.795-.177 2.599-.498M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
        }
    });
})();

export default IRemixCompasses2;
</script>