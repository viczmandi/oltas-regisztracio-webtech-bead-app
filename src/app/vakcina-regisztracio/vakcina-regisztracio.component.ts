import { Component, OnInit } from '@angular/core';
import { Vakcina } from '../Vakcina';
import { VakcinaService } from '../vakcina.service';

@Component({
  selector: 'app-vakcina-regisztracio',
  templateUrl: './vakcina-regisztracio.component.html',
  styleUrls: ['./vakcina-regisztracio.component.css']
})
export class VakcinaRegisztracioComponent implements OnInit {

  public errorMsg: string = '';
  public successMsg: string = '';

  public date: string = '';
  public name: string = '';
  public age: number = 0;
  public email: string = '';
  public telnum: number = 0;
  public taj: boolean = false;

  constructor(private vakcinaService: VakcinaService) { }

  ngOnInit(): void {
  }

  createVakcina() {
    this.errorMsg = '';
    this.successMsg = '';

    this.vakcinaService.createVakcina(
      this.date,
      this.name,
      this.age,
      this.email,
      this.telnum,
      this.taj
    )
      .subscribe((createdVakcina: Vakcina) => {
        this.date = '';
        this.name = '';
        this.age = 0;
        this.email = '';
        this.telnum = 0;
        this.taj = false;

        const vakcinaDate = new Date(createdVakcina.date).toDateString();
        this.successMsg = `Oltás regisztráció sikeres volt erre a napra: ${vakcinaDate}`;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        })
  }

}
