<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSteam = /* @__PURE__ */ ((_) => {
    return r('steam', {
        name: 'i-remix-steam',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.71 4 20.29 16.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4a5 5 0 1 1-.892 9.92l-2.651 1.989q.043.29.043.591c0 2.21-1.79 4-4 4a4 4 0 0 1-3.966-4.524L1.708 14.43l.75-1.854 3.826 1.545a4 4 0 0 1 3.696-1.592l2.042-3.061A5 5 0 0 1 17 4M9.5 14.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 1 1-.75 1.854L7.52 16.78a2.001 2.001 0 0 0 3.981-.279 2 2 0 0 0-2-2zm3.364-2.69-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5 5 0 0 1-1.135-1.191M17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 17 7"},[])]);
return h('svg',{"viewBox":c ? '2.04 2 19.96 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.004 2c-5.25 0-9.556 4.05-9.964 9.197l5.36 2.216a2.8 2.8 0 0 1 1.593-.492q.079.001.157.005l2.384-3.452v-.049c0-2.08 1.69-3.77 3.77-3.77s3.77 1.692 3.77 3.772-1.692 3.771-3.77 3.771h-.087l-3.397 2.426.003.133a2.826 2.826 0 0 1-2.825 2.83 2.84 2.84 0 0 1-2.775-2.273l-3.838-1.589C3.573 18.922 7.427 22 12.005 22c5.522 0 9.998-4.477 9.998-10S17.526 2 12.004 2M7.078 16.667c.218.452.595.832 1.094 1.041a2.126 2.126 0 0 0 1.634-3.922 2.12 2.12 0 0 0-1.565-.025l1.269.525a1.563 1.563 0 0 1 .84 2.046 1.563 1.563 0 0 1-2.044.843zm10.74-7.245a2.516 2.516 0 0 0-2.513-2.512 2.514 2.514 0 0 0 0 5.025 2.513 2.513 0 0 0 2.512-2.513zM15.31 7.53a1.889 1.889 0 1 1-.002 3.774 1.889 1.889 0 0 1 .002-3.774"},[])]);
        }
    });
})();

export default IRemixSteam;
</script>