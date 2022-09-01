<script>
import { h } from 'vue';

export default {
    name: 'i-material-priority-high',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    return h('svg',{"viewBox":c ? '10 3 4 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"19",r:"2"},[]),h('path',{d:"M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"},[])]);
return h('svg',{"viewBox":c ? '10 3 4 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"19",r:"2"},[]),h('path',{d:"M10 3h4v12h-4z"},[])]);
    }
}
</script>