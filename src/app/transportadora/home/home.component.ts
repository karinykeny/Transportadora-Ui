import { TransportadoraService } from './../../core/transportadora.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  empresas: any = {};

  constructor(private trasService: TransportadoraService) { }

  ngOnInit(): void {
    this.empresas = this.trasService.getTransportadoras()
  }

}
