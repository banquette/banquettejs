<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHeart = /* @__PURE__ */ ((_) => {
    return r('heart', {
        name: 'i-remix-heart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18.48' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.001 4.529a6 6 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.494.154 4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18.48' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.001 4.529a6 6 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464"},[])]);
        }
    });
})();

export default IRemixHeart;
</script>