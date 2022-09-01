<script>
import { h } from 'vue';

export default {
    name: 'i-material-stay-primary-portrait',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5.01 1 13.99 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 5h10v14H7z","opacity":"0.3"},[]),h('path',{d:"M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5.01 1 13.99 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.01 1v22H19V1H5.01zM17 19H7V5h10v14z"},[])]);
return h('svg',{"viewBox":c ? '5.01 1 13.99 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"},[])]);
    }
}
</script>