<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMedal2 = /* @__PURE__ */ ((_) => {
    return r('medal-2', {
        name: 'i-remix-medal-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4.39 2 15.22 20.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 8.5 2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44zm0 5.207-.739 1.777-1.916.153 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.459-1.252-1.915-.153zM8 2v9H6V2zm10 0v9h-2V2zm-5 0v5h-2V2z"},[])]);
return h('svg',{"viewBox":c ? '4.39 2 15.22 20.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 8.5 2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44zM8 2v9H6V2zm10 0v9h-2V2zm-5 0v5h-2V2z"},[])]);
        }
    });
})();

export default IRemixMedal2;
</script>