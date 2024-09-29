<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEmotionSad = /* @__PURE__ */ ((_) => {
    return r('emotion-sad', {
        name: 'i-remix-emotion-sad',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10q-.002 1.092-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 4 4 0 0 0 1.555 1.423A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m7 12.172 1.414 1.414a2 2 0 1 1-2.93.11l.102-.11zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17s-1.965.183-2.755.496l-.945-.86A5 5 0 0 1 12 15m-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-1.065 4.496 2 2 0 0 0-.398-.775l-.123-.135L19 14.172l-1.414 1.414-.117.127a2 2 0 0 0 1.679 3.282A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 13c-1.38 0-2.63.56-3.534 1.463l-.166.174.945.86C10.035 17.182 10.982 17 12 17c.905 0 1.754.144 2.486.396l.269.1.945-.86A5 5 0 0 0 12 15m-3.5-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"},[])]);
        }
    });
})();

export default IRemixEmotionSad;
</script>