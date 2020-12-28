import { Injectable } from "@angular/core";
import { CustomHttpService } from "src/app/common/services/custom-http.service";

@Injectable()
export class CustomerService {
  constructor(private customHttpService: CustomHttpService) {}

  getClients() {
    return this.customHttpService.get("/listaclientes").toPromise();
  }

  getKPIClientes() {
    return this.customHttpService.get("/kpiclientes").toPromise();
  }

  create(client: any){
    return this.customHttpService.post("/creacliente", client).toPromise();
  }
  
}
