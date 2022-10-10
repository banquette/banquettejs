/**
 * Make a clone of an object based on mask that describes what properties to clone or to ignore.
 *
 * The mask must follow the structure of the object to clone with few exceptions.
 * For example :
 *
 * ```
 * const source = {
 *     docks: {
 *         top: {
 *             visible: false,
 *             left: {
 *                 id: 1
 *                 tabs: [
 *                     {id: 1, label: 'First tab'},
 *                     {id: 2, label: 'Second tab'}
 *                 ]
 *             },
 *             right: {
 *                 id: 2,
 *                 tabs: [
 *                     {id: 3, label: 'Third tab'},
 *                     {id: 4, label: 'Fourth tab'}
 *                 ]
 *             }
 *         },
 *         left: {
 *             [...]
 *         }
 *     }
 * };
 *
 * const mask = {
 *     docks: {
 *         '*': {
 *             visible: true,
 *             left: {
 *                 tabs: {
 *                     '*': {
 *                         id: true
 *                     }
 *                 }
 *             },
 *             right: {
 *                 tabs: true
 *             }
 *         }
 *     }
 * };
 * ```
 *
 * For each level, you can define which property to copy by adding a key with their name.
 * Or you can put '*' to tell to iterate the object or array to copy all the keys.
 * Set "true" as value in the mask simply ask to copy everything from there.
 *
 * In the example above, the resulting clone will be:
 *
 * ```
 * {
 *     docks: {
 *         top: {
 *             visible: false,
 *             left: {
 *                 tabs: [
 *                     {id: 1},
 *                     {id: 2}
 *                 ]
 *             },
 *             right: {
 *                 tabs: [
 *                     {id: 3, label: 'Third tab'},
 *                     {id: 4, label: 'Fourth tab'}
 *                 ]
 *             }
 *         },
 *         left: {
 *             [...]
 *         }
 *     }
 * }
 * ```
 */
export declare function cloneObjectWithMask(source: any, mask: any): object;
