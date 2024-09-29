<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixThermometer = /* @__PURE__ */ ((_) => {
    return r('thermometer', {
        name: 'i-remix-thermometer',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.59 2.27 19.14 19.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.556 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.378.374-2.298 2.3a1 1 0 0 1-1.414-1.415l2.298-2.299.375-3.377c.1-.903.505-1.745 1.147-2.387l8.2-8.2a4 4 0 0 1 5.657 0m-4.242 1.414-8.2 8.2a2 2 0 0 0-.574 1.193l-.276 2.485 2.485-.276c.45-.05.872-.252 1.193-.573l.422-.423L9.95 14.05l1.414-1.414 1.414 1.414 1.414-1.414-1.414-1.414 1.414-1.414 1.415 1.414 1.414-1.415-1.414-1.414L17.02 6.98l1.414 1.414.707-.707a2 2 0 1 0-2.828-2.828z"},[])]);
return h('svg',{"viewBox":c ? '2.59 2.27 19.14 19.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.556 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.378.374-2.298 2.3a1 1 0 0 1-1.414-1.415l2.298-2.299.375-3.377c.1-.903.505-1.745 1.147-2.387l8.2-8.2a4 4 0 0 1 5.657 0m-9.192 9.192L9.95 14.05l2.121 2.122 1.414-1.415zm2.828-2.828-1.414 1.414 2.121 2.121 1.415-1.414zm2.829-2.829-1.414 1.414 2.12 2.122L19.143 9.1l-2.121-2.122z"},[])]);
        }
    });
})();

export default IRemixThermometer;
</script>