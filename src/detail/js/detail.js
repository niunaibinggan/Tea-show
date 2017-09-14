window.onload = function(){
	//oCon1List2的动态创建
	var oCon1List2 = document.getElementById("con1list2");
	var data = [
		{
			"sid":1,
			"img":"image/hei9.jpg",
			"sprice":"178",
			"content":"雅悦阁 正山小种 红茶 武夷山桐木"
		},{
			"sid":2,
			"img":"image/hong11.jpg",
			"sprice":"265",
			"content":"雅悦阁 特级正山小种 红茶茶"
		},{
			"sid":3,
			"img":"image/new.jpg",
			"sprice":"349",
			"content":"雅悦阁 大红袍茶叶武夷山岩茶乌龙茶"
		},{
			"sid":4,
			"img":"image/16.jpg",
			"sprice":"163",
			"content":"金骏眉礼盒 特级金骏眉红茶茶叶"
		},{
			"sid":5,
			"img":"image/hong8.jpg",
			"sprice":"163",
			"content":"清承堂 浓香 龙井茶茶叶 龙井 "
		},{
			"sid":6,
			"img":"image/hong3.jpg",
			"sprice":"163",
			"content":"浓香 绿茶 2016新茶 茶叶"
		},{
			"sid":7,
			"img":"image/hong8.jpg",
			"sprice":"163",
			"content":"清承堂绿茶2016新茶叶春茶日照"
		}
	];
	var str = "";
	for(var i=0;i<data.length;i++){
		str += '<li><img src="'+data[i]["img"]+'"><span>￥'+data[i]["sprice"]+'</span><a href="javascrip:;">'+data[i]["content"]+'</a></li>';
	}
	oCon1List2.innerHTML = str;

	//图片的放大
	var oCon1List1 = document.getElementById("con1list1");
	var aCon1Li1 = oCon1List1.getElementsByTagName('li');
	var oDiv=document.getElementById('div1'); 
	var oImg=oDiv.getElementsByTagName('img')[0]; 
	var arrImg = ["image/detail2.jpg","image/detail1.jpg","image/detail3.jpg","image/detail4.jpg"];
	for(var i=0;i<aCon1Li1.length;i++){
		aCon1Li1[i].index = i;
		aCon1Li1[i].onmouseover = function(){
			oImg.src = arrImg[this.index];
			big(this.index);
		}
	}    
	big(0);
    function big(n){		
		var oShow=oDiv.getElementsByTagName('div')[0]; 
		var oSpan=oDiv.getElementsByTagName('span')[0]; 
		var oImg=document.getElementById('img1');

		oShow.onmouseover=function(){ 
			oSpan.style.display='block'; 
			oImg.src = arrImg[n];
			oImg.parentNode.style.display='block'; 
		}; 
		oShow.onmouseout=function(){ 
			oSpan.style.display='none'; 
			oImg.parentNode.style.display='none'; 
		}; 
		oShow.onmousemove=function(ev) { 
			var oEvent=ev||event; 
			var x=oEvent.clientX-oDiv.offsetLeft-oSpan.offsetWidth/2; 
			var y=oEvent.clientY-197-oSpan.offsetWidth/2; 
			console.log(oSpan.offsetTop);
			if(x<0){ 
				x=0; 
			}else if(x>oShow.offsetWidth-oSpan.offsetWidth){ 
			   x=oShow.offsetWidth-oSpan.offsetWidth; 
			} 
			if(y<0){ 
			   y=0; 
			}else if(y>oShow.offsetHeight-oSpan.offsetHeight){ 
			   y=oShow.offsetHeight-oSpan.offsetHeight 
			} 

			oSpan.style.left=x+'px'; 
			oSpan.style.top=y+'px'; 
			var percentX=x/(oShow.offsetWidth-oSpan.offsetWidth); 
			var percentY=y/(oShow.offsetHeight-oSpan.offsetHeight); 
			
			var oImgparent=oImg.parentNode; 
			oImg.style.left=-percentX*(oImg.offsetWidth-oImgparent.offsetWidth)+'px'; 
			oImg.style.top=-percentY*(oImg.offsetHeight-oImgparent.offsetHeight)+'px'; 
		};
    }

    //con2的点击事件
    var oCon2List1 = document.getElementById("con2list1");
    var aCon2Li1 = oCon2List1.getElementsByTagName('li');
    var oCon3 = document.getElementById("con3");
    var oCon2Box1 = document.getElementById("con2box1");
    for(var i=0;i<aCon2Li1.length;i++){
    	aCon2Li1[i].index = i;
    	aCon2Li1[i].onclick = function(){
    		for(var j=0;j<aCon2Li1.length;j++){
    			aCon2Li1[j].className = "";
    		}
    		this.className = "active";
    		if(this.index%2 != 0){
    			oCon3.style.display = "none";
    			oCon2Box1.style.display = "none";
    		}else{
    			oCon3.style.display = "block";
    			oCon2Box1.style.display = "block";
    		}
    	}
    }


    //con4的动态创建
    var oCon4List1 = document.getElementById("con4list1");
    var aCon4Li = oCon4List1.getElementsByTagName('li');
    var data2 = [
		{
			"sid":1,
			"feel":"茶很好喝,试喝了一下 味道很不错 茶汤很清澈",
			"date":"2016/11/12 22:54",
			"namefirst":"z",
			"namelast":"2",
			"img":"image/ping1.jpeg",
			"show":"image/detail5.jpg"
		},{
			"sid":2,
			"feel":"包装还行吧！是朋友介绍这家店的，喝过再来追加评论。",
			"date":"2016/11/12 21:14",
			"namefirst":"t",
			"namelast":"5",
			"img":"image/ping2.jpeg",
			"show":"image/detail2.jpg"
		},{
			"sid":3,
			"feel":"不错 很浓。还是一如的好 第二次买了 下次还会来?",
			"date":"2016/11/12 19:28",
			"namefirst":"w",
			"namelast":"9",
			"img":"image/ping3.jpg",
			"show":"image/detail3.jpg"
		},{
			"sid":4,
			"feel":"包装还行吧！是朋友介绍这家店的，喝过再来追加评论。",
			"date":"2016/11/12 07:14",
			"namefirst":"s",
			"namelast":"7",
			"img":"image/ping4.jpg",
			"show":"image/detail4.jpg"
		}
    ];
    var data3 = [
		{
			"sid":1,
			"feel":"双十一买回来后，公公喝着还不错又来买的！会继续支持的！！。",
			"date":"2016/11/11 20:54",
			"namefirst":"y",
			"namelast":"7",
			"img":"image/ping6.jpeg",
			"show":"image/detail5.jpg"
		},{
			"sid":2,
			"feel":"包装还行吧！刚泡来喝 挺香的",
			"date":"2016/11/11 20:14",
			"namefirst":"e",
			"namelast":"1",
			"img":"image/ping7.jpg",
			"show":"image/detail2.jpg"
		},{
			"sid":3,
			"feel":"一直在喝这个茶。。。还不错。。",
			"date":"2016/11/11 17.28",
			"namefirst":"k",
			"namelast":"2",
			"img":"image/ping8.jpg",
			"show":"image/detail3.jpg"
		},{
			"sid":4,
			"feel":"此用户没有填写评论!",
			"date":"2016/11/11 07:54",
			"namefirst":"q",
			"namelast":"1",
			"img":"image/ping18.jpg",
			"show":"image/detail4.jpg"
		},{
			"sid":5,
			"feel":"试喝了一下 味道很不错 茶汤很清澈。",
			"date":"2016/11/10 23:14",
			"namefirst":"c",
			"namelast":"2",
			"img":"image/ping10.jpg",
			"show":"image/detail4.jpg"
		},{
			"sid":6,
			"feel":"不错！味道蛮好！",
			"date":"2016/11/10 11:14",
			"namefirst":"u",
			"namelast":"8",
			"img":"image/ping19.jpg",
			"show":"image/detail4.jpg"
		},{
			"sid":7,
			"feel":"包装很好看，茶很差，第一泡味道都很淡，很老的叶子做出来的那种。",
			"date":"2016/11/10 10:10",
			"namefirst":"v",
			"namelast":"5",
			"img":"image/ping12.jpg",
			"show":"image/detail4.jpg"
		}
    ];
    var str3 = "";
    for(var i=0;i<data2.length;i++){
    	str3 += '<li><p class="p2">'+data2[i]["feel"]+'</p><p class="p3">'+data2[i]["namefirst"]+'<span>*****</span>'+data2[i]["namelast"]+'<span>(匿名)</span><img src="'+data2[i]["img"]+'"></p><img src="'+data2[i]["show"]+'" class="img1"><span>'+data2[i]["date"]+'</span></li>';
    }
    oCon4List1.innerHTML += str3;

    var str4 = "";
    for(var i=0;i<data3.length;i++){
    	str4 += '<li><p class="p2">'+data3[i]["feel"]+'</p><p class="p3">'+data3[i]["namefirst"]+'<span>*****</span>'+data3[i]["namelast"]+'<span>(匿名)</span><img src="'+data3[i]["img"]+'"></p><span>'+data3[i]["date"]+'</span></li>';
    }
    oCon4List1.innerHTML += str4;

    //登录
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


	var oMain = document.getElementById("main");
    var aMainSpan = oMain.getElementsByTagName("span");
    var aMainStrong = oMain.getElementsByTagName("strong");
    var oCon1Strong = document.getElementById("con1strong");
    aMainSpan[1].onclick = function(){
    	oBuy.style.display="none";
    	document.body.style.overflow="auto";
    }

   
    //点击按钮 数量的加减
    var oRightBtn1 = document.getElementById("rightbtn1");
    var oRightBtn2 = document.getElementById("rightbtn2");
    var oRightText = document.getElementById("righttext");

    var sum = 1;
    fnTab();
    function fnTab(){
    	aMainStrong[2].innerHTML =sum;
	    var con1str = parseFloat(oCon1Strong.innerHTML);
	    aMainStrong[1].innerHTML =  con1str+".00";
	    aMainStrong[3].innerHTML = con1str;
    }
    
    oRightBtn2.onclick = function(){
    	sum++;
    	oRightText.value = sum;
    	aMainStrong[2].innerHTML = sum;
    	aMainStrong[3].innerHTML = con1str*sum+".00";
    }
    oRightBtn1.onclick = function(){
    	if(sum == 1){
    		oRightText.value = "1";
    		return 1;
    	}
    	sum--;
    	oRightText.value = sum;
    	aMainStrong[2].innerHTML = sum;
    	aMainStrong[3].innerHTML = con1str*sum+".00";
    }

    //购买功能
    var oBuy = document.getElementById("buy");
    var oRightBtn3 = document.getElementById("rightbtn3");
    oRightBtn3.onclick = function(){
    	oBuy.style.display = "block";
    	document.body.style.overflow="hidden";
    	oRightText.value = 1;
    }
    var oClose0 = document.getElementById("close0");
    oClose0.onclick=function(){
    	oBuy.style.display="none";
    	document.body.style.overflow="auto";
    };
}