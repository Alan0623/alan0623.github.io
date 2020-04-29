$(function(){
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."),
    console.log("Front-end programming By Alan Lin "),
    //工程進度
    window.onload = function () {
        if (document.getElementById('line-chart') != null) {
            var ctx = document.getElementById('line-chart').getContext('2d');
            window.myLine = new Chart(ctx, lineConfig);
        }
    };
  
    //總進度
    $('.canvasDoughnutProgress').each(function () {

        var chart_element = $(this);
        var chart_doughnut = new Chart(chart_element, chart_doughnut_progress);
    });
    var ProgressColor = '#1abb9c';
    if ($('#hidStatus').val() == "u"){
        $('#progressIcon').attr("src", "images/foward.png");
        ProgressColor = '#1abb9c';
    }        
    else if ($('#hidStatus').val() == "d") {
        $('#progressIcon').attr("src", "images/delay.png");
        ProgressColor = '#E74C3C';
    } else {
        $('#progressIcon').hide();
    }
    ///整體進度 半圓儀錶板
    var chart_gauge_settings = {
        lines: 12,
        angle: 0,
        lineWidth: 0.4,
        pointer: {
            length: 0.75,
            strokeWidth: 0.042,
            color: '#421b5d'//'#f39c12',//'#1D212A'
        },      
        limitMax: 'false',
        colorStart: '#601986',
        colorStop: '#601986',
        strokeColor: '#A1A1A1',  //底色
        generateGradient: true
    };
    //////實際進度
    if ($('#gauge-text').length) {
        var chart_gauge_01_elem = document.getElementById('chart_gauge_01');
        var chart_gauge_01 = new Gauge(chart_gauge_01_elem).setOptions(chart_gauge_settings);

        chart_gauge_01.maxValue = 100;
        chart_gauge_01.animationSpeed = 32;
        
        chart_gauge_01.setTextField(document.getElementById("gauge-text"));
        //if (parseFloat($('#hidProgress').val()) == 0.00)           
            chart_gauge_01.set(0.01);
            chart_gauge_01.set(parseFloat($('#hidProgress').val()));
            
        
        $('#schValue').text((parseFloat($('#hidSchProgress').val()).toFixed(2)).toString() );
        console.log(parseFloat($('#hidProgress').val()).toFixed(2))
        chart_gauge_01_elem.title = "完成進度:" + parseFloat($('#hidProgress').val()).toFixed(2)+"%";
        

            
    }
})
