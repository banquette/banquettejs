<script>
import { h } from 'vue';

export default {
    name: 'i-material-flight-land',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2.5 2.31 19 18.69' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20.5 19h-17c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1zM3.51 11.61l15.83 4.24c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.58-8.45a1.08 1.08 0 0 0-.75-.73c-.68-.18-1.35.33-1.35 1.04v6.88L5.15 8.95 4.4 7.09a.991.991 0 0 0-.67-.59l-.33-.09a.495.495 0 0 0-.63.48v3.75c0 .46.3.85.74.97z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2.5 2 19 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z"},[])]);
    }
}
</script>