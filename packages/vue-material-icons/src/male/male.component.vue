<script>
import { h } from 'vue';

export default {
    name: 'i-material-male',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 4 16 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M19 4h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9 6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V9c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zM9.5 18C7.57 18 6 16.43 6 14.5S7.57 11 9.5 11s3.5 1.57 3.5 3.5S11.43 18 9.5 18z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 4 16 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"},[])]);
    }
}
</script>