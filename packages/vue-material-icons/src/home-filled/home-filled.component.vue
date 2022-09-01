<script>
import { h } from 'vue';

export default {
    name: 'i-material-home-filled',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3 4 9v12h5v-7h6v7h5V9z"},[])]);
    }
}
</script>