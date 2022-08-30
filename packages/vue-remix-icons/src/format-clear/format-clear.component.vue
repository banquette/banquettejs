<script>
import { h } from 'vue';

export default {
    name: 'i-remix-format-clear',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3.51 3.52 16.97 16.97' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12.651 14.065 11.605 20H9.574l1.35-7.661-7.41-7.41L4.93 3.515 20.485 19.07l-1.414 1.414-6.42-6.42zm-.878-6.535.27-1.53h-1.8l-2-2H20v2h-5.927L13.5 9.257 11.773 7.53z"},[])]);
    }
}
</script>