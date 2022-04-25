import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from 'src/app/services/service-test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServiceTestService) { }

  ngOnInit(): void {
  }

}
