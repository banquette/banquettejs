<script>
import { h } from 'vue';

export default {
    name: 'i-material-upgrade',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '8 4.22 8 15.78' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1zM11 7.99V15c0 .55.45 1 1 1s1-.45 1-1V7.99h1.79c.45 0 .67-.54.35-.85l-2.79-2.78a.513.513 0 0 0-.71 0L8.86 7.14c-.32.31-.1.85.35.85H11z"},[])]);
return h('svg',{"viewBox":c ? '8 4 8 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z"},[])]);
    }
}
</script>