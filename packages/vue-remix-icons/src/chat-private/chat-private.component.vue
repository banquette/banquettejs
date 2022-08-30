<script>
import { h } from 'vue';

export default {
    name: 'i-remix-chat-private',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 0 1-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-7.06 11.766l.35.654-.656 2.946 2.948-.654.653.349A7.95 7.95 0 0 0 12 20a8 8 0 0 0 0-16zm0 3a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3zm2 6h-4v1h4v-1zm-2-4c-.552 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 2 20 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 0 1-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 5c-1.598 0-3 1.34-3 3v1H8v5h8v-5h-1v-1a3 3 0 0 0-3-3zm2 6v1h-4v-1h4zm-2-4c.476 0 1 .49 1 1v1h-2v-1c0-.51.487-1 1-1z"},[])]);
    }
}
</script>