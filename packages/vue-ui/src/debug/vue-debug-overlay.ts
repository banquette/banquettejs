import { areEqual } from "@banquette/utils-misc";
import { isServer } from "@banquette/utils-misc";
import { throttle } from "@banquette/utils-misc";
import { isUndefined } from "@banquette/utils-type";
import { VoidCallback } from "@banquette/utils-type";

interface DebugElementInterface {
    uid: number;
    el: HTMLElement;
    overlay: HTMLElement;
    oldStyles: Record<string, string>;
    unsubscribe: VoidCallback;
}

interface ElementPositionInterface {
    left: number;
    top: number;
}

type VueComponentElement = HTMLElement & {__vueParentComponent: {uid: number}};

class VueDebugOverlay {
    private elements: DebugElementInterface[] = [];
    private pressedKeys: string[] = [];
    private allHighlighted: boolean = false;
    private observer: MutationObserver|null = null;
    private menuElement!: HTMLElement;
    private enabled: boolean = false;

    public constructor() {
        if (!isServer()) {
            this.menuElement = this.createMenu();
            this.listenKeyboardEvents();
        }
    }

    /**
     * Scan the whole DOM to find Vue components.
     */
    public scan(): void {
        if (isServer()) {
            return ;
        }
        const elements: Record<number, DebugElementInterface> = {};
        document.querySelectorAll('*').forEach((node: Element & {__vueParentComponent?: {uid: number}}) => {
            if (VueDebugOverlay.IsVueComponent(node)) {
                const uid = node.__vueParentComponent.uid;
                if (!isUndefined(elements[uid]) && elements[uid].el.contains(node)) {
                    return ;
                }
                for (const item of this.elements) {
                    if (item.el === node) {
                        elements[uid] = item;
                        return ;
                    }
                }
                elements[uid] = this.createDebugElement(node);
            }
        });
        const elementsArray = Object.values(elements);
        for (let i = 0; i < this.elements.length; ++i) {
            let j;
            const existingElement = this.elements[i];
            for (j = 0; j < elementsArray.length; ++j) {
                if (elementsArray[j].el === existingElement.el) {
                    break ;
                }
            }
            if (j >= elementsArray.length) {
                --i;
                this.removeDebugElement(existingElement);
            }
        }
        this.elements = elementsArray;
        if (this.allHighlighted) {
            this.showAllHighlights();
        }
    }

    /**
     * Scan and observe the DOM for changes.
     */
    public observe(): void {
        if (isServer()) {
            return ;
        }
        this.observer = new MutationObserver(throttle(() => {
            this.scan();
        }, 500));
        this.observer.observe(document, {
            subtree: true,
            attributes: false,
            childList: true
        })
    }

    public unobserve(): void {
        if (this.observer !== null) {
            this.observer.disconnect();
            this.observer = null;
        }
    }

    /**
     * Create a DebugElementInterface.
     */
    private createDebugElement(element: VueComponentElement): DebugElementInterface {
        const onMouseEnter = () => {
            if (!this.allHighlighted && this.enabled) {
                this.showHighlight(debugElement);
            }
        };
        const onMouseLeave = () => {
            if (!this.allHighlighted && this.enabled) {
                this.hideHighlight(debugElement);
            }
        };
        element.addEventListener('mouseenter', onMouseEnter);
        element.addEventListener('mouseleave', onMouseLeave);
        const debugElement: DebugElementInterface = {
            uid: element.__vueParentComponent.uid,
            el: element,
            overlay: this.createOverlay(),
            oldStyles: {
                outline: element.style.outline
            },
            unsubscribe: () => {
                document.removeEventListener('mouseenter', onMouseEnter);
                document.removeEventListener('mouseleave', onMouseLeave);
            }
        };
        return debugElement;
    }

    /**
     * Remove a debug element.
     */
    private removeDebugElement(element: DebugElementInterface): void {
        const pos = this.elements.indexOf(element);
        this.hideHighlight(element);
        element.overlay.remove();
        if (pos > -1) {
            this.elements.splice(pos, 1);
        }
    }

    /**
     * Show the highlight of an element.
     */
    private showHighlight(element: DebugElementInterface): void {
        const pos = VueDebugOverlay.CalculateOffset(element.el);
        if (!document.body.contains(element.overlay) || parseInt(element.overlay.style.top, 10) !== pos.top || parseInt(element.overlay.style.left, 10) !== pos.left) {
            element.el.style.outline = '2px solid rgba(255, 0, 0, 0.4)';
            element.overlay.innerHTML = String(element.uid);
            element.overlay.style.top = pos.top + 'px';
            element.overlay.style.left = pos.left + 'px';
            document.body.append(element.overlay);
        }
    }

