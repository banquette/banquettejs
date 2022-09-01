<script>
import { h } from 'vue';

export default {
    name: 'i-remix-message',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM8 10h8v2H8v-2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM8 10v2h8v-2H8z"},[])]);
    }
}
</script>