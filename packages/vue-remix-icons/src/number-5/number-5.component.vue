<script>
import { h } from 'vue';

export default {
    name: 'i-remix-number-5',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '5.69 2 12.81 20.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M18 2v2H9.3l-.677 6.445a6.5 6.5 0 1 1-2.93 7.133l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-4.5-4.5c-2.022 0-3.278.639-3.96 1.53l-1.575-1.182L7.5 2H18z"},[])]);
    }
}
</script>