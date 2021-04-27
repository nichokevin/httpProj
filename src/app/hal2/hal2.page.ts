import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.page.html',
  styleUrls: ['./hal2.page.scss'],
})
export class Hal2Page implements OnInit {

  post : any = {};
  loading: any;

  constructor(
    private http : HttpClient,
    private toastCtrl : ToastController,
    private loadCtrl : LoadingController) { }

    public async loaderPresent(): Promise<any> {
      const loading = await this.loadCtrl.create({
        message : "Loading ...",
        backdropDismiss: true
      });
      await loading.present();
    
      return loading;
    }

  submit(){
    this.http.post("https://jsonplaceholder.typicode.com/posts/api/users?page=2", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration : 3000,
        message : "ID for new Item is "+ res.id
      }).then(l => l.present())
    })
    
  }

  ngOnInit() {
  }

}
