import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public listContacts: Contact[]

  constructor(private contactService: ContactService) { 
    this.listContacts = []
  }

  ngOnInit(): void {
    if(this.contactService.listContacts.length > 0){
      this.listContacts = this.contactService.listContacts
    }else{
      this.contactService.getData('assets/data/contacts.json').subscribe(list => {
        this.listContacts = list
      })
    }
  }

}
