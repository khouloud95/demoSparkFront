import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   infos= {
       name:'nessrine',
       email:'nes@gmail.tn'
   }
constructor() {}
ngOnInit() {

}
}
