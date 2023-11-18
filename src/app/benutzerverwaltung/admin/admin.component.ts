import { Component, OnInit } from '@angular/core';
import { UserControllerService } from '../../openapi-client/api/userController.service';
import { UserShowDto } from '../../openapi-client/model/userShowDto';

// Komponente für die Verwaltung von Benutzerrollen als Administrator.
@Component({
    selector: 'pm-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    // Liste der Benutzer, die von der API abgerufen werden
    users: UserShowDto[] = [];

    constructor(private userService: UserControllerService) {}

    // Lädt die Benutzerliste beim Initialisieren der Komponente
    ngOnInit(): void {
        this.loadUsers();
    }

    // Ruft alle Benutzer von der API ab und weist sie der Benutzerliste zu
    loadUsers(): void {
        this.userService.getAllUsers().subscribe((users: UserShowDto[]) => {
            this.users = users;
        });
    }

    // Befördert einen Benutzer zum Administrator und lädt die Liste erneut
    promoteToAdmin(user: UserShowDto): void {}
    /*
        this.userService.promoteUserToAdmin(user.id).subscribe(() => {
            alert(`Benutzer ${user.name} wurde zum Administrator befördert.`);
            this.loadUsers();
        });
    }

     */
}
