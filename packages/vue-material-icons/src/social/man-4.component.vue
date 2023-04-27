<script>
import { h } from 'vue';

export default {
    name: 'i-material-man-4',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    return h('svg',{"viewBox":c ? '7.96 2 8.08 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.96 7 10 22h4l2.04-15z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '8.25 2 7.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L9.82 20.7c.1.74.74 1.3 1.49 1.3h1.38a1.5 1.5 0 0 0 1.49-1.3l1.56-11.44C15.89 8.07 14.96 7 13.75 7z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
return h('svg',{"viewBox":c ? '8.25 2 7.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L10 22h4l1.73-12.74C15.89 8.07 14.96 7 13.75 7z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
    }
}
</script>