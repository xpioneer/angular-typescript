import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';
import { ChartService } from './chart.service';
import { ISystemLog, IArticleType, IArticleTag } from './model/chart.model';
import { Params } from '@utils/params.service';

const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/legend/ScrollableLegendModel');
require('echarts/lib/component/legend/ScrollableLegendAction');
require('echarts/lib/component/legend/ScrollableLegendView');

@Component({
    selector: 'app-charts',
    templateUrl: './chart.html',
})
export class ChartComponent {
    // @ViewChild('form') private form: NgForm;
    @ViewChild('systemLog') public systemLog: ElementRef;
    @ViewChild('articleType') public articleType: ElementRef;
    @ViewChild('tag') public tag: ElementRef;
    @ViewChild('test') public testChart: ElementRef;

    constructor (
        private http: HttpClient,
        private params: Params,
        private notification: NzNotificationService,
        private chartService: ChartService,
    ) {
    }

    public ngOnInit () {
        this.getData();
        setTimeout(() => this.testData());
    }

    public ngAfterContentInit () {
        // setTimeout(() => this.testData());
    }

    public getData () {
        this.chartService.getSystemLog().subscribe((res: any) => {
            this.initSystemLogChart(res.data);
        }, (err) => {});

        this.chartService.getArticleType().subscribe((res: any) => {
            this.initArticleTypeChart(res.data);
        }, (err) => {});

        this.chartService.getArticleTag().subscribe((res: any) => {
            this.initArticleTagChart(res.data);
        }, (err) => {});
    }

    // 系统日志统计
    private initSystemLogChart (list: object[]) {
        const sysLogChart = echarts.init(this.systemLog.nativeElement);
        const xAxis = list.map((m: ISystemLog) => m.date);
        const data = list.map((m: ISystemLog) => m.total);
        sysLogChart.setOption({
            title: {
                text: '系统日志',
                x: 'center',
            },
            tooltip: {},
            xAxis: {
                data: xAxis,
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data,
            }],
        });
    }

    // 文章类型统计
    private initArticleTypeChart (list: object[]) {
        const articleTypeChart = echarts.init(this.articleType.nativeElement);
        const xAxis = list.map((m: IArticleType) => m.type_name);
        const data = list.map((m: IArticleType) => ({value: m.total, name: m.type_name}));
        articleTypeChart.setOption({
            title: {
                text: '文章类型',
                x: 'center',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: xAxis,
            },
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            series: [{
                name: '文章类型',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data,
            }],
            color: ['#9aca61', '#0096BF', '#f6ab00', '#e44f6d', '#719fdb', '#001f4b', '#555555'],
        });
    }

    // 文章标签统计
    private initArticleTagChart (list: object[]) {
        const articleTagChart = echarts.init(this.tag.nativeElement);
        const xAxis = list.map((m: IArticleTag) => m.name);
        const data = list.map((m: IArticleTag) => ({value: m.total, name: m.name}));
        articleTagChart.setOption({
            title: {
                text: '文章标签',
                x: 'center',
            },
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: xAxis,
            },
            series : [
                {
                    name: '标签',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '60%'],
                    data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        });
    }

    // 官方例子
    private testData () {
        const myChart = echarts.init(this.testChart.nativeElement);
        myChart.setOption({
            title: {
                text: '示例',
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
            }],
        });
    }
}
