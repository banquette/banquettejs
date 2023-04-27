<script>
import { h } from 'vue';

export default {
    name: 'i-remix-flask',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    return h('svg',{"viewBox":c ? '3.84 2 16.31 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 2v2h-1v3.243c0 1.158.251 2.301.736 3.352l4.282 9.276A1.5 1.5 0 0 1 18.656 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.282-9.276A7.994 7.994 0 0 0 9 7.243V4H8V2h8zm-2.612 8.001h-2.776c-.104.363-.23.721-.374 1.071l-.158.361L6.125 20h11.749l-3.954-8.567a9.978 9.978 0 0 1-.532-1.432zM11 7.243c0 .253-.01.506-.029.758h2.058a8.777 8.777 0 0 1-.021-.364L13 7.243V4h-2v3.243z"},[])]);
return h('svg',{"viewBox":c ? '3.84 2 16.31 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 2v2h-1v3.243c0 1.158.251 2.301.736 3.352l4.282 9.276A1.5 1.5 0 0 1 18.656 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.282-9.276A7.994 7.994 0 0 0 9 7.243V4H8V2h8zm-3 2h-2v4h2V4z"},[])]);
    }
}
</script>