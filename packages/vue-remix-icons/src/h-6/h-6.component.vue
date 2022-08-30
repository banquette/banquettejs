<script>
import { h } from 'vue';

export default {
    name: 'i-remix-h-6',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '2 4 20.5 16.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 18.5 14.5z"},[])]);
    }
}
</script>