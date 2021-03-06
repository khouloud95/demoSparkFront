import { Component, OnInit } from '@angular/core';
import { Contact } from 'model/model.contact';
import { ContactService } from 'app/services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:ContactService) { }

  ngOnInit() {
  }
  onSaveContact(dataForm)
  {this.contactService.saveContact(dataForm)
    .subscribe(data=>{
    console.log(data)  
    },err=> {console.log(JSON.parse(err._body).message);})
    
  }

}
