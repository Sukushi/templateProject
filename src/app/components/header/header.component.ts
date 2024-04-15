import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // déclaration d'une variable en TS '{visibilité} nomDeVar: <type|s>' -> 'private var: string | number | undefined;'

  // par défaut les variables de classes dans un composant sont 'public'
  @Input() title?: string = "default Title"; // == 'title : string | undefined;'

  private a: number = 0; // exclus l'utilisation de la variable dans le template html
  protected b: number = 1; // utilisable par le template et les classes enfants 

  @Input("author") privateTitle: string = "private Title"

  // get et set permet de CREER des variables disposant de comportements lors de leur utilisation
  get publicTitle(): string {
    return this.privateTitle
  }

  set publicTitle(value: string) {
    this.privateTitle = value
  }

}
