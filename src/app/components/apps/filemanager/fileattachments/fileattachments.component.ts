import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IContactUs } from 'src/app/_interfaces/IContactUs';
import { ContactService } from 'src/app/_services/_Apps/contact.service';

@Component({
  selector: 'app-fileattachments',
  templateUrl: './fileattachments.component.html',
  styleUrls: ['./fileattachments.component.scss']
})
export class ArchiveComponent implements OnInit {

  searchEmail: string = '';


  contacts: IContactUs[] = []; // Stocke les contacts ici
  archivedContacts: IContactUs[] = []; // Contacts archivés
fullArchivedContacts: IContactUs[] = [];


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
      this.archivedContacts = this.fullArchivedContacts = data.filter(contact => contact.isArchived);
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


  restoreContact(id: number) {
    this.contactService.restoreContactUs(id).subscribe({
      next: () => {
        this.fetchAllContacts(); // Re-fetch après restauration pour mettre à jour les listes
      },
      error: (error) => console.error('Error restoring contact', error)
    });
  }
  filterArchivedContacts() {
    if (!this.searchEmail) {
      // Utilisez la liste complète stockée lorsque la recherche est vide
      this.archivedContacts = [...this.fullArchivedContacts];
    } else {
      // Filtrez à partir de la liste complète pour conserver la possibilité de supprimer le filtre
      this.archivedContacts = this.fullArchivedContacts.filter(contact => 
        contact.email?.toLowerCase().includes(this.searchEmail.toLowerCase())
      );
    }
  }








}