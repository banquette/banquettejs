<script>
import { h } from 'vue';

export default {
    name: 'i-remix-medal-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'line')
    return h('svg',{"viewBox":this.crop !== undefined ? '4.39 2 15.22 20.97' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 8.5 2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zm0 5.207-.739 1.777-1.916.153 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.459-1.252-1.915-.153L12 13.707zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4.39 2 15.22 20.97' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m12 8.5 2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z"},[])]);
    }
}
</script>