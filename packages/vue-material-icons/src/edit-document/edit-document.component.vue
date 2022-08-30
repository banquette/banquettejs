<script>
import { h } from 'vue';

export default {
    name: 'i-material-edit-document',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '4 2 19 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M14 19.88V22h2.12l5.17-5.17-2.12-2.12zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H12v-2.95l8-8V8zm-7 1V3.5L18.5 9H13zm9.71 5-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 16.12l.71-.71a.996.996 0 0 0 0-1.41z"},[])]);
    }
}
</script>