<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialEmojiPeople = /* @__PURE__ */ ((_) => {
    return r('emoji-people', {
        name: 'i-material-emoji-people',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4.08 2 15.86 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"4",r:"2"},[]),h('path',{d:"M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.02 5.02 0 0 1-4.92-4.15A1 1 0 0 0 5.09 2c-.61 0-1.09.54-1 1.14A7.04 7.04 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16.36 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"4",r:"2"},[]),h('path',{d:"M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41z"},[])]);
        }
    });
})();

export default IMaterialEmojiPeople;
</script>