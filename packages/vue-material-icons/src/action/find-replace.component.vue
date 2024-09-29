<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFindReplace = /* @__PURE__ */ ((_) => {
    return r('find-replace', {
        name: 'i-material-find-replace',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 4 17.05 17.06' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 6c1.38 0 2.63.56 3.54 1.46l-1.69 1.69a.5.5 0 0 0 .36.85h4.29c.28 0 .5-.22.5-.5V5.21c0-.45-.54-.67-.85-.35l-1.2 1.2A6.94 6.94 0 0 0 11 4C7.96 4 5.38 5.94 4.42 8.64c-.24.66.23 1.36.93 1.36.42 0 .79-.26.93-.66A5.01 5.01 0 0 1 11 6m5.64 9.14c.4-.54.72-1.15.95-1.8S17.34 12 16.65 12a.98.98 0 0 0-.93.66A5.01 5.01 0 0 1 11 16c-1.38 0-2.63-.56-3.54-1.46l1.69-1.69a.5.5 0 0 0-.36-.85H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.2-1.2a6.984 6.984 0 0 0 9.09.7l4.11 4.11c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49z"},[])]);
return h('svg',{"viewBox":c ? '4 4 17.49 17.49' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.98 6.98 0 0 0 11 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0 1 11 6m5.64 9.14A6.9 6.9 0 0 0 17.92 12H15.9a5 5 0 0 1-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.98 6.98 0 0 0 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20z"},[])]);
        }
    });
})();

export default IMaterialFindReplace;
</script>