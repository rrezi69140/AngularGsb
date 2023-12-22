import {Login} from "./Login";
import {HttpClient} from "@angular/common/http";
import {Visiteur} from "./Visiteur";
import {Router} from "@angular/router";

export class GsbLoginService {
  private login: Login = new Login;

  constructor(private http: HttpClient, private router: Router) { }

  serviceEnvoieLogin(email: string, password: string) {
  const requestObject = new Visiteur( {"email": email, "password": password});
  return this.http.post<Login>(' http://gsb.schaffter.etu.lmdsio.fr/api/login', requestObject).
    subscribe(
      data => {
        this.login = new Login(data);
        this.router.navigate(['/frais/liste']);
      },
        error => console.log('Erreur appel API')

  );
      }



  recupereBearer(): string {
    return this.login.access_token;
  }
    visiteurId(): number {
      return this.login.visiteur.id_visiteur;
    }

}
