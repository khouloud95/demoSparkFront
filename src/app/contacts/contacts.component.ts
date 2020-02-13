import { Component, OnInit,} from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ContactService } from 'app/services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from 'model/model.contact';
@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   pageContacts:any; 
   motCle:string="";
   currentPage:number=0;
   size:number=5;
   pages:Array<number>;
constructor(private http:Http , public contactService:ContactService , public router:Router) {}
ngOnInit() {

}
doSearch()
{
    this.contactService.getContacts(this.motCle,this.currentPage,this.size)
    .subscribe(data=> {
        this.pageContacts=data;
        this.pages=new Array(data.totalPages);
    
    },err=>console.log(err));
    }
chercher()
{
this.doSearch();
}
gotoPage(i:number)
{
    this.currentPage=i;
    this.doSearch();
} 

onEditContact(id:number)
{
this.router.navigate(['editContact',id]);
}
onDeleteContact(c:Contact){

let confirm=window.confirm('Est vous sûre de vouloir supprimer');
if(confirm==true){this.contactService.deleteContact(c.id)

    .subscribe(data=> {
        this.pageContacts.content.splice(
    
            this.pageContacts.content.indexOf(c),1
            
        );
    },err=>{console.log(err);})
    }

}

    

}
