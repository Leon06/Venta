import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiclienteService } from "../services/apicliente.service";
import { Cliente } from "src/app/models/cliente"
@Component({
    templateUrl: 'dialogcliente.component.html'
})
export class DialogClienteComponent{

    public nombre!: string;

    constructor(
        public dialogRef:MatDialogRef<DialogClienteComponent>,
        public apiCliente:ApiclienteService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public cliente:Cliente

    ){
        if(this.cliente != null){
            this.nombre = cliente.nombre;
        }
    }

    close(){
       this.dialogRef.close();  
    }

    editCliente() {
        const cliente: Cliente= {nombre: this.nombre, id: this.cliente.id };
        this.apiCliente.edit(cliente).subscribe(Response=>{
            if(Response.exito ===1){
                this.dialogRef.close();
                this.snackBar.open('Cliente editado con exito','',{
                    duration:2000
                });
            }
        });


    }

    addCliente(){
        const cliente: Cliente= {nombre: this.nombre, id: 0};
        this.apiCliente.add(cliente).subscribe(Response=>{
            if(Response.exito ===1){
                this.dialogRef.close();
                this.snackBar.open('Cliente generado con exito','',{
                    duration:2000
                });
            }
        });
    }
    
}