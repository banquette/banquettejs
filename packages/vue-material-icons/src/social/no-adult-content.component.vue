<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNoAdultContent = /* @__PURE__ */ ((_) => {
    return r('no-adult-content', {
        name: 'i-material-no-adult-content',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.92 7.92 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.87 7.87 0 0 1 12 20c-4.41 0-8-3.59-8-8"},[]),h('path',{d:"m14.25 14-1.5-2 1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2-1.5 2h1.5l.75-1 .75 1zM8 10l-.75 1-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4 .75-1 .75 1H19l-1.5-2 1.5-2h-1.5l-.75 1-.75-1h-1.5l1.5 2-1.5 2z"},[])]);
        }
    });
})();

export default IMaterialNoAdultContent;
</script>