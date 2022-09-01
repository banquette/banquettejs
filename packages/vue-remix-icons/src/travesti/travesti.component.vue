<script>
import { h } from 'vue';

export default {
    name: 'i-remix-travesti',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '0.77 1.77 20.23 20.23' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.95 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075 2.186 9.55.772 8.136l6.364-6.364L8.55 3.186 6.075 5.661l2.876 2.876zM13.5 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"},[])]);
return h('svg',{"viewBox":c ? '0.77 1.77 20.23 20.23' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.537 9.95 4.66 7.076 2.186 9.55.772 8.136l6.364-6.364L8.55 3.186 6.075 5.661l2.876 2.876A7.5 7.5 0 1 1 7.537 9.95z"},[])]);
    }
}
</script>