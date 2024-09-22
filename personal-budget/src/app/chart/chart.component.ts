import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';  // Import the service

// Import Chart.js components
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

@Component({
  selector: 'pb-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  private chartData: number[] = [];
  private d3Data: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Register the required Chart.js components
    Chart.register(PieController, ArcElement, Tooltip, Legend);

    // Fetch data from the DataService
    this.dataService.getBudgetData().subscribe((data: any) => {
      this.chartData = data.map((item: any) => item.budget);  // Example for Chart.js
      this.d3Data = data.map((item: any) => item.budget);     // Example for D3.js
      this.createChartJS();   // Create Chart.js chart
      this.createD3Chart();   // Create D3.js chart
    });
  }

  // Chart.js chart creation logic
  createChartJS(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Savings'],  // Example labels
        datasets: [{
          data: this.chartData,
          backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0', '#ffcd56', '#ff9f40'],
        }]
      },
    });
  }

  // D3.js chart creation logic
  createD3Chart(): void {
    const validData = this.d3Data;

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select("#d3Chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie<number>()
      .value(d => d)(validData);

    const arc = d3.arc<d3.PieArcDatum<number>>()
      .innerRadius(0)
      .outerRadius(radius);

    svg.selectAll("path")
      .data(pie)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.toString()));
  }
}
