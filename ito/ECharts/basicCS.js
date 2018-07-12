var myChart = echarts.init(document.getElementById('main'));

var option = {
    xAxis: {
        data: ['1010', '1011', '1012', '1013', '1014']
    },
    yAxis: {},
    seriese: [{
        type: 'k',
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42],
            [50, 45, 38, 58]
        ]
    }]
};

myChart.setOption(option);