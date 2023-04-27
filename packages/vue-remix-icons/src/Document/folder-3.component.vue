<script>
import { h } from 'vue';

export default {
    name: 'i-remix-folder-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 7v12h16V7H4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z"},[])]);
    }
}
</script>