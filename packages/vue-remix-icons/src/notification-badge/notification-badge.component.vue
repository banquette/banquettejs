<script>
import { h } from 'vue';

export default {
    name: 'i-remix-notification-badge',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13.341 4A5.99 5.99 0 0 0 13 6H5v14h14v-8a5.99 5.99 0 0 0 2-.341V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.341zM19 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13.341 4A6 6 0 0 0 21 11.659V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.341zM19 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},[])]);
    }
}
</script>