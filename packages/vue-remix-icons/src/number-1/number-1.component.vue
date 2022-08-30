<script>
import { h } from 'vue';

export default {
    name: 'i-remix-number-1',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '7.5 1.5 6.5 20.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z"},[])]);
    }
}
</script>