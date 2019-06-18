import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  courses:any[];
  subscription;

  constructor(db: AngularFireDatabase){

    //db.list('/courses');

   this.subscription = db.list('/courses').valueChanges()
    .subscribe(courses=>{   //error
      this.courses=courses;
      console.log(this.courses);

    });

   }


   ngOnDestroy(){

   }
}
