<script>
import { h } from 'vue';

export default {
    name: 'i-material-stacked-bar-chart',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 4 16 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M6 20c1.1 0 2-.9 2-2V9H4v9c0 1.1.9 2 2 2zM4 8h4V6c0-1.1-.9-2-2-2s-2 .9-2 2v2zm6 3h4V9c0-1.1-.9-2-2-2s-2 .9-2 2v2zm6 1v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2zm2 8c1.1 0 2-.9 2-2v-3h-4v3c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-6h-4v6c0 1.1.9 2 2 2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 4 16 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z"},[])]);
    }
}
</script>