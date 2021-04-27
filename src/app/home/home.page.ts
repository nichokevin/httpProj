import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  dataPOST = [];
  loading: any;

  constructor(
    private http : HttpClient,
    private loadCtrl : LoadingController
  ) {}

  public async loaderPresent(): Promise<any> {
    const loading = await this.loadCtrl.create({
      message : "Loading ...",
      backdropDismiss: true
    });
    await loading.present();
  
    return loading;
  }

  async getDataPost() {
    
    this.loading = await this.loaderPresent();
    
    this.http.get("https://jsonplaceholder.typicode.com/posts/api/users?page=2").subscribe((res : any) => {
      console.log(res);

      this.dataPOST = res;
      if (this.loading) {
        this.loading.dismiss();
      }
    });
  }

  async delete(id:string) {
    
    this.loading = await this.loaderPresent();
    
    this.http.delete("https://jsonplaceholder.typicode.com/posts/api/users?page=2")
            .subscribe(() => console.log('Delete successful'));
  }
  
  ionViewDidEnter() {
    this.getDataPost();
  }
}
