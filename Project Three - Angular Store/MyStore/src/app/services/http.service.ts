import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/productClass';

@Injectable({
  providedIn: 'root',
})

// HttpService class to fetch the products from the server
export class HttpService {
  // filePath to store the path of the data file
  filePath: string = 'assets/data.json';

  // constructor to inject the HttpClient
  constructor(private http: HttpClient) {}

  // getProducts method to fetch the products from the server
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.filePath);
  }
}
