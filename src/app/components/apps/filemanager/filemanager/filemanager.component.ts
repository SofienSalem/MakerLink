import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IContactUs } from 'src/app/_interfaces/IContactUs';
import { ContactService } from 'src/app/_services/_Apps/contact.service';
import { content } from 'src/app/shared/routes/routes copy';

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class ContactUsComponent implements OnInit {

  contacts: IContactUs[] = []; // Stocke les contacts ici
  archivedContacts: IContactUs[] = []; // Contacts archivés
  searchEmail: string = '';



constructor(private modalService: NgbModal,
            private contactService: ContactService
  ) { }

ngOnInit(): void {
  this.fetchAllContacts();

}
fetchAllContacts() {
  this.contactService.getAllContactUs().subscribe({
    next: (data) => {
      this.contacts = data.filter(contact => !contact.isArchived);
      this.archivedContacts = data.filter(contact => contact.isArchived);
    },
    error: (error) => {
      console.error('There was an error!', error);
    }
  });
}

archiveContact(id: number) {
  this.contactService.archiveContactUs(id).subscribe({
    next: () => {
      this.fetchAllContacts(); // Re-fetch après archivage pour mettre à jour les listes
    },
    error: (error) => console.error('Error archiving contact', error)
  });
}

filterContacts() {
  if (!this.searchEmail) {
    // Si la recherche est vide, afficher tous les contacts
    this.fetchAllContacts(); // Cela réinitialisera les contacts à partir des données du serveur
  } else {
    // Filtrez les contacts non archivés pour conserver la possibilité de supprimer le filtre
    this.contacts = this.contacts.filter(contact =>
      contact.email?.toLowerCase().includes(this.searchEmail.toLowerCase())
    );
  }
}





}





