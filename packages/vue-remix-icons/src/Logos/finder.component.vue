<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFinder = /* @__PURE__ */ ((_) => {
    return r('finder', {
        name: 'i-remix-finder',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM10.48 4.999 4 5v14h8.746a26 26 0 0 1-.163-1.02Q12.138 18 12 18c-2.208 0-4.398-.73-6.555-2.168l1.11-1.664C8.398 15.397 10.208 16 12 16q.199 0 .398-.01c-.024-.497-.024-1.41.007-1.99H9.5v-1c0-3.275.32-5.94.98-8.001m2.12 0C11.935 6.582 11.556 9.41 11.51 12h3.123l-.14 1.124a16 16 0 0 0-.108 2.52q1.518-.449 3.06-1.476l1.11 1.664q-1.98 1.321-3.993 1.84.086.65.219 1.327L20 19V5zM7 7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-8.465Q10.5 7.966 10.5 13h3q-.172 1.38-.107 2.877c1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043q.078.555.184 1.125H20zM6.555 14.168l-1.11 1.664C7.602 17.27 9.792 18 12 18v-2c-1.792 0-3.602-.603-5.445-1.832M17 7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1M7 7c-.552 0-1 .452-1 1v1a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1"},[])]);
        }
    });
})();

export default IRemixFinder;
</script>