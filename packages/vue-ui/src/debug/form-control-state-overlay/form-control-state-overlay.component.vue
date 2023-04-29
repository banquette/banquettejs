<style src="./form-control-state-overlay.component.css" scoped></style>
<template src="./form-control-state-overlay.component.html" ></template>
<script lang="ts">
import { areEqual } from "@banquette/utils-misc";
import { isArray, isBoolean, isFunction, isObject, isUndefined, AnyObject } from "@banquette/utils-type";
import { IMaterialBugReport, IMaterialClose } from "@banquette/vue-material-icons";
import { Component, Computed, Expose, Prop, TemplateRef, Vue } from "@banquette/vue-typescript";
import { StickToDirective } from "../../misc";

@Component({
    name: 'bt-form-control-state-overlay',
    components: [IMaterialBugReport, IMaterialClose],
    directives: [StickToDirective]
})
export default class BtFormControlStateOverlay extends Vue {
    /**
     * View data of the control to observe states of.
     */
    @Prop({type: Object, required: true}) public v!: any;

    @Expose() public visible: boolean = false;
    @Computed() public get overlayOptions(): any {
        return {
            target: this.target,
            placement: 'right',
            popper: {
                modifiers: {
                    name: 'offset',
                    options: {
                        offset: [0, 5]
                    }
                }
            }
        };
    }

    private knownKeys: string[] = [];
    private _groups: Array<{name: string, values: AnyObject}> = [];

    @Computed() public get groups(): any {
        // Check the keys of the first 2 levels
        const keys: string[] = Object.keys(this.v).reduce((acc: string[], k: string) => {
            acc.push(`${k}:${typeof(this.v[k])}`);
            if (isObject(this.v[k])) {
                return acc.concat(Object.keys(this.v[k]).map((i: string) => `${k}.${i}:${typeof(this.v[k][i])}`));
            }
            return acc;
        }, [] as string[]).sort();

        // If there is no change we don't need to do anything.
        if (areEqual(keys, this.knownKeys)) {
            return this._groups;
        }
        const defaultGroupValues: AnyObject = {};
        this._groups = [];
        for (const key of Object.keys(this.v)) {
            const v: any = this.v[key];
            let shouldBeASeparateGroup = isObject(v) && !isArray(v);

            if (shouldBeASeparateGroup) {
                const newGroup = {name: key, values: Object.keys(v).sort((a: string, b: string) => {
                        // Order by type + alpha
                        const typesIncrementMap: any = {
                            'string': 0,
                            'number': 1000,
                            'bigint': 1000,
                            'boolean': 2000,
                            'object': 3000,
                            'symbol': 4000,
                            'undefined': 5000
                        };
                        const av = typesIncrementMap[typeof(v[a])] + a.localeCompare(b) + 1;
                        const bv = typesIncrementMap[typeof(v[b])] + b.localeCompare(a) + 1;
                        return av - bv;
                    }).reduce(
                        (obj: any, subKey: string) => {
                            this.createValueProxy(obj, [key, subKey]);
                            return obj;
                        }, {}
                    )};
                if (Object.keys(newGroup.values).length > 0) {
                    this._groups.push(newGroup);
                }
            } else {
                this.createValueProxy(defaultGroupValues, [key]);
            }
        }
        this._groups.sort((a, b) => a.name.localeCompare(b.name));
        if (Object.keys(defaultGroupValues).length > 0) {
            this._groups.push({name: 'Type specific', values: defaultGroupValues});
        }
        this.knownKeys = keys;
        return this._groups;
    }

    @TemplateRef('target') public target!: Element;

    @Expose() public toggle(): void {
        this.visible = !this.visible;
    }

    @Expose() public hide(): void {
        this.visible = false;
    }

    @Expose() public toggleValueDetail(value: any): void {
        value.fullValueVisible = !value.fullValueVisible;
        this.$forceUpdate();
    }

    private createValueProxy(target: any, path: string[]): void {
        const getValue = (): any => {
            let obj: any = this.v;
            for (let i = 0; i < path.length - 1; ++i) {
                if (isObject(obj)) {
                    obj = obj[path[i]];
                } else {
                    return undefined;
                }
            }
            return obj[path[path.length - 1]];
        };
        if (isFunction(getValue())) {
            return ;
        }
        const obj: any = {
            name: path[path.length - 1],
            rawValue: undefined,
            shortValue: undefined,
            fullValue: undefined,
            fullValueVisible: false,
            isBoolean: false
        };
        Object.defineProperty(target, path[path.length - 1], {
            configurable: true,
            enumerable: true,
            get: () => {
                obj.rawValue = getValue();
                const normalized = this.normalizeValue(obj.rawValue);
                obj.shortValue = normalized.length > 50 ? (normalized.substring(0, 50) + ' [...]') : normalized;
                obj.fullValue = normalized.length > 50 ? normalized : null;
                obj.isBoolean = isBoolean(obj.rawValue);
                return obj;
            }
        });
    }

    private normalizeValue(value: any): string {
        if (isUndefined(value)) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (isObject(value)) {
            return JSON.stringify(value, null, 4);
        }
        return String(value);
    }
}
</script>
