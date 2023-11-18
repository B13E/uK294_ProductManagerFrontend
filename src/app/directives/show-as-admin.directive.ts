import { ShowAsAdminDirective } from './show-as-admin.directive';
import { ViewContainerRef, TemplateRef } from '@angular/core';

describe('ShowAsAdminDirective', () => {
  let viewContainerRefMock: Partial<ViewContainerRef>;
  let templateRefMock: Partial<TemplateRef<any>>;
  let directive: ShowAsAdminDirective;

  beforeEach(() => {
    // Erstellen von Mocks für die Abhängigkeiten
    viewContainerRefMock = {};
    templateRefMock = {};

    // Erstellen einer Instanz der Direktive mit den Mock-Objekten
    directive = new ShowAsAdminDirective(viewContainerRefMock as ViewContainerRef, templateRefMock as TemplateRef<any>);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});

export class ShowAsAdminDirective {
}
