import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  frases: string;
  form: { name: string, email: string, message: string};
  closeResult: string;
  messageWarning: string;
  messageSuccess: string;
  @ViewChild('warningModal') warningModal: TemplateRef<any>;
  @ViewChild('successModal') successModal: TemplateRef<any>;

  constructor(public EmailServ: EmailService, private modalService: NgbModal) { 
    this.form  = {name: '',email: '', message: ''};
    this.messageWarning = '';
    this.messageSuccess = '';
    const arrayfrases = [
      "“Si piensas que la tecnología puede solucionar tus problemas de seguridad, está claro que ni entiendes los problemas ni entiendes la tecnología”    –  Bruce Schneier",
      "“Las personas siempre le temen al cambio. Le temían a la electricidad cuando fue inventada, ¿no es así?”.  – Bill Gates",
      "“La clave del éxito en los negocios esta en detectar  hacia dónde va el mundo y llegar ahí primero”.  – Bill Gates",
    ]
  }

  ngOnInit() {
    this.frases = "“La tecnología por sí sola no basta. También tenemos que poner el corazón” – Jane Goodall"
  }

  async sendMessage(){
    console.log(this.form);
    if(this.form.email != '' && this.form.message != '' && this.form.name != ''){
      if(this.validEmail(this.form)){
        const response = await this.EmailServ.SendMail(this.form);
        response.subscribe(d => {
          console.log(d);
          this.messageSuccess = "Tu mensaje de ayuda nos ha llegado, pronto nos pondremos en contacto contigo 👌👌"
          this.openModal(this.successModal,'modal-success');
        }, (err) => {
          console.log(err);
          this.messageSuccess = "OMG! 😔😔 Estamos realizando mantenciones lamentamos las molestias, puedes enviarnos un correo a info@ncai.cl o intentar en un rato más"
          this.openModal(this.warningModal,'modal-danger');
        })
      }else{
        //console.log("correo no válido")
        this.messageWarning = 'El email ingresado no es un correo válido 😯😯 ';
        this.openModal(this.warningModal,'modal-danger')
      }
    }else{
        //console.log("correo no válido")
        this.messageWarning = 'Creemos que te faltan datos por llenar 🤔🤔 ';
        this.openModal(this.warningModal,'modal-danger')
    }
    
  }

  private openModal(content: any, clase: any){
    this.modalService.open(content, { windowClass: clase, centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.form  = {name: '',email: '', message: ''}
  }

  private validEmail(form: any){
    let exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return exp.test(form.email);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}

}
