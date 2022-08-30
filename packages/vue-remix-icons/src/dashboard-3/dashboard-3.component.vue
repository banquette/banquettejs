<script>
import { h } from 'vue';

export default {
    name: 'i-remix-dashboard-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.833 3.337a.595.595 0 0 1 .763.067.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.502 1.502 0 0 1-2.122 0 1.502 1.502 0 0 1 0-2.122c.374-.373 2.005-1.574 4.894-3.602zM17.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2.318-3.596a1 1 0 1 1-1.416 1.414 1 1 0 0 1 1.416-1.414zM12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.596 5.404a.595.595 0 0 0-.763-.067c-2.89 2.028-4.52 3.23-4.894 3.602a1.502 1.502 0 0 0 0 2.122 1.502 1.502 0 0 0 2.122 0c.219-.22 1.418-1.851 3.598-4.897a.59.59 0 0 0-.063-.76zM17.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm2.318-3.596A1 1 0 1 0 7.404 8.82a1 1 0 0 0 1.414-1.416zM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},[])]);
    }
}
</script>