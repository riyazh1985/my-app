import { Component, OnInit } from '@angular/core';
import { ConfigService } from './app.config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(public configService:ConfigService){

  }
  ngOnInit() {
    this.configService.getConfig()
    .subscribe((data:any) => {
        console.log("data",data);
    });
  }
}
