import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-forecast',
  templateUrl: './customer-forecast.component.html',
  styleUrls: ['./customer-forecast.component.scss']
})
export class CustomerForecastComponent implements OnInit {

  clients = []
  kpiClients: any;

  // chart card options
  cardSingle: any[] = []
  cardColorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  // chart pie options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  pieSingle: any[] = [];
  pieColorScheme = {
    domain: ['#2085ec', '#6ad079', '#A10A28', '#AAAAAA']
  };
  
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getClientData()
  }

  getClientData() {
    Promise.all([
      this.customerService.getClients(),
      this.customerService.getKPIClientes()
    ]).then((response: any) => {
      return { clients:  response[0], kpis: response[1] }
    })
    .then(this.loadChartCards.bind(this))
    .then(this.loadChartPie.bind(this));
  }

  loadChartCards(data: any){
    let chartCard: any = [
      { name: 'Promedio', value: data.kpis.PromedioEdadClientes },
      { name: 'Desviación Estandar', value: data.kpis.DesviacionEstandarEdadClientes }
    ]
  
    this.cardSingle = chartCard;
    return data;
  }

  loadChartPie(data: any) {
    let menores18 = data.clients.filter((client: any) => client.age <= 18).length;
    let mayores18Menores65 = data.clients.filter((client: any) => client.age > 18 && client.age <=65).length;
    let mayores65 = data.clients.filter((client: any) => client.age > 65).length;

    let chartPie = [
      { name: 'Menores de 18', value: menores18 },
      { name: 'Mayores de 18', value: mayores18Menores65 },
      { name: 'Menores de 65', value: mayores65 }
    ];

    this.pieSingle = chartPie;
  }
}
