<script>
import { h } from 'vue';

export default {
    name: 'i-remix-reply',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '1 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81a9.003 9.003 0 0 0-7.655-4.805L13 15h-2v5zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.984 7.984 0 0 0 11 11H9V8.161L4.202 12 9 15.839V13z"},[])]);
return h('svg',{"viewBox":c ? '1 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81A9 9 0 0 0 13 15h-2v5z"},[])]);
    }
}
</script>