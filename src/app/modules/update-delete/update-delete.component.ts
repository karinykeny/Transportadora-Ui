import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { TransportadoraService } from "src/app/core/transportadora.service";

@Component({
  selector: "app-update-delete",
  templateUrl: "./update-delete.component.html",
  styleUrls: ["./update-delete.component.scss"]
})
export class UpdateDeleteComponent implements OnInit, OnDestroy {
  id: number;
  inscricao: Subscription;
  transportadora: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transportadoraService: TransportadoraService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
      this.transportadora = this.transportadoraService.getTransportadora(
        this.id
      );

      if (this.transportadora == null) {
        this.router.navigate(["/inexistente", this.id]);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
