import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  course$;
  // courses:any[];
   //subscription:Subscription;

  constructor(db: AngularFireDatabase){

    this.course$=db.list('/courses');

    //db.list('/courses');

  //  this.subscription = db.list('/courses').valueChanges()
  //   .subscribe(courses=>{   //error
  //     this.courses=courses;
  //     console.log(this.courses);

  //   });

   }


   ngOnDestroy(){

   // this.subscription.unsubscribe();
    console.log('Destroy');
   }
}
