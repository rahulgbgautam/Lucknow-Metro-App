import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

import { ListService } from '../list.service';

import { LoadingController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {


  first: any;
  constructor(
    public ListService: ListService,
  ) {
  }
  ngOnInit() {
    this.getroot();
  }
  getroot() {
    console.log("gjyagsudfy");  // here we are checking that our data is coming or not in console 

    this.ListService.getStationList().subscribe(res => {    // subscribe , it is used for fetching data and stores in , res variable
      this.first = res.results;
      //console.log("hgakulsfhui:  " + this.title);
    })
  }


}
