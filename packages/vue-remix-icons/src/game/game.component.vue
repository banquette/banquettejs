<script>
import { h } from 'vue';

export default {
    name: 'i-remix-game',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 17.74 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 2a8 8 0 1 0 4.697 14.477l.208-.157-6.32-6.32 6.32-6.321-.208-.156a7.964 7.964 0 0 0-4.394-1.517L12 4zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 17.74 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"},[])]);
    }
}
</script>