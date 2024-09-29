<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMastercard = /* @__PURE__ */ ((_) => {
    return r('mastercard', {
        name: 'i-remix-mastercard',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 4.7 22 14.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 18.294a7.3 7.3 0 1 1 0-12.588 7.3 7.3 0 1 1 0 12.588m1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.27 7.27 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91m-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.27 7.27 0 0 1 8.4 12c0-1.89.719-3.614 1.898-4.91M12 8.205A5.28 5.28 0 0 0 10.4 12c0 1.488.613 2.832 1.6 3.795A5.28 5.28 0 0 0 13.6 12 5.28 5.28 0 0 0 12 8.205"},[])]);
return h('svg',{"viewBox":c ? '1 5.2 22 13.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 6.654a6.79 6.79 0 0 1 2.596 5.344A6.79 6.79 0 0 1 12 17.34a6.79 6.79 0 0 1-2.596-5.343A6.79 6.79 0 0 1 12 6.654m-.87-.582A7.78 7.78 0 0 0 8.4 12a7.78 7.78 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.78 7.78 0 0 0 15.6 12a7.78 7.78 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z"},[])]);
        }
    });
})();

export default IRemixMastercard;
</script>