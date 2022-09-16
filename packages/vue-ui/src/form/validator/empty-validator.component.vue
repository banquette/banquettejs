<script lang="ts">
import { Empty } from "@banquette/validation/type/empty";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-empty', template: false})
export default class ValidateEmptyComponent extends ValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Empty({message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
