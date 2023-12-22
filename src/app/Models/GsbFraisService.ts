import {BehaviorSubject} from "rxjs";
import {Frais} from "./Frais";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GsbLoginService} from "./GsbLoginService";

export class GsbFraisService {

  private _reponses = new BehaviorSubject<Frais[]>([]);
  readonly appels_termines = this._reponses.asObservable();
  public listeFrais: Frais[] = [];

  constructor(private http: HttpClient,private gsb_api: GsbLoginService) { }

  listeFraisDuVisiteur() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.gsb_api.recupereBearer()


    });
    return this.http.get<Frais[]>('http://localhost/rezig/GSB/public/api/GetListeFrais'+this.gsb_api.visiteurId(),{headers:headers}).subscribe(
      data => {
        this.listeFrais = data;
        this._reponses.next(this.listeFrais);
      },
      error => console.log('Erreur appel API')
    );
  }
}


