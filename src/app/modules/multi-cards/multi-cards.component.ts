import { Component, OnInit, OnDestroy } from "@angular/core";
import { TransportadoraService } from "src/app/core/transportadora.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-multi-cards",
  templateUrl: "./multi-cards.component.html",
  styleUrls: ["./multi-cards.component.scss"]
})
export class MultiCardsComponent implements OnInit, OnDestroy {
  transportadoras: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transportadoraService: TransportadoraService
  ) {}

  ngOnInit() {
    this.transportadoras = this.transportadoraService.getTransportadoras();
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams["pagina"];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(["/transportadoras"]);
  }
}