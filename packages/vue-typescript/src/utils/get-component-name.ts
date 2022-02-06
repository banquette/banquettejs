import { anyToComponentMetadata } from "./converters";

/**
 * Try to get the name of a component from an unknown input.
 */
export function getComponentName(input: any): string|null {
    const metadata = anyToComponentMetadata(input);
    return metadata !== null ? metadata.component.name : null;
}
