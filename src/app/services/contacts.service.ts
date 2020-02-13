import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Contact } from "model/model.contact";

@Injectable()

export class ContactService{
constructor (public http:Http) {

}
getContacts(motCle:string,page:number,size:number) {
    return this.http.get( "http://localhost:8083/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
    .map(resp=>resp.json());
    
    }
    getContact(id:number) {
        return this.http.get(" http://localhost:8083/contacts/"+id)
        .map(resp=>resp.json());
        
        }

saveContact(contact:Contact) {
    return this.http.post( "http://localhost:8083/contacts",contact)
    .map(resp=>resp.json()); // on peut ne fait pas . json car cest void , si nn on la formate en json
        
        }
    

updateContact(contact:Contact) {
     return this.http.put( "http://localhost:8083/contacts/"+contact.id,contact)
      .map(resp=>resp.json()); // on peut ne fait pas . json car cest void , si nn on la formate en json
                
          }
deleteContact(id:number) {
    return this.http.delete( "http://localhost:8083/contacts/"+id)
      .map(resp=>resp.json()); // on peut ne fait pas . json car cest void , si nn on la formate en json
                       
                 }
        

}