<script>
import { h } from 'vue';

export default {
    name: 'i-remix-number-9',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5.51 1.5 13 20.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 1.5a6.5 6.5 0 0 1 5.619 9.77l-6.196 10.729H9.114l4.439-7.686A6.5 6.5 0 1 1 12 1.5zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"},[])]);
    }
}
</script>