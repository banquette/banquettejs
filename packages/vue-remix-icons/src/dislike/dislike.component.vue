<script>
import { h } from 'vue';

export default {
    name: 'i-remix-dislike',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '1.39 1.39 20.61 20.09' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m2.808 1.393 18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 0 1 .034-8.023L1.393 2.808l1.415-1.415zm2.172 10.23L12 18.654l2.617-2.623-9.645-9.645a4.001 4.001 0 0 0 .008 5.237zm15.263-6.866a6 6 0 0 1 .236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a3.999 3.999 0 0 0-.193-5.453 3.998 3.998 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a3.953 3.953 0 0 0-1.155-.723l-2.25-2.25a5.99 5.99 0 0 1 4.74 1.484 5.998 5.998 0 0 1 8.242.228z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '1.39 1.39 20.61 20.09' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m2.808 1.393 18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 0 1 .034-8.023L1.393 2.808l1.415-1.415zm17.435 3.364a6 6 0 0 1 .236 8.236l-1.635 1.636L7.26 3.046a5.986 5.986 0 0 1 4.741 1.483 5.998 5.998 0 0 1 8.242.228z"},[])]);
    }
}
</script>