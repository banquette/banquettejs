<script>
import { h } from 'vue';

export default {
    name: 'i-remix-number-6',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '5.5 2 13 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.886 2-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2h2.31zM12 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"},[])]);
    }
}
</script>