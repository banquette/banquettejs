<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDislike = /* @__PURE__ */ ((_) => {
    return r('dislike', {
        name: 'i-remix-dislike',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.39 1.39 20.61 20.09' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m2.808 1.393 18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 0 1 .034-8.023L1.393 2.808zm2.172 10.23L12 18.654l2.617-2.623-9.645-9.645a4 4 0 0 0 .008 5.237m15.263-6.866a6 6 0 0 1 .236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a4 4 0 0 0-.193-5.453 4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-1.155-.723l-2.25-2.25a6 6 0 0 1 4.74 1.484 6 6 0 0 1 8.242.228"},[])]);
return h('svg',{"viewBox":c ? '1.39 1.39 20.61 20.09' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m2.808 1.393 18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 0 1 .034-8.023L1.393 2.808zm17.435 3.364a6 6 0 0 1 .236 8.236l-1.635 1.636L7.26 3.046a6 6 0 0 1 4.741 1.483 6 6 0 0 1 8.242.228"},[])]);
        }
    });
})();

export default IRemixDislike;
</script>