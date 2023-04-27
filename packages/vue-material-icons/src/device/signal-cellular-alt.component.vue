<script>
import { h } from 'vue';

export default {
    name: 'i-material-signal-cellular-alt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 15 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm-12 10c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5S5 19.33 5 18.5v-3c0-.83.67-1.5 1.5-1.5zm6-5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '5 4 15 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z"},[])]);
return h('svg',{"viewBox":c ? '5 4 15 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"},[])]);
    }
}
</script>