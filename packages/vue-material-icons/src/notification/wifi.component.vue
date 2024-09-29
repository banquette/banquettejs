<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialWifi = /* @__PURE__ */ ((_) => {
    return r('wifi', {
        name: 'i-material-wifi',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1.64 4.46 20.73 15.13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.06 10.06c.51.51 1.32.56 1.87.1 4.67-3.84 11.45-3.84 16.13-.01.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-5.71-4.67-13.97-4.67-19.69 0-.65.52-.7 1.5-.1 2.1m7.76 7.76 1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59a4.28 4.28 0 0 0-3.91 0c-.57.31-.68 1.12-.21 1.59m-3.73-3.73c.49.49 1.26.54 1.83.13a7.06 7.06 0 0 1 8.16 0c.57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11-3.44-2.49-8.13-2.49-11.58 0-.69.5-.73 1.51-.12 2.12"},[])]);
return h('svg',{"viewBox":c ? '1 4.45 22 15.55' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8 3 3 3-3a4.237 4.237 0 0 0-6 0m-4-4 2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13"},[])]);
        }
    });
})();

export default IMaterialWifi;
</script>