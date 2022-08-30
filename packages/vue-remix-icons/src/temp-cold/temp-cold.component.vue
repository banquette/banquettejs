<script>
import { h } from 'vue';

export default {
    name: 'i-remix-temp-cold',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '5 1 14 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zM8 16h8a4 4 0 1 1-8 0z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '5 1 14 22' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zM8 16a4 4 0 1 0 8 0H8z"},[])]);
    }
}
</script>