import { Inject } from "@banquette/dependency-injection";
import { throttle } from "@banquette/utils-misc";
import { DomModule } from "../decorator/dom-module.decorator";
import { AbstractDomModule } from "../abstract.dom-module";
import { DomModulesScanner } from "../dom-modules-scanner";

@DomModule('watcher')
export class Watcher extends AbstractDomModule {
    private scanner: DomModulesScanner;
    private observer: MutationObserver|null ;

    public constructor(@Inject(DomModulesScanner) scanner: DomModulesScanner) {
        super();
        this.scanner = scanner;
        this.observer = null;
    }

    /**
     * @inheritDoc
     */
    protected bind(): any {
        super.bind();
        this.observer = new MutationObserver(throttle(() => {
            this.scanner.scan();
        }, 500));
        this.observer.observe(this.element, {
            childList: true,
            attributes: false,
            subtree: true
        });
    }

    /**
     * @inheritDoc
     */
    public unbind(): void {
        super.unbind();
        if (this.observer !== null) {
            this.observer.disconnect();
        }
    }
}
