<script>
import { h } from 'vue';

export default {
    name: 'i-remix-drop',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 0.27 18 21.73' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 3.1 7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828 6.364 6.364a9 9 0 1 1-12.728 0L12 .272z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '3 0.27 18 21.73' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M5.636 6.636 12 .272l6.364 6.364a9 9 0 1 1-12.728 0z"},[])]);
    }
}
</script>