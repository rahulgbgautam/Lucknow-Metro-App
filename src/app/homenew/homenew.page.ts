import { Component, OnInit } from '@angular/core';

import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-homenew',
  templateUrl: './homenew.page.html',
  styleUrls: ['./homenew.page.scss'],
})
export class HomenewPage implements OnInit {


  constructor( public navCtrl:NavController ) { }

  ngOnInit() {
  }

 public hide: boolean = false;


   show(){

    this.hide = !this.hide;
   }

test1(value:string){

  console.log(value);

  this.navCtrl.navigateForward("test1");

}

}
