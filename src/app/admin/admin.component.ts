import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private rendred:Renderer2) { }

  ngOnInit() {
    this.rendred.addClass(document.body,"nav-md");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.rendred.removeClass(document.body,"nav-md");
  }

}
