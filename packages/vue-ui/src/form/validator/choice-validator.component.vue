<script lang="ts">
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { Choice } from "@banquette/validation/type/choice";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-choice', template: false})
export default class ValidateChoiceComponent extends ValidatorComponent {
    @Prop({type: Array, required: true, transform: (value) => ensureArray(value)}) public choices!: any[];

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Choice(this.choices, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
