<script>
import { h } from 'vue';

export default {
    name: 'i-material-wifi-1-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '10 16 4 4' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('circle',{"cx":"12","cy":"18",r:"2"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '8.47 16 7.06 5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M15.53 17.46 12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46z"},[])]);
    }
}
</script>