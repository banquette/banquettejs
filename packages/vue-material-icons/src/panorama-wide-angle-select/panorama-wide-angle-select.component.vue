<script>
import { h } from 'vue';

export default {
    name: 'i-material-panorama-wide-angle-select',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        if (this.version === 'round')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 4 20 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 4c-3.97 0-6.85.63-9 1-.55 1.97-1 3.92-1 7 0 3.03.45 5.06 1 7 2.15.37 4.98 1 9 1 3.97 0 6.85-.63 9-1 .57-2.02 1-3.99 1-7 0-3.03-.45-5.06-1-7-2.15-.37-4.98-1-9-1z"},[])]);
if (this.version === 'outlined' || this.version === 'sharp' || this.version === 'twotone')
    return h('svg',{"viewBox":this.crop !== undefined ? '2 4 20 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 4c-3.97 0-6.85.63-9 1-.55 1.97-1 3.92-1 7 0 3.03.45 5.05 1 7 2.15.37 4.98 1 9 1 3.97 0 6.85-.63 9-1 .57-2.02 1-3.99 1-7 0-3.03-.45-5.05-1-7-2.15-.37-4.98-1-9-1z"},[])]);
return h('svg',{"viewBox":this.crop !== undefined ? '2 4 20 16' : '0 0 24 24',"width":this.width,"height":this.height || (!this.width ? '1em' : null),"fill":this.color || 'currentColor'},[h('path',{d:"M12 4c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"},[])]);
    }
}
</script>