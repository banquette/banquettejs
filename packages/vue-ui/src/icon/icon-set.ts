import { isUndefined, isArray, isString } from "@banquette/utils-type";
import { ComponentPublicInstance } from "vue";

const Instances: Record<string, IconSet> = {};

export class IconSet {
    private icons: Record<string, ComponentPublicInstance> = {};

    public constructor(public readonly name: string) {
    }

    public append(icons: any[] | Record<string, any>): void {
        if (isArray(icons)) {
            icons = icons.reduce((obj: Record<string, any>, item: any) => {
                if (isString(item.name)) {
                    obj[item.name] = item;
                } else {
                    console.warn('Each icon must have a "name" attribute if registered as an array.');
                }
                return obj;
            }, {});
        }
        for (const name of Object.keys(icons)) {
            const shortName = this.removeSetInName(name);
            if (!isUndefined(this.icons[shortName]) && this.icons[shortName] !== icons[name]) {
                console.warn(`Icon "${name}" has been registered multiple times.`);
            }
            this.icons[shortName] = icons[name];
        }
    }

    public get(iconName: string): ComponentPublicInstance|null {
        return this.icons[iconName] || null;
    }

    private removeSetInName(name: string): string {
        return name.replace(`i-${this.name}-`, '');
    }

    /**
     * Append icons to an icon set, creating it if necessary.
     */
    public static Append(name: string, icons: any[] | Record<string, any>): void {
        IconSet.Get(name).append(icons);
    }

    /**
     * Get or create an icon set.
     */
    public static Get(name: string): IconSet {
        if (isUndefined(Instances[name])) {
            Instances[name] = new IconSet(name);
        }
        return Instances[name];
    }
}
