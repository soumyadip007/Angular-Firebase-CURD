import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
//import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses$;

  course$;
  // courses:any[];
   //subscription:Subscription;

  constructor(db: AngularFireDatabase){

    this.courses$=db.list('/courses');
    console.log(this.courses$);

    this.course$=db.object('/courses/1');

    //db.list('/courses');

  //  this.subscription = db.list('/courses').valueChanges()
  //   .subscribe(courses=>{   //error
  //     this.courses=courses;
  //     console.log(this.courses);

  //   });

   }


  //  ngOnDestroy(){

  //  // this.subscription.unsubscribe();
  //   console.log('Destroy');
  //  }
}
