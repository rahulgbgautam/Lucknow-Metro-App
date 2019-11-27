import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },

    {
      title: 'httprequest',
      url: '/httprequest',
      icon: 'list'
    },

    {
      title: 'homenew',
      url: '/homenew',
      icon: 'list'
    },

    {
      title: 'tab2',
      url: '/tab2',
      icon: 'list'
    },

    {
      title: 'tab3',
      url: '/tab3',
      icon: 'list'
    },

    {
      title: 'news',
      url: '/news',
      icon: 'list'
    },

    {
      title: 'news-single',
      url: '/news-single',
      icon: 'list'
    },

    {
      title: 'test1',
      url: '/test1',
      icon: 'list'
    },

    {
      title: 'test2',
      url: '/test2',
      icon: 'list'
    },

    {
      title: 'test3',
      url: '/test3',
      icon: 'list'
    },

    {
      title: 'test4',
      url: '/test4',
      icon: 'list'
    },

    {
      title: 'test5',
      url: '/test5',
      icon: 'list'
    },

    {
      title: 'test6',
      url: '/test6',
      icon: 'list'
    },

    {
      title: 'test7',
      url: '/test7',
      icon: 'list'
    },

    {
      title: 'test8',
      url: '/test8',
      icon: 'list'
    },

    {
      title: 'test9',
      url: '/test9',
      icon: 'list'
    },



    {
      title: 'addtocart',
      url: '/addtocart',
      icon: 'list'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
