<script>
import { h } from 'vue';

export default {
    name: 'i-material-shuffle',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '4 4 16 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M20 4h-5.5l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5zM5.41 4 4 5.41l5.17 5.17 1.42-1.41zM20 20v-5.5l-2.04 2.04-3.13-3.13-1.41 1.41 3.13 3.13L14.5 20z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '4.41 4 15.59 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M10.59 9.17 6.12 4.7a.996.996 0 1 0-1.41 1.41l4.46 4.46 1.42-1.4zm4.76-4.32 1.19 1.19L4.7 17.88a.996.996 0 1 0 1.41 1.41L17.96 7.46l1.19 1.19a.5.5 0 0 0 .85-.36V4.5c0-.28-.22-.5-.5-.5h-3.79a.5.5 0 0 0-.36.85zm-.52 8.56-1.41 1.41 3.13 3.13-1.2 1.2a.5.5 0 0 0 .36.85h3.79c.28 0 .5-.22.5-.5v-3.79c0-.45-.54-.67-.85-.35l-1.19 1.19-3.13-3.14z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '4 4 16 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"},[])]);
    }
}
</script>