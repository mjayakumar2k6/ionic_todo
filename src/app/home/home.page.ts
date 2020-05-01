import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Network } from '@ionic-native/network/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoData;
  todoKeys;
  allDataCount = 0;

  icons:any = {
    "Work": "desktop-outline",
    "Music": "musical-notes-outline",
    "Travel": "airplane-outline",
    "Study": "book-outline",
    "Home": "home-outline",
    "Shopping": "cart-outline"   
  }

  iconColors:any = {
    "Work": "medium",
    "Music": "secondary",
    "Travel": "tertiary",
    "Study": "success",
    "Home": "danger",
    "Shopping": "danger"   
  }

  constructor(private todoService: TodoService, private network: Network, private camera: Camera) {}
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.todoData = this.todoService.getAllTodo();
    this.initAllCount();
    this.todoKeys = Object.keys(this.todoData);

     
    
  }

  ionViewDidEnter() {
   this.initAllCount();
  }

  initAllCount() {
    this.allDataCount = 0;
    Object.values(this.todoData).forEach((element:any) => {
      this.allDataCount = this.allDataCount + element.length;
    });     
  }

  getCount(todo) {
    return this.todoData[todo].length;
  }

  getIcon(todo) {
    return this.icons[todo];
  }

  getColor(toto) {
    return this.iconColors[toto];
  }

  capture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);
     }, (err) => {
      // Handle error
     });    
  }
}
