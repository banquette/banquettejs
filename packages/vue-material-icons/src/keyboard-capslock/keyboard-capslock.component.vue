<script>
import { h } from 'vue';

export default {
    name: 'i-material-keyboard-capslock',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '6 6.01 12 11.99' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 8.41 3.89 3.89a.996.996 0 1 0 1.41-1.41L12.71 6.3a.996.996 0 0 0-1.41 0l-4.6 4.59a.996.996 0 1 0 1.41 1.41L12 8.41zM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '6 5.59 12 12.41' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"},[])]);
    }
}
</script>