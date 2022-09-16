<script lang="ts">
import { SameAs } from "@banquette/validation/type/same-as";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-same-as', template: false})
export default class ValidateSameAsComponent extends ValidatorComponent {
    @Prop({type: String, required: true}) public path!: string;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return SameAs(this.path, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
