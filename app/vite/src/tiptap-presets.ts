import { markRaw } from "vue";
import { BtFormTiptapUnderline, createToolbarItem } from "@banquette/vue-ui";

export const TiptapPresets = markRaw({
    default: {
        toolbars: [
            [
                createToolbarItem(BtFormTiptapUnderline)
            ]
        ]
    }
});

