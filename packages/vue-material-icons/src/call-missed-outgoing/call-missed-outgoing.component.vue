<script>
import { h } from 'vue';

export default {
    name: 'i-material-call-missed-outgoing',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 7 18 10.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.41 7 17.59 9.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.7 9.11 7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59 5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41z"},[])]);
return h('svg',{"viewBox":c ? '3 7 18 10.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"},[])]);
    }
}
</script>