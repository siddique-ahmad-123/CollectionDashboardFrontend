import { Component } from '@angular/core';
import { StatCardComponent } from '../components/stat-card/stat-card';


@Component({
  standalone: true,
  imports: [StatCardComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
   homeLoanData = {
    title: 'Home Loan',
    casesDone: 1123,
    totalCases: 9002,
    overdueAmount: 4290096,
    totalAmount: 30201983
  };

  autoLoanData = {
    title: 'Auto Loan',
    casesDone: 540,
    totalCases: 1200,
    overdueAmount: 1200000,
    totalAmount: 8500000
  };
}
