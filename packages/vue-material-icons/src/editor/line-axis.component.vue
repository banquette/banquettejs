<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('line-axis', {
        name: 'i-material-line-axis',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2.41 4.78 19.22 13.82' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.34 6.77a1 1 0 0 0-1.45.04l-3.33 3.74-5.65-5.24c-.79-.73-2.01-.71-2.77.05L2.7 10.81a.996.996 0 0 0 0 1.41l.09.09c.39.39 1.02.39 1.41 0l5.44-5.45 5.59 5.19L13.5 14l-2.58-2.58c-.78-.78-2.05-.78-2.83 0L2.7 16.8a.996.996 0 0 0 0 1.41l.1.09c.39.39 1.02.39 1.41 0l5.3-5.3 2.5 2.5c.81.81 2.14.77 2.91-.09l1.78-2.01 3.19 2.96c.39.36 1 .35 1.38-.03l.01-.01c.4-.4.39-1.05-.03-1.43l-3.22-2.99 3.35-3.77c.35-.39.33-.99-.04-1.36z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z"},[])]);
        }
    });
})();
</script>