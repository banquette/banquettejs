<script>
import { h } from 'vue';

export default {
    name: 'i-material-align-horizontal-center',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2c.55 0 1 .45 1 1v4h6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v4c0 .55-.45 1-1 1s-1-.45-1-1v-4H7.5c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14H11v-4H4.5C3.67 10 3 9.33 3 8.5S3.67 7 4.5 7H11V3c0-.55.45-1 1-1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 2 18 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"},[])]);
    }
}
</script>