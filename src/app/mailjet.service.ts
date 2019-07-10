import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MailjetService {

  constructor(private Http: HttpClient) { }

  SendMail(form: any){

    const body = {
      "Messages":[
        {
          "From": {
            "Email": "info@ncai.cl",
            "Name": "Website Ncai"
          },
          "To": [
            {
            "Email": "lnavarro@ncai.cl",
            "Name": "WEB: " + form.name
            }
          ],
          "Subject": "Nuevo Correo de la Web - " + form.name,
          "TextPart": "Pronto nos pondremos en contacto",
          "HTMLPart": "<h3>Te ha llegado una pregunta desde la web.</h3><br><p> Nombre : " + form.name + "<br> Email : " + form.email + " <br> Mensaje: " + form.message + "</p>"
        }
      ]
    };
    const header = new HttpHeaders();
    header.append("authorization","Basic Y2MxZmZmYzZmMDNjNjU1MzZjYTIxMWJiYzkyYjcyNTU6ZDBmMGUzMDZkNTExODNiMDZiOTJjMGRhYTI2ZmU4MWE=");
    header.append("content-type", "application/json");

    return this.Http.post("https://api.mailjet.com/v3.1/send",body,{ headers : header })
   
  }
}
