import {Canada} from './Canada';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CanadaCatalog} from './canada-catalog/canada-catalog';
import {CanadaCatalogItem} from './canada-catalog/canada-catalog-item';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CanadaDataService {
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.canada = [];
    this.canadaData = new BehaviorSubject<Canada[]>(this.canada);
    this.loadCanadaCatalog();
  }
  private canadaCatalogUri = 'assets/data/canada.json';
  private readonly canadaData: BehaviorSubject<Canada[]>;
  private readonly canada: Canada[];
  private httpClient: HttpClient;
  private static item2Canada(id: number, item: CanadaCatalogItem): Canada {
    const canada = new Canada();
    canada.id = id + 1;
    canada.type = item.type;
    canada.name = item.name;
    canada.capital = item.capital;
    return canada;
  }
  public getCanadaData(): Observable<Canada[]> {
    return this.canadaData;
  }
  private loadCanadaCatalog() {
    this.httpClient
      .get(this.canadaCatalogUri)
      .subscribe(
        (canadaCatalog: CanadaCatalog) => this.processCanadaCatalog(canadaCatalog));
  }

  private processCanadaCatalog(canadaCatalog: CanadaCatalog) {
    const items = canadaCatalog.canada;
    items.forEach(
      (item: CanadaCatalogItem, index: number) =>
        this.canada.push(CanadaDataService.item2Canada(index, item)));
    this.canadaData.next(this.canada);
  }
}
