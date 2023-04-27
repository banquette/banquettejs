<script>
import { h } from 'vue';

export default {
    name: 'i-remix-book-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zM5 18a2 2 0 0 0 2 2h12V10H7a3.982 3.982 0 0 1-2-.535V18zM20 7H7a1 1 0 1 1 0-2h13v2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zm-1 3H7a1 1 0 1 1 0-2h13v2z"},[])]);
    }
}
</script>