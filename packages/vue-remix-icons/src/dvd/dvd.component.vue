<script>
import { h } from 'vue';

export default {
    name: 'i-remix-dvd',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h3l-5 7v-5H8l5-7v5z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M13 11V6l-5 7h3v5l5-7h-3zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"},[])]);
    }
}
</script>