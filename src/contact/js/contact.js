//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(125.327546,43.838792);//定义一个中心点坐标
        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    //标注点数组
    var markerArr = [{title:"我的标记",content:"我的备注",point:"125.327604|43.838285",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//创建和初始化地图


    var oNavList = document.getElementById("navlist");
    var aNavLi = oNavList.getElementsByTagName("li");
    for(var i=0;i<aNavLi.length;i++){
        aNavLi[i].onclick = function(){
            for(var j=0;j<aNavLi.length;j++){
                aNavLi[j].className = "";
            }
            this.className = "li1";
        }
    }
    land();
    function land(){
        var oHeadLand=document.getElementById("headland");
        var oLand=document.getElementById("land");
        var oClose=document.getElementById("close");
        var oHeadLand2=document.getElementById("headland2");
        var oLand2=document.getElementById("land2");
        var oClose2=document.getElementById("close2");
        var oNow=document.getElementById("now");
        oHeadLand.onclick=function(){
           oLand.style.display="block";
           document.body.style.overflow="hidden";
           
        };
        oClose.onclick=function(){
            oLand.style.display="none";
            document.body.style.overflow="auto";
        };
        oHeadLand2.onclick=function(){
           oLand2.style.display="block";
           document.body.style.overflow="hidden"
        };
        oClose2.onclick=function(){
            oLand2.style.display="none";
            document.body.style.overflow="auto"
        };
        oNow.onclick=function(){
            oLand.style.display="none";
            oLand2.style.display="block";
        };
    }
    function getByClass(parent,tagName,sClass){
        var aEle=parent.getElementsByTagName(tagName);
        var arr=[];/*存储相同的classname标签*/
        for(var i=0;i<aEle.length;i++){
            var aClass=aEle[i].className.split(" ");
            if(find(aClass,sClass)!=-1){
                arr.push(aEle[i])
            }
        }
        return arr;
    }
    function find(arr,str){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==str){
                return i;
            }
        }
        return -1;
    }
    banner()
    function banner(){
        var timer = null;
        var n = 0;
        var b = true;
        var oBox=document.getElementById("box");
        var aBox = getByClass(oBox,"div","words")
        var oClick = document.getElementById("click");
        var aLi = oClick.getElementsByTagName("li");

        change();
        autoPlay();

        function autoPlay(){
            timer = setInterval(function(){
                if(b){
                    n++;
                    if(n%4==0){
                        n=0;
                    }
                }
                change();
            },3000);
        }

        for(var i=0;i<aLi.length;i++){
            aLi[i].index = i;
            aLi[i].onclick = function(){
                n = this.index;
                change();
            };
        }
        function change(){
            for(var j=0;j<aLi.length;j++){
                aLi[j].className = "";
                aBox[j].className = "words";
            }
            aLi[n].className = "onclick";
            aBox[n].className = "words show";
        }
    }