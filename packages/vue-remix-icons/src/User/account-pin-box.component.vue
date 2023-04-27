<script>
import { h } from 'vue';

export default {
    name: 'i-remix-account-pin-box',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 21-2 2-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H14zm5-2V5H5v14h5.828L12 20.172 13.172 19H19zm-11.028-.82a9.983 9.983 0 0 1-1.751-.978A6.994 6.994 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a9.995 9.995 0 0 1-1.724 1.025A4.993 4.993 0 0 0 12.102 16c-1.715 0-3.23.864-4.13 2.18zM12 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 21-2 2-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H14zm-7.643-3h11.49a6.992 6.992 0 0 0-5.745-3 6.992 6.992 0 0 0-5.745 3zM12 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"},[])]);
    }
}
</script>