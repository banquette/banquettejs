<script>
import { h } from 'vue';

export default {
    name: 'i-remix-pencil',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3.03 17.97 17.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.728 9.686-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414 1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"},[])]);
return h('svg',{"viewBox":c ? '3 3.03 17.97 17.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12.9 6.858 4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414 2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"},[])]);
    }
}
</script>