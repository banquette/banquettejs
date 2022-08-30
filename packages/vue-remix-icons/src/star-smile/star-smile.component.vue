<script>
import { h } from 'vue';

export default {
    name: 'i-remix-star-smile',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '0.59 0.5 22.83 21.71' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 .5 4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zm0 3.544L9.022 8.402 3.957 9.887l3.225 4.178-.153 5.275L12 17.566l4.97 1.774-.152-5.275 3.224-4.178-5.064-1.485L12 4.044zM10 12a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '0.59 0.5 22.83 21.71' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 .5 4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"},[])]);
    }
}
</script>