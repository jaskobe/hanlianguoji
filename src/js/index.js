$(document).ready(function(){
    // 百度地图API功能
    var map = new BMap.Map("com-map");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(112.87971, 28.374415), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity("长沙");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件

    var data_info = [[112.958608, 28.233358,"总部地址：湖南长沙岳麓区绿地中央广场5栋609"],
        [112.811231,28.485512,"基地地址：湖南长沙望城铜官循环经济工业园铜官大道"]
    ];
    var opts = {
        width : 250,     // 信息窗口宽度
        height: 80,     // 信息窗口高度
        title : "信息窗口" , // 信息窗口标题
        enableMessage:true//设置允许信息窗发送短息
    };
    for(var i=0;i<data_info.length;i++){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
        var content = data_info[i][2];
        map.addOverlay(marker);               // 将标注添加到地图中
        addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
        marker.addEventListener("click",function(e){
            openInfo(content,e)}
        );
    }
    function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
});