<script>
import { h } from 'vue';

export default {
    name: 'i-remix-robot',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 4.055A9 9 0 0 1 21 13v9H3v-9a9 9 0 0 1 8-8.945V1h2v3.055zM19 20v-7a7 7 0 0 0-14 0v7h14zm-7-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 4.055A9 9 0 0 1 21 13v9H3v-9a9 9 0 0 1 8-8.945V1h2v3.055zM12 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},[])]);
    }
}
</script>