<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCameraLens = /* @__PURE__ */ ((_) => {
    return r('camera-lens', {
        name: 'i-remix-camera-lens',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.858 19.71 12 16H5.07a8.02 8.02 0 0 0 4.788 3.71M4.252 14h4.284L5.07 7.999A7.96 7.96 0 0 0 4 12c0 .69.088 1.36.252 2m2.143-7.708L8.535 10 12 4a7.97 7.97 0 0 0-5.605 2.292m7.747-2.002L12 8h6.93a8.02 8.02 0 0 0-4.788-3.71M19.748 10h-4.284l3.465 6.001A7.96 7.96 0 0 0 20 12c0-.69-.088-1.36-.252-2m-2.143 7.708L15.465 14 12 20a7.97 7.97 0 0 0 5.605-2.292M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m1.155-12h-2.31l-1.154 2 1.154 2h2.31l1.154-2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.827 21.763 14.31 14l3.532 6.117A9.96 9.96 0 0 1 12 22c-.746 0-1.473-.082-2.173-.237M7.89 21.12A10.03 10.03 0 0 1 2.458 15h8.965L7.89 21.119zM2.05 13a9.96 9.96 0 0 1 2.583-7.761L9.112 13zm4.109-9.117A9.96 9.96 0 0 1 12 2c.746 0 1.473.082 2.173.237L9.69 10zM16.11 2.88A10.03 10.03 0 0 1 21.542 9h-8.965l3.533-6.119zM21.95 11a9.96 9.96 0 0 1-2.583 7.761L14.888 11h7.064z"},[])]);
        }
    });
})();

export default IRemixCameraLens;
</script>