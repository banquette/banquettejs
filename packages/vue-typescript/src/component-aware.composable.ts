/**
 * If a composable inherit from this class, the host component will automatically be assigned to it.
 * The composable will then be able to access attributes and methods of its host component.
 */
export abstract class ComponentAwareComposable<ComponentType = unknown> {
    /**
     * The host component instance.
     * It is automatically set internally by `vue-typescript`.
     */
    protected component!: ComponentType;
}
