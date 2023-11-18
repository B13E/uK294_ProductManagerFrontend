import { ShowAsAdminDirective } from './show-as-admin.directive';

// Testklasse für ShowAsAdminDirective
describe('ShowAsAdminDirective', () => {
  // Testfall zum Überprüfen der Instanziierung der Direktive
  it('should create an instance', () => {
    // Erzeugt eine Instanz der ShowAsAdminDirective
    const directive = new ShowAsAdminDirective();

    // Überprüft, ob die Direktive korrekt instanziiert wurde
    expect(directive).toBeTruthy();
  });
});
