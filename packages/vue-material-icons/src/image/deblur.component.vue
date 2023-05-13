<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('deblur', {
        name: 'i-material-deblur',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.5 2.5 18.5 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"6","cy":"14",r:"1"},[]),h('circle',{"cx":"6","cy":"18",r:"1"},[]),h('circle',{"cx":"6","cy":"10",r:"1"},[]),h('circle',{"cx":"3","cy":"10",r:"0.5"},[]),h('circle',{"cx":"6","cy":"6",r:"1"},[]),h('circle',{"cx":"3","cy":"14",r:"0.5"},[]),h('circle',{"cx":"10","cy":"21",r:"0.5"},[]),h('circle',{"cx":"10","cy":"3",r:"0.5"},[]),h('circle',{"cx":"10","cy":"6",r:"1"},[]),h('circle',{"cx":"10","cy":"14",r:"1.5"},[]),h('circle',{"cx":"10","cy":"10",r:"1.5"},[]),h('circle',{"cx":"10","cy":"18",r:"1"},[]),h('path',{d:"M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z"},[]),h('path',{d:"M12 5v14c3.86 0 7-3.14 7-7s-3.14-7-7-7z","opacity":"0.3"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2.5 2.5 18.5 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"6","cy":"14",r:"1"},[]),h('circle',{"cx":"6","cy":"18",r:"1"},[]),h('circle',{"cx":"6","cy":"10",r:"1"},[]),h('circle',{"cx":"3","cy":"10",r:"0.5"},[]),h('circle',{"cx":"6","cy":"6",r:"1"},[]),h('circle',{"cx":"3","cy":"14",r:"0.5"},[]),h('circle',{"cx":"10","cy":"21",r:"0.5"},[]),h('circle',{"cx":"10","cy":"3",r:"0.5"},[]),h('circle',{"cx":"10","cy":"6",r:"1"},[]),h('circle',{"cx":"10","cy":"14",r:"1.5"},[]),h('circle',{"cx":"10","cy":"10",r:"1.5"},[]),h('circle',{"cx":"10","cy":"18",r:"1"},[]),h('path',{d:"M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z"},[])]);
return h('svg',{"viewBox":c ? '2.5 2.5 18.5 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3v18a9 9 0 0 0 0-18z"},[]),h('circle',{"cx":"6","cy":"14",r:"1"},[]),h('circle',{"cx":"6","cy":"18",r:"1"},[]),h('circle',{"cx":"6","cy":"10",r:"1"},[]),h('circle',{"cx":"3","cy":"10",r:"0.5"},[]),h('circle',{"cx":"6","cy":"6",r:"1"},[]),h('circle',{"cx":"3","cy":"14",r:"0.5"},[]),h('circle',{"cx":"10","cy":"21",r:"0.5"},[]),h('circle',{"cx":"10","cy":"3",r:"0.5"},[]),h('circle',{"cx":"10","cy":"6",r:"1"},[]),h('circle',{"cx":"10","cy":"14",r:"1.5"},[]),h('circle',{"cx":"10","cy":"10",r:"1.5"},[]),h('circle',{"cx":"10","cy":"18",r:"1"},[])]);
        }
    });
})();
</script>