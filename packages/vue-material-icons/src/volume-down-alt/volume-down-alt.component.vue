<script>
import { h } from 'vue';

export default {
    name: 'i-material-volume-down-alt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '3 4 13.5 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02S15.48 8.71 14 7.97zM3 9v6h4l5 5V4L7 9H3z"},[])]);
    }
}
</script>