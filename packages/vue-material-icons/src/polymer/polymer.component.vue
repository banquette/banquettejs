<script>
import { h } from 'vue';

export default {
    name: 'i-material-polymer',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'outlined' || this.version === 'round' || this.version === 'sharp' || this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '0.5 4 23 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '0.5 4 23 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"},[])]);
    }
}
</script>