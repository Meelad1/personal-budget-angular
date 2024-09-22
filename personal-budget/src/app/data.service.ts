import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private budgetData: any = null;  // Cache variable to store data

  constructor() {}

  // Use mock data instead of making an HTTP call
  getBudgetData(): Observable<any> {
    if (this.budgetData) {
      return of(this.budgetData);  // Return cached data if it exists
    } else {
      // Define mock data that simulates the structure returned by the backend
      const mockBudgetData = [
        { title: 'Rent', budget: 500 },
        { title: 'Groceries', budget: 300 },
        { title: 'Utilities', budget: 200 },
        { title: 'Entertainment', budget: 100 },
        { title: 'Savings', budget: 400 }
      ];

      // Cache the data
      this.budgetData = mockBudgetData;

      // Return the data as an observable
      return of(this.budgetData);
    }
  }
}
