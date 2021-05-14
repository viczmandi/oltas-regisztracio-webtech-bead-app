import { Component, OnInit } from '@angular/core';
import { Vakcina } from '../Vakcina';
import { VakcinaService } from '../vakcina.service';
import { mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-vakcina-regisztracio-list',
  templateUrl: './vakcina-regisztracio-list.component.html',
  styleUrls: ['./vakcina-regisztracio-list.component.css']
})
export class VakcinaRegisztracioListComponent implements OnInit {
  public loading: boolean = true;
  public errorMsg: string = '';
  public successMsg: string = '';
  public vakcina: Vakcina[] = [];

  public columns = ['date', 'name', 'age', 'email', 'telnum', 'taj', 'törlés'];

  constructor(private vakcianService: VakcinaService) { }

  ngOnInit(): void {
    this.vakcianService.getVakcina()
      .subscribe((vakcina: Vakcina[]) => {
        this.vakcina = vakcina;
        this.loading = false;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this.loading = false;
        });
  }

  cancelVakcina(id: string) {
    this.vakcianService.cancelVakcina(id)
      .pipe(
        mergeMap(() => this.vakcianService.getVakcina())
      )
      .subscribe((vakcina: Vakcina[]) => {
        this.vakcina = vakcina;
        this.successMsg = 'Sikeresen törölt oltás'
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        });
  }

}

