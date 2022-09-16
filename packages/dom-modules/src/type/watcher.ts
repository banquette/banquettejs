import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { throttle } from "@banquette/utils-misc/throttle";
import { AbstractDomModule } from "../abstract.dom-module";
import { DomModule } from "../decorator/dom-module.decorator";
import { DomModulesScannerService } from "../dom-modules-scanner";

@DomModule('watcher')
export class Watcher extends AbstractDomModule {
    private scanner: DomModulesScannerService;
    private observer: MutationObserver|null ;

    public constructor(@Inject(DomModulesScannerService) scanner: DomModulesScannerService) {
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
