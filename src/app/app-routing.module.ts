import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'httprequest', loadChildren: './httprequest/httprequest.module#HttprequestPageModule' },
  { path: 'test1', loadChildren: './test1/test1.module#Test1PageModule' },
  { path: 'test2', loadChildren: './test2/test2.module#Test2PageModule' },
  { path: 'test3', loadChildren: './test3/test3.module#Test3PageModule' },
  { path: 'test4', loadChildren: './test4/test4.module#Test4PageModule' },
  { path: 'test5', loadChildren: './test5/test5.module#Test5PageModule' },
  { path: 'homenew', loadChildren: './homenew/homenew.module#HomenewPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'test6', loadChildren: './test6/test6.module#Test6PageModule' },
  { path: 'test7', loadChildren: './test7/test7.module#Test7PageModule' },
  { path: 'test8', loadChildren: './test8/test8.module#Test8PageModule' },
  { path: 'test9', loadChildren: './test9/test9.module#Test9PageModule' },
  { path: 'test10', loadChildren: './test10/test10.module#Test10PageModule' },
  { path: 'new1', loadChildren: './new1/new1.module#New1PageModule' },
  { path: 'new2', loadChildren: './new2/new2.module#New2PageModule' },
  { path: 'new3', loadChildren: './new3/new3.module#New3PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
