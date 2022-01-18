import { trim } from "@banquette/utils-string/format/trim";

export function splitVariantString(input: string): string[] {
    return input.split(' ').reduce((acc: string[], item: string) => {
        item = trim(item);
        if (item.length) {
            acc.push(item);
        }
        return acc;
    }, []).sort() as string[];
}
