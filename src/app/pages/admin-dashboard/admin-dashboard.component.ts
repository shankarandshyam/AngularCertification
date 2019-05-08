import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as jQuery from 'node_modules/jquery';
import 'rxjs/add/operator/map';

import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

    start_date: any;

    end_date: any;
    constructor(){ }
  
    ngOnInit() {
      this.start_date = moment().subtract(29, 'days');
  
      this.end_date = moment();
  
  
  
  
      jQuery('.daterange').daterangepicker({
          ranges: {
              'Today': [moment(), moment()],
              'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
              'Last 7 Days': [moment().subtract(6, 'days'), moment()],
              'Last 30 Days': [moment().subtract(29, 'days'), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
              'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          opens: 'left',
          startDate: moment().subtract(29, 'days'),
          endDate: moment()
      }, function (x: any, y: any) {
  
          console.log(x);
          this.start_date = x;
          this.end_date = y;
          // window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
      });
  
      // Starts here
    }

    dimensionsummarychart = new Chart({
        yAxis: {
            title: {
                text: null
            }
        },

        title: {
            text: 'Dimension Summary',
            align: 'left',
            x: 65,
            y: 20
        },
        chart: {
            type: 'area'
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: ' <b>{point.y}</b>'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
           

        },
        legend: {
            enabled: false
        },
        series: [{

            data: [150, 250, 170, 180, 150, 230, 150, 130, 170, 200, 190,170],
            color: '#e49f9f'
        }]
    });

    // growthchart = new Chart({

    //     chart: {
    //         type: 'bar'
    //     },
    //     title: {
    //         text: 'Growth',
    //         align: 'left',
    //         x: 65,
    //         y: 20
    //     },

    //     xAxis: {
    //         categories: ['ANDROID', 'PHP', '.NET', 'IOS'],
    //         title: {
    //             text: null
    //         }
    //     },
    //     yAxis: {
    //         min: 0,


    //         title: {
    //             text: 'Projects',
    //             align: 'high'
    //         },

    //     },
    //     tooltip: {
    //         valueSuffix: ' projects'
    //     },
    //     plotOptions: {
    //         bar: {
    //             dataLabels: {
    //                 enabled: true
    //             }
    //         },

    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: 'Year 2002',
    //         data: [107, 31, 65, 23]
    //     }, {
    //         name: 'Year 2007',
    //         data: [133, 156, 97, 48]
    //     }, {
    //         name: 'Year 2012',
    //         data: [81, 81, 71, 77]
    //     }, {
    //         name: 'Year 2017',
    //         data: [126, 101, 44, 38]
    //     }]
    // });

    kpisummarychart = new Chart({
        title: {
            text: 'KPI Summary',
            align: 'left',
            x: 70,
            y: 30
        },
        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '{point.x}<br />',
            pointFormat: 'KPI: <b>{point.y}</b>'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: '',
            data: [15, 35, 25, 66, 33, 80, 59, 29, 42, 59, 45, 62],

        }]
    });

    krasummarychart = new Chart({
        yAxis: {
            title: {
                text: ''
            }
        },

        title: {
            text: 'KRA Summary',
            align: 'left',
            x: 65,
            y: 20
        },
        chart: {
            type: 'area'
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: ' <b>{point.y}</b> '
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          

        },
        legend: {
            enabled: false
        },
        series: [{

            data: [300, 600, 900, 600, 650, 700, 650,800, 900, 600,500, 800],
            color: '#8bc6e9'
        }]

    })

    exceptionschart = new Chart({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Exceptions',
            align: 'left',
            x: 65,
            y: 20
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },  

        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {

                text: null           }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
            name: 'Exceptions',
            data: [2, 4, 1, 3, 5, 4, 3, 4, 1, 1, 2, 3]

        }, 
        
    ]
    });
}
