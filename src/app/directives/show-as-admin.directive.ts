import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {jwtDecode} from "jwt-decode";

@Directive({
  selector: '[pmShowAsAdmin]',
  standalone: true
})
export class ShowAsAdminDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      const user = jwtDecode(localStorage.getItem("ACCESS_TOKEN")!);
      if ((user as any).roles.includes("admin")) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    }
  }
}
