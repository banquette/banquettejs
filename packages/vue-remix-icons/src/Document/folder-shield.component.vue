<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolderShield = /* @__PURE__ */ ((_) => {
    return r('folder-shield', {
        name: 'i-remix-folder-shield',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm4 4h8v4.904c0 .892-.446 1.724-1.187 2.219L12 17.998l-2.813-1.875A2.67 2.67 0 0 1 8 13.904zm2 4.904c0 .223.111.431.297.555L12 15.594l1.703-1.135a.67.67 0 0 0 .297-.555V11h-4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM8 9v4.904c0 .892.446 1.724 1.187 2.219L12 17.998l2.813-1.875A2.67 2.67 0 0 0 16 13.904V9zm2 4.904V11h4v2.904a.67.67 0 0 1-.297.555L12 15.594l-1.703-1.135a.67.67 0 0 1-.297-.555"},[])]);
        }
    });
})();

export default IRemixFolderShield;
</script>