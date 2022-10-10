import { Choice } from "@banquette/ui/form/select/choice";
import { Vue } from "@banquette/vue-typescript/vue";
export default class GroupComponent extends Vue {
    label: string | null;
    visibleChoices: Choice[];
    updateChoice(choice: Choice): void;
}
