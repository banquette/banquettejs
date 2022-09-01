<script>
import { h } from 'vue';

export default {
    name: 'i-material-html',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 9 24 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2V9zm15 0H12v6h1.5v-4.5h1V14H16v-3.51h1V15h1.5V9zM11 9H6v1.5h1.75V15h1.5v-4.5H11V9zm13 6v-1.5h-2.5V9H20v6h4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 9 24 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 15c-.55 0-1-.45-1-1V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H21zm-5-4.51h1v3.76c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1v2.75c0 .41.34.75.75.75s.75-.34.75-.75v-2.76zM5 9.75C5 9.34 4.66 9 4.25 9s-.75.34-.75.75V11h-2V9.75c0-.41-.34-.75-.75-.75S0 9.34 0 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5zm5.25.75c.41 0 .75-.34.75-.75S10.66 9 10.25 9h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h1v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1z"},[])]);
return h('svg',{"viewBox":c ? '0 9 24 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2V9zm14 0H13c-.55 0-1 .45-1 1v5h1.5v-4.5h1V14H16v-3.51h1V15h1.5v-5c0-.55-.45-1-1-1zM11 9H6v1.5h1.75V15h1.5v-4.5H11V9zm13 6v-1.5h-2.5V9H20v6h4z"},[])]);
    }
}
</script>