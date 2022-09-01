<script>
import { h } from 'vue';

export default {
    name: 'i-remix-vip-diamond',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '0.15 3 23.71 18.76' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256A1 1 0 0 1 4.873 3zm.51 2-2.8 3.85L12 19.05l9.417-10.2-2.8-3.85H5.383z"},[])]);
return h('svg',{"viewBox":c ? '0.15 3 23.71 18.76' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"},[])]);
    }
}
</script>