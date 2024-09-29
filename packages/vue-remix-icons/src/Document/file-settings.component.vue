<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileSettings = /* @__PURE__ */ ((_) => {
    return r('file-settings', {
        name: 'i-remix-file-settings',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.595 12.812a3.5 3.5 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.5 3.5 0 0 1 11 8.645V7.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.5 3.5 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.5 3.5 0 0 1-1.405.812V16.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573-1-1.732zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zM8.595 12.812l-.992.572 1 1.732.992-.573c.393.372.873.654 1.405.812V16.5h2v-1.145a3.5 3.5 0 0 0 1.405-.812l.992.573 1-1.732-.992-.573a3.5 3.5 0 0 0 0-1.622l.992-.573-1-1.732-.992.573A3.5 3.5 0 0 0 13 8.645V7.5h-2v1.145a3.5 3.5 0 0 0-1.405.812l-.992-.573-1 1.732.992.573a3.5 3.5 0 0 0 0 1.623M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},[])]);
        }
    });
})();

export default IRemixFileSettings;
</script>