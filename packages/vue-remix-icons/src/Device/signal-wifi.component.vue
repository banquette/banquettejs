<script>
import { h } from 'vue';

export default {
    name: 'i-remix-signal-wifi',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 2c-3.028 0-5.923.842-8.42 2.392L12 17.817 20.42 7.39A15.928 15.928 0 0 0 12 5z"},[])]);
return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3z"},[])]);
    }
}
</script>