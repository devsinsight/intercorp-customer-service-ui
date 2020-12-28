import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { CustomerService } from '../../services/customer.service';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableColumn } from '@swimlane/ngx-datatable'

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss'],
})
export class CustomerManagementComponent implements OnInit {
  rows: any[] = [];
  kpiClientes: any = {};
  loadingIndicator = true;
  reorderable = true;

  columns: TableColumn[] = [
    { name: 'Nombre', prop: 'firstName' },
    { name: 'Apellido', prop: 'lastName' },
    { name: 'Edad', prop: 'age', summaryFunc: (cells: any) => this.summaryForAgeMean(cells) },
    { name: 'Fecha de Nacimiento', prop: 'birthdate', summaryFunc: (cells: any) => this.summaryForAgeStandarDeviation(cells) },
    { name: 'Fecha probable de muerte', prop: 'probableDeathDate' },
  ];

  ColumnMode = ColumnMode;

  constructor(
    private customerFormDialog: MatDialog,
    private customerService: CustomerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.display();
  }

  display() {
    Promise.all([
      this.customerService.getClients(),
      this.customerService.getKPIClientes()
    ]).then((response: any) => {
      this.rows = response[0];
      this.kpiClientes = response[1];
      this.loadingIndicator = false;

    });

  }

  private summaryForAgeMean(cells: any[]) {
    return `Edad (x̄): ${this.kpiClientes.PromedioEdadClientes.toFixed(2)}`;
  }

  private summaryForAgeStandarDeviation(cells: any[]) {
    return `Edad (σ): ${this.kpiClientes.DesviacionEstandarEdadClientes.toFixed(2)}`;
  }

  addNewCustomer() {
    let dialogRef = this.customerFormDialog.open(CustomerFormComponent);
    dialogRef.afterClosed().subscribe((newClient) => {
      if (newClient) {
        newClient.birthdate = new Date(newClient.birthdate).toISOString();

        this.customerService
          .create(newClient)
          .then((response: any) => {
            this.display();
            if (response && response.id) {
              this.snackBar.open(
                'El nuevo cliente se ha registrado correctamente', 'X',
                {
                  duration: 5000,
                  panelClass: 'successSnack'
                }
              );
            }
            
          })
          .catch((err: any) => {
            this.snackBar.open('Ocurrió un error', 'X', {
              duration: 5000,
              panelClass: 'erroSnack'
            });
          });
      }
    });
  }

}
