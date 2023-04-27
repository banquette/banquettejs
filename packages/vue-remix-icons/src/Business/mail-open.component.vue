<script>
import { h } from 'vue';

export default {
    name: 'i-remix-mail-open',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.17 20 19.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.243 6.854 11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565 5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z"},[])]);
return h('svg',{"viewBox":c ? '2 1.17 20 19.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.243 6.854 11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zm16.103 1.39-6.285 5.439-6.414-5.445-1.294 1.524 7.72 6.555 7.581-6.56-1.308-1.513z"},[])]);
    }
}
</script>