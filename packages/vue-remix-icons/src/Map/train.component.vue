<script>
import { h } from 'vue';

export default {
    name: 'i-remix-train',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.2 20 1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2h-1.8zM7 5a2 2 0 0 0-2 2v11h14V7a2 2 0 0 0-2-2H7zm5 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM6 7h12v4H6V7z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.2 20 1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2h-1.8zM5 7v4h14V7H5zm7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},[])]);
    }
}
</script>