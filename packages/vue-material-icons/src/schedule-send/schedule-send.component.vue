<script>
import { h } from 'vue';

export default {
    name: 'i-material-schedule-send',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 4 19 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"m5 10.5 6 1.5-6 1.5v3.49l5.39-2.27c.6-1.73 1.86-3.16 3.48-3.97L5 7.01v3.49z","opacity":"0.3"},[]),h('path',{d:"m11 12-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z"},[]),h('path',{d:"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71z"},[])]);
if (this.version === 'sharp')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 4 19 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.86 3.14-7 7-7z"},[]),h('path',{d:"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71z"},[])]);
if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 4.5 19 17.5' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 10c.1 0 .19.01.28.01L4.39 4.58C3.73 4.31 3 4.79 3 5.51v3.71c0 .46.31.86.76.97L11 12l-7.24 1.81c-.45.11-.76.51-.76.97v3.71c0 .72.73 1.2 1.39.92L10 17.05V17c0-3.86 3.14-7 7-7z"},[]),h('path',{d:"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.29 7-1.65-1.65a.51.51 0 0 1-.15-.35v-2.5c0-.28.22-.5.5-.5s.5.22.5.5v2.29l1.5 1.5c.2.2.2.51 0 .71-.19.2-.5.2-.7 0z"},[])]);
if (this.version === 'outlined')
    return h('svg',{"viewBox":this.crop !== undefined ? '3 4 19 18' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71z"},[]),h('path',{d:"m11 12-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 3 21 20' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M16.5 12.5H15v4l3 2 .75-1.23-2.25-1.52V12.5zM16 9 2 3v7l9 2-9 2v7l7.27-3.11C10.09 20.83 12.79 23 16 23c3.86 0 7-3.14 7-7s-3.14-7-7-7zm0 12c-2.75 0-4.98-2.22-5-4.97v-.07a5.008 5.008 0 0 1 5-4.97c2.76 0 5 2.24 5 5S18.76 21 16 21z"},[])]);
    }
}
</script>