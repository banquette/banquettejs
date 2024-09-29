<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLightbulbFlash = /* @__PURE__ */ ((_) => {
    return r('lightbulb-flash', {
        name: 'i-remix-lightbulb-flash',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.973 18h4.054c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278M14 20h-4v1h4zm-8.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15M13 10.004h2.5l-4.5 6v-4H8.5L13 6z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1zm-3-9.995V6l-4.5 6.005H11v4l4.5-6z"},[])]);
        }
    });
})();

export default IRemixLightbulbFlash;
</script>