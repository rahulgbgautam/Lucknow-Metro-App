import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.page.html',
  styleUrls: ['./httprequest.page.scss'],
})
export class HttprequestPage implements OnInit {
  BottomList: any;

  constructor(private service:TestService) { }

  ngOnInit() {
   // this.getBottomListDDl()
  }
  // getBottomListDDl() {
  //   this.service.getClosetTypeListDropDown().subscribe(res => {
  //     this.BottomList = JSON.parse(res);
  //     console.log("fghhgfghghdghdh"+ this.BottomList );
  //   });
  // }

}
