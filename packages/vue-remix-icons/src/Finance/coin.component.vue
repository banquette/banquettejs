<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCoin = /* @__PURE__ */ ((_) => {
    return r('coin', {
        name: 'i-remix-coin',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823L1 14v-4c0-3.314 4.925-6 11-6m0 12c-3.72 0-7.01-1.007-9-2.55V14c0 1.882 3.883 4 9 4 5.01 0 8.838-2.03 8.995-3.882L21 14l.001-.55C19.011 14.992 15.721 16 12 16m0-10c-5.117 0-9 2.118-9 4s3.883 4 9 4 9-2.118 9-4-3.883-4-9-4"},[])]);
return h('svg',{"viewBox":c ? '1 4 22 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 12v2c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823L1 14v-2c0 3.314 4.925 6 11 6s11-2.686 11-6M12 4c6.075 0 11 2.686 11 6s-4.925 6-11 6-11-2.686-11-6 4.925-6 11-6"},[])]);
        }
    });
})();

export default IRemixCoin;
</script>