<script>
import { h } from 'vue';

export default {
    name: 'i-material-baby-changing-station',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M14 8v2h-3L8.31 8.82 7 12.75V22H3V12l1.58-4.63A2 2 0 0 1 6.46 6c.28 0 .56.05.84.18l4.15 1.83L14 8zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1 18h12v-2H9v2zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM13 13v-2H9v2h2v3h6v-5h-2v2h-2z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M14 9c0 .55-.45 1-1 1h-1.58c-.28 0-.55-.06-.8-.17l-2.3-1.01L7 12.75V21c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8.67c0-.22.04-.44.11-.65l1.48-4.32A1.992 1.992 0 0 1 7.3 6.18l4.15 1.83L13 8c.55 0 1 .45 1 1zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm2 18h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1zm9.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM13 12c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v1h-2v-1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 1 18 21' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M14 8v2h-3L8.31 8.82 7 12.75V22H3V12l1.58-4.63A2.003 2.003 0 0 1 7.3 6.18l4.15 1.83L14 8zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1 18h12v-2H9v2zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM13 12c0-.55-.45-1-1-1H9v2h2v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3h-2v2h-2v-1z"},[])]);
    }
}
</script>