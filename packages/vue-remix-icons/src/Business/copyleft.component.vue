<script>
import { h } from 'vue';

export default {
    name: 'i-remix-copyleft',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-2c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-3a4.998 4.998 0 0 1-4.288-2.428l1.714-1.029A3 3 0 0 0 12 15c1.658 0 3-1.342 3-3s-1.342-3-3-3a2.997 2.997 0 0 0-2.573 1.456L7.712 9.428A5.002 5.002 0 0 1 17 12c0 2.76-2.24 5-5 5z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-5c2.76 0 5-2.24 5-5a5.002 5.002 0 0 0-9.288-2.572l1.715 1.028A2.997 2.997 0 0 1 12 9c1.658 0 3 1.342 3 3s-1.342 3-3 3a2.998 2.998 0 0 1-2.574-1.457l-1.714 1.03A5.001 5.001 0 0 0 12 17z"},[])]);
    }
}
</script>