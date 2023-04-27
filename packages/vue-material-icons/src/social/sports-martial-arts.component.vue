<script>
import { h } from 'vue';

export default {
    name: 'i-material-sports-martial-arts',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '3 1.42 17.64 20.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.06 2.6 11.6 8.7l-1.21-1.04 2.48-1.43a1 1 0 0 0 .21-1.57l-2.95-2.95a.996.996 0 1 0-1.41 1.41l2.03 2.03-5.4 3.11a.99.99 0 0 0-.46.6l-.96 3.49c-.07.26-.04.53.1.77l1.74 3.02c.28.48.89.64 1.37.37.48-.28.64-.89.37-1.37l-1.53-2.66.36-1.29L9.5 13l.44 8c.03.56.49 1 1.05 1s1.02-.44 1.05-1l.45-9 7.87-7.96a.972.972 0 0 0-1.3-1.44z"},[]),h('circle',{"cx":"5","cy":"5",r:"2"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z"},[]),h('circle',{"cx":"5","cy":"5",r:"2"},[])]);
    }
}
</script>