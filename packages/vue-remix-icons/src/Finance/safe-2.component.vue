<script>
import { h } from 'vue';

export default {
    name: 'i-remix-safe-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.09 21 20.91' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 20.333V22h-2v-1.333l-7.418 1.236A.5.5 0 0 1 10 21.41V20H6v2H4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.59a.5.5 0 0 1 .582-.493l10.582 1.764a1 1 0 0 1 .836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 0 1-.836.986L20 20.333zM4 5v13h6V5H4zm8 14.64 8-1.334V4.694l-8-1.333v16.278zM16.5 14c-.828 0-1.5-1.12-1.5-2.5S15.672 9 16.5 9s1.5 1.12 1.5 2.5-.672 2.5-1.5 2.5z"},[])]);
return h('svg',{"viewBox":c ? '2 1.09 21 20.91' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 20H6v2H4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.59a.5.5 0 0 1 .582-.493l10.582 1.764a1 1 0 0 1 .836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 0 1-.836.986L20 20.333V22h-2v-1.333l-7.418 1.236A.5.5 0 0 1 10 21.41V20zm2-.36 8-1.334V4.694l-8-1.333v16.278zM16.5 14c-.828 0-1.5-1.12-1.5-2.5S15.672 9 16.5 9s1.5 1.12 1.5 2.5-.672 2.5-1.5 2.5z"},[])]);
    }
}
</script>