<script>
import { h } from 'vue';

export default {
    name: 'i-material-r-mobiledata',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 7 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.8 7.2 9 10H7L5.87 7.33H4V10H2V2h7v5.2H7.8zM7 4H4v1.33h3V4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 7 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7.8 7.2.65 1.52A.915.915 0 0 1 7.61 10c-.37 0-.7-.22-.85-.56l-.89-2.11H4v1.75c0 .51-.41.92-.92.92h-.16C2.41 10 2 9.59 2 9.08V3c0-.55.45-1 1-1h4c1.1 0 2 .9 2 2v1.33c0 .8-.53 1.54-1.2 1.87zM7 4H4v1.33h3V4z"},[])]);
return h('svg',{"viewBox":c ? '2 2 7 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.8 7.2 9 10H7L5.87 7.33H4V10H2V2h5c1.13 0 2 .87 2 2v1.33c0 .8-.53 1.54-1.2 1.87zM7 4H4v1.33h3V4z"},[])]);
    }
}
</script>