<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNumbers = /* @__PURE__ */ ((_) => {
    return r('numbers', {
        name: 'i-material-numbers',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.27 4 17.45 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.68 9.27.01-.06A.96.96 0 0 0 19.76 8H17l.7-2.79A.972.972 0 0 0 16.76 4c-.45 0-.83.3-.94.73L15 8h-4l.7-2.79A.972.972 0 0 0 10.76 4c-.45 0-.83.3-.94.73L9 8H5.76c-.45 0-.84.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H8.5l-1 4H4.26c-.45 0-.83.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H7l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L9 16h4l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L15 16h3.24c.45 0 .83-.3.94-.73l.01-.06a.976.976 0 0 0-.94-1.21H15.5l1-4h3.24c.45 0 .84-.3.94-.73M13.5 14h-4l1-4h4z"},[])]);
return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4zm-7 4h-4l1-4h4z"},[])]);
        }
    });
})();

export default IMaterialNumbers;
</script>