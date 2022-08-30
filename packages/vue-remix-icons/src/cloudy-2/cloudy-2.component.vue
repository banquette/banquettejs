<script>
import { h } from 'vue';

export default {
    name: 'i-remix-cloudy-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '1 2 22.01 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zM7 19h10a4 4 0 1 0-.426-7.978 5 5 0 1 0-9.148 0A4 4 0 1 0 7 19z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '1 2 22.01 19' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21z"},[])]);
    }
}
</script>