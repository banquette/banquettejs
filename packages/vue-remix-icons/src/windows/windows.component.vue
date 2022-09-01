<script>
import { h } from 'vue';

export default {
    name: 'i-remix-windows',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.5 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2.5v19l-18-2v-15l18-2zm-2 10.499L12 13v5.487l7 .778V13zm-14 4.71 5 .556V13l-5-.001v4.71zM19 11V4.735l-7 .777V11l7-.001zm-9-5.265L5 6.29V11h5V5.734z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3 5.479 7.377-1.016v7.127H3V5.48zm0 13.042 7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"},[])]);
    }
}
</script>