<script>
import { h } from 'vue';

export default {
    name: 'i-material-file-upload-off',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        return h('svg',{"viewBox":this.crop !== undefined ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22l4.7 4.69L5 10h2.17L9 11.83V16h4.17l2 2H5v2h12.17l2.61 2.61zM15 10h4l-7-7-3.09 3.09L15 12.17z"},[])]);
    }
}
</script>