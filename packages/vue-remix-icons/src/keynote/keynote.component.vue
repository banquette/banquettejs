<script>
import { h } from 'vue';

export default {
    name: 'i-remix-keynote',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2.18 2 19.65 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M4.44 10h15.12l-1.2-6H5.64l-1.2 6zM13 12v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998c.553 0 1.087.43 1.196.977l1.61 8.046c.108.54-.26.977-.797.977H13z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2.18 2 19.65 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 12v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998c.553 0 1.087.43 1.196.977l1.61 8.046c.108.54-.26.977-.797.977H13z"},[])]);
    }
}
</script>