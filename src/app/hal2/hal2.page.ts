import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.page.html',
  styleUrls: ['./hal2.page.scss'],
})
export class Hal2Page implements OnInit {

  post : any = {};

  constructor(
    private http : HttpClient,
    private toastCtrl : ToastController) { }

  submit(){
    this.http.post("https://regres.in/api/users?page=2", this.post).subscribe((res:any) => {
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
