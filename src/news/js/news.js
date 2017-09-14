window.onload = function(){
	var oSmallList = document.getElementById("smalllist");
	var aSmallLi = oSmallList.getElementsByTagName("li");
	var aSmallA = oSmallList.getElementsByTagName("a");
	var oNewsList = document.getElementById("newslist");
	var data = [
		{
			"id":1,
			"listName":"公司新闻",
			"list":[
				{
					"sid":1,
					"title":"嚼茶叶可缓解牙齿过敏",
					"content":"很多人的牙齿一吃刺激性的东西就酸酸的，这是怎么回事呢?专家介绍说，牙齿发酸属于一种牙本质过敏症状，原因有可能是牙釉质缺乏致使牙本质暴露，或者是釉质发育钙化不良，也有可能是由于长期用一侧咀嚼食物，导致一侧牙齿磨耗严重。防治牙本质过敏，除了勤刷牙等常用的清洁口腔的方法以外，还有几个小窍门可以采用。",
					"href":""
				},{
					"sid":2,
					"title":"饮茶减肥最健康",
					"content":"引言：通过喝减肥茶来排毒减重是很多女性喜爱的减肥方法。这类产品都主要包括茶叶（一般是绿茶、乌龙茶这两大茶系）和决明子、山楂、荷叶这些配料。下面就一起来看看用不同的茶来减肥，原理和效果是怎么样的。哪一种最健康有效。?专家介绍说，牙齿发酸属于一种牙本质过敏症状，原因有可能是牙釉质缺乏致使牙本质暴露，或者是釉质发育钙化不良，也有可能是由于长期用一侧咀嚼食物，导致一侧牙齿磨耗严重。防治牙本质过敏，除了勤刷牙等常用的清洁口腔的方法以外，还有几个小窍门可以采用。",
					"href":""
				},{
					"sid":3,
					"title":"教你做美容茶,养颜美容抗衰老",
					"content":"女性长期坐办公室，在空调环境下工作，皮肤感到非常干燥，影响容颜。这里介绍一些美容茶，在补水的同时调理气色、护理肌肤。?专家介绍说，牙齿发酸属于一种牙本质过敏症状，原因有可能是牙釉质缺乏致使牙本质暴露，或者是釉质发育钙化不良，也有可能是由于长期用一侧咀嚼食物，导致一侧牙齿磨耗严重。防治牙本质过敏，除了勤刷牙等常用的清洁口腔的方法以外，还有几个小窍门可以采用。",
					"href":""
				},{
					"sid":4,
					"title":"菊花茶如何喝才养生",
					"content":"许多人习惯工作学习之时，在案头沏一杯菊花茶。它能清火、明目，还能抗辐射。因此，菊花茶成了各式餐厅中常见的饮料。?专家介绍说，牙齿发酸属于一种牙本质过敏症状，原因有可能是牙釉质缺乏致使牙本质暴露，或者是釉质发育钙化不良，也有可能是由于长期用一侧咀嚼食物，导致一侧牙齿磨耗严重。防治牙本质过敏，除了勤刷牙等常用的清洁口腔的方法以外，还有几个小窍门可以采用。",
					"href":""
				}
			]
		},{
			"id":2,
			"listName":"行业动态",
			"list":[
				{
					"sid":1,
					"title":" 中国好茶叶的排名",
					"content":"中国是茶叶大国，其最主要的表现就是品种繁多。现在我国茶叶约有一千多种。中国好的茶叶太多，但是最好的不一定就是价钱最贵的， 也有根据自己的喜好， 自己真正喜欢的也就是最好的。 下面就由中国茶叶知识网介绍下各位茶友们都非常认可的中国好茶叶的排名...",
					"href":""
				},{
					"sid":2,
					"title":"太平猴魁的鉴别方法",
					"content":"太平猴魁是中国历史名茶，产于黄山北麓黄山区，由于产地低温多湿，土质肥活，云雾笼罩，故而茶质别具一格：茶芽挺直，肥壮细嫩，外形魁伟，色泽苍绿，全身毫白，具有清汤质绿、水色明、香气浓、滋味醇、回味甜的优秀特征。那么茶友们在购买太平猴魁时应怎样鉴...",
					"href":""
				},{
					"sid":3,
					"title":"什么茶叶最好喝",
					"content":"喝茶，已经成为当今很多人的一种习惯。喝茶的好处很多，因为茶叶中含有多种抗氧化物质与抗氧化营养素,对于消除自由基有一定的效果。也具有防衰老,美容养颜、防癌、抗癌等多种功效。那么什么茶叶最好喝呢？我国是茶叶大国，茶叶的品种非常多。而且各具特色。因...",
					"href":""
				},{
					"sid":4,
					"title":"茶喝多了有哪些坏处",
					"content":"茶，是我国的传统饮料。茶中含有大量的咖啡因、鞣酸、茶碱等多种维生素、叶绿素等营养成分。适量饮茶具有生津止渴、除湿清热、提神健脑、减肥瘦身等多种健康功效。那么，茶喝多了有哪些坏处呢?今天就由中国茶叶知识网小编为茶友们介绍下这个问题...",
					"href":""
				}
			]
		},{
			"id":3,
			"listName":"媒体新闻",
			"list":[
				{
					"sid":1,
					"title":"潢川法院再掀执行风暴 ",
					"content":"为维护当事人的合法权益和法律的权威，响应全市集中打击拒不执行判决裁定等犯罪行为专项行动，打造“诚信潢川”，2016年10月17日，潢川县法院再次掀起“百日执行风暴”，直指拒不履行法律义务的“老赖”。县人大代表、政协委员和3家新闻媒体随行见证...",
					"href":""
				},{
					"sid":2,
					"title":"潢川县举行弋阳小学建设",
					"content":"县法院百日执行风暴行动之所以战果斐然，离不开申请执行积极提供被执行人线索，离不开广大群众对执行工作的理解和配合。县法院将以此次集中清理活动为契机，总结经验、以点带面、全面统筹，进一步加大执行宣传力度，惩戒失信...",
					"href":""
				},{
					"sid":3,
					"title":"潢川炫酷花样轮滑开业",
					"content":"源头缓解执行压力；继续公布失信被执行人名单，加强信用惩戒力度，让“老赖”因逃避履行义务付出更大的经济和信用成本，倒逼债务人自觉履行；加大强制执行力度，用足用好财产查控措施和强制措施，最大程序查找被执行人财产...",
					"href":""
				},{
					"sid":4,
					"title":"潢川博采艺术教育成功举",
					"content":"茶，是我国的传统饮料。茶中含有大量的咖啡因、鞣酸、茶碱等多种维生素、叶绿素等营养成分。适量饮茶具有生津止渴、除湿清热、提神健脑、减肥瘦身等多种健康功效。那么，茶喝多了有哪些坏处呢?今天就由中国茶叶知识网小编为茶友们介绍下这个问题...",
					"href":""
				}
			]
		}
	];
	var str = "";
	for(var i=0;i<data.length;i++){
		str+='<li><a href="javascript:;">'+data[i].listName+'</a></li>';
	}
	oSmallList.innerHTML = str;
	aSmallLi[0].className = "active";
	aSmallA[0].className = "active";
	oNewsList.innerHTML=createList(0);

	for(var i=0;i<aSmallLi.length;i++){
		aSmallLi[i].index = i;
		aSmallLi[i].onclick = function(){
			for(var j=0;j<aSmallLi.length;j++){
				aSmallLi[j].className = "";
				aSmallA[j].className = "";
			}
			this.className = "active";
			aSmallA[this.index].className = "active";
			oNewsList.innerHTML = createList(this.index);
		}
	}

	function createList(n){
		var str2 = "";
		for(var i=0;i<data[n].list.length;i++){
			str2+='<li><h4><a href="javascript:;">'+data[n].list[i]["title"]+'</a></h4><p><a href="javascript:;">'+data[n].list[i]["content"]+'</a></p></li>';
		}
		return str2;
	}


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
}