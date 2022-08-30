<script>
import { h } from 'vue';

export default {
    name: 'i-remix-mail-volume',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21.01 20.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 14.5v9L16.667 21H14v-4h2.667L20 14.5zM21 3a1 1 0 0 1 1 1v9h-2V7.237l-7.928 7.101L4 7.215V19h8v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 14a2 2 0 0 1 .15 3.995L21 21v-4zM19.5 5H4.511l7.55 6.662L19.5 5z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21.01 20.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 14.5v9L16.667 21H14v-4h2.667L20 14.5zM21 3a1 1 0 0 1 1 1v10.529A6 6 0 0 0 12.34 21H3.002a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 14a2 2 0 0 1 .15 3.995L21 21v-4zM5.647 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.286 5.438-6.413-5.444z"},[])]);
    }
}
</script>