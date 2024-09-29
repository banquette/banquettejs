<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAliens = /* @__PURE__ */ ((_) => {
    return r('aliens', {
        name: 'i-remix-aliens',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.5 2 17 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m0 2a6.5 6.5 0 0 0-6.5 6.5c0 4.794 4.165 10 6.5 10s6.5-5.206 6.5-10A6.5 6.5 0 0 0 12 4m5.5 7q.24 0 .475.025a4.5 4.5 0 0 1-4.95 4.95A4.5 4.5 0 0 1 17.5 11m-11 0a4.5 4.5 0 0 1 4.475 4.975 4.5 4.5 0 0 1-4.95-4.95Q6.259 11 6.5 11"},[])]);
return h('svg',{"viewBox":c ? '3.5 2 17 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m5.5 10a4.5 4.5 0 0 0-4.475 4.975 4.5 4.5 0 0 0 4.95-4.95A5 5 0 0 0 17.5 12m-11 0q-.24 0-.475.025a4.5 4.5 0 0 0 4.95 4.95A4.5 4.5 0 0 0 6.5 12"},[])]);
        }
    });
})();

export default IRemixAliens;
</script>