    /**
     * Hide the highlight of an element.
     */
    private hideHighlight(element: DebugElementInterface): void {
        element.el.style.outline = element.oldStyles.outline;
        element.overlay.remove();
    }

    /**
     * Highlights all elements.
     */
    private showAllHighlights(): void {
        for (const element of this.elements) {
            this.showHighlight(element);
        }
        this.allHighlighted = true;
    }

    /**
     * Hide all highlights.
     */
    private hideAllHighlights(): void {
        for (const element of this.elements) {
            this.hideHighlight(element);
        }
        this.allHighlighted = false;
    }

    /**
     * Create an overlay element.
     */
    private createOverlay(): HTMLElement {
        const overlayElement: any = document.createElement('div');
        overlayElement.style.position = 'absolute';
        overlayElement.style.zIndex = 1000;
        overlayElement.style.background = '#676767';
        overlayElement.style.borderRadius = '4px';
        overlayElement.style.color = '#fff';
        overlayElement.style.padding = '4px 8px';
        overlayElement.style.fontSize = '8px';
        overlayElement.style.pointerEvents = 'none';
        return overlayElement;
    }

    /**
     * Create the floating menu.
     */
    private createMenu(): HTMLElement {
        const menuElement: any = document.createElement('div');
        menuElement.style.position = 'fixed';
        menuElement.style.display = 'flex';
        menuElement.style.top = '0';
        menuElement.style.right = '0';
        menuElement.style.zIndex = 1000;
        menuElement.style.background = '#e91e63';
        menuElement.style.color = '#fff';
        menuElement.style.padding = '6px 10px';
        menuElement.style.fontSize = '9px';

        const toggleOverlaysLink = document.createElement('a');
        toggleOverlaysLink.innerHTML = 'Show overlays';
        toggleOverlaysLink.style.cursor = 'pointer';

        toggleOverlaysLink.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            if (this.allHighlighted) {
                toggleOverlaysLink.innerHTML = 'Show overlays';
                this.hideAllHighlights();
            } else {
                toggleOverlaysLink.innerHTML = 'Hide overlays';
                this.showAllHighlights();
            }
        });
        menuElement.append(toggleOverlaysLink);
        return menuElement;
    }

    /**
     * Check what keys are pressed and apply the corresponding action.
     */
    private applyKeyboardActions(): boolean {
        if (areEqual(this.pressedKeys, ['Control', 'D', 'Shift'])) {
            if (!this.enabled) {
                document.body.append(this.menuElement);
                this.enabled = true;
            } else {
                this.enabled = false;
                this.menuElement.remove();
                this.hideAllHighlights();
            }
            return true;
        }
        return false;
    }

    /**
     * Listen to keyboard events.
     */
    private listenKeyboardEvents(): void {
        document.body.addEventListener('keydown', (event: KeyboardEvent) => {
            if (this.pressedKeys.indexOf(event.key) < 0) {
                this.pressedKeys.push(event.key);
                this.pressedKeys.sort();
            }
            if (this.applyKeyboardActions()) {
                event.preventDefault();
            }
        });
        document.body.addEventListener('keyup', (event: KeyboardEvent) => {
            for (let i = 0; i < this.pressedKeys.length; ++i) {
                if (this.pressedKeys[i] === event.key) {
                    this.pressedKeys.splice(i--, 1);
                }
            }
        });
        window.onblur = () => {
            this.pressedKeys = [];
        };
    }

    /**
     * Calculate the absolute position of an element in the document.
     */
    private static CalculateOffset(element: HTMLElement): ElementPositionInterface {
        let top = 0;
        let left = 0;
        let current: Element|null = element;
        while (current) {
            if (current instanceof HTMLElement) {
                top += current.offsetTop || 0;
                left += current.offsetLeft || 0;
                current = current.offsetParent;
            } else {
                break ;
            }
        }
        return {top: top, left: left};
    }

    /**
     * Test if a DOM element hosts a Vue component.
     */
    private static IsVueComponent(node: Element): node is VueComponentElement {
        return node instanceof HTMLElement && !isUndefined((node as any).__vueParentComponent);
    }
}

const debugOverlay = new VueDebugOverlay();
debugOverlay.observe();
