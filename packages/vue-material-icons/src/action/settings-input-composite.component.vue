<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSettingsInputComposite = /* @__PURE__ */ ((_) => {
    return r('settings-input-composite', {
        name: 'i-material-settings-input-composite',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 16c0 .55.45 1 1 1s1-.45 1-1v-2H3zm8 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2zm8 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2z","opacity":"0.3"},[]),h('path',{d:"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4H3V8h2zm8-10c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4h-2V8h2zm8-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6zm0 10c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4h-2V8h2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 16.82h2V23h2v-4.18h2V14H9zm-8 0h2V23h2v-4.18h2V14H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 16.82h2V23h2v-4.18h2V14h-6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H2c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1H5zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1h-1zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2h-6z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5zM4 17c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zM13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm-1 15c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zm10-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6zm-1 11c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6z"},[])]);
        }
    });
})();

export default IMaterialSettingsInputComposite;
</script>