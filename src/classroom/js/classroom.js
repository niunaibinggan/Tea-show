window.onload = function(){
	var oSmallList = document.getElementById("smalllist");
	var aSmallLi = oSmallList.getElementsByTagName('li');
	var aSmallA = oSmallList.getElementsByTagName('a');
	var oTeaList = document.getElementById("tealist");
	var data = [
		{
			"id":1,
			"listName":"茶叶知识",
			"list":[
				{
					"sid":"1",
					"title":"我国的十大名茶有哪些",
					"content":"我国茶叶历史悠久，各种各样的茶类品种，万紫千红，竟相争艳，我国名茶就是在浩如烟海诸多花色品种茶叶中的珍品。在国际上也享有很高的声誉。那么各位茶友们可否了解我国的十大名茶是哪些呢？今天中国茶叶知识网就具体介绍下这个问题： 我国的十大名茶是： 一...",
					"number":"9285",
					"href":""
				},{
					"sid":"2",
					"title":"什么茶叶最好喝",
					"content":"喝茶，已经成为当今很多人的一种习惯。喝茶的好处很多，因为茶叶中含有多种抗氧化物质与抗氧化营养素,对于消除自由基有一定的效果。也具有防衰老,美容养颜、防癌、抗癌等多种功效。那么什么茶叶最好喝呢？我国是茶叶大国，茶叶的品种非常多。而且各具特色。因...",
					"number":"3755",
					"href":""
				},{
					"sid":"3",
					"title":"什么是雨前茶",
					"content":" 什么是雨前茶？今天就由中国茶叶知识网小编为茶友们介绍下这个问题：雨前，即谷雨前，也就是说在4月5日以后至4月20日期间采制的用细嫩芽尖而制成的茶叶，叫做雨前茶。雨前茶虽然不如明前茶（清明前采摘的茶）那么稚嫩，但是，由于在这期间的气温比较高，芽叶...",
					"number":"6985",
					"href":""
				},{
					"sid":"4",
					"title":"中国茶文化的核心是茶道",
					"content":"目前，关于茶文化的许多名词术语存在一些模糊甚至是混乱的认识，茶艺界有许多人常常将茶道、茶德、茶艺混为一谈，弄不清茶道和茶艺的区别，如有的叫茶艺馆，有的叫茶道馆。有的称茶艺表演，有的称茶道表演。需要进行深入的讨论，加以界定，以求取得统一的认识...",
					"number":"1055",
					"href":""
				},{
					"sid":"5",
					"title":"什么是明前茶",
					"content":"什么是明前茶呢？明前茶就是我国长江流域的江南茶区按照节气的不同阶段对春茶的一种称呼。明前茶也就是在清明节前所采制的茶叶。今天就由中国茶叶知识网小编为茶友们介绍下关于明前茶的有关知识。 明前茶的生长环境及特点： 明前茶属于春茶，春茶的品质是最好...",
					"number":"5585",
					"href":""
				},{
					"sid":"6",
					"title":"罗布麻茶适合什么人饮用",
					"content":"罗布麻茶的主要成分是罗布麻叶，具有清热利水、平肝安神的功效，对于心悸失眠，浮肿尿少；高血压病，神经衰弱，肝阳眩晕，肾炎浮肿具有很好的疗效。那么，罗布麻茶适合什么人饮用呢？今天就由中国茶叶知识网小编为茶友们介绍下这个问题： 罗布麻茶适合什么人...",
					"number":"2673",
					"href":""
				}
			]
		},{
			"id":2,
			"listName":"茶叶文化",
			"list" : [
				{
					"sid":"1",
					"title":"从茶树的自然分布来看 ",
					"content":" 目前所发现的山茶科植物共有23属，380余种，而我国就有15属，260余种，且大部分分布在云南、贵州和四川一带。已发现的山茶属有100多种，云贵高原就有60多种，其中以茶树种占最重要的地位。从植物学的角度...",
					"number": "7894",
					"href" : ""
				},{
					"sid" : "2",
					"title" : "从地质变迁来看?",
					"content" : "西南地区群山起伏，河谷纵横交错，地形变化多端，以致形成许许多多的小地貌区和小气候区，在低纬度和海拔高低相差悬殊的情况下，导致气候差异大，使原来生长在这里的茶树，慢慢分置在热带、亚热带和温带不同的气候中...",
					"number" : "5486",
					"href" : ""
				},{
					"sid":"3",
					"title":"从茶树的进化类型来看 ",
					"content":" 茶树在其系统发育的历史长河中，总是趋于不断进化之中。因此，凡是原始型茶树比较集中的地区，当属茶树的原产地。我国西南三省及其毗邻地区的野生大茶树，具有原始茶树的形态特征和生化特性，也证明了我国的西南地区是茶树原产地的中心地带...",
					"number":"3202",
					"href":""
				},{
					"sid":"4",
					"title":"现代茶文化的发展 ",
					"content":"新中国成立后，我国茶叶从1949的年产7500T发展到1998年的60余万T。茶物质财富的大量增加为我国茶文化的发展提供了坚实的基础，1982年，在杭州成立了第一个以弘扬茶文化为宗旨的社会团体－－－“茶人之家”...",
					"number":"2351",
					"href":""
				},{
					"sid":"5",
					"title":"发明饮茶的方式 ",
					"content":"1．祭品：这一说法认为茶与一些其他的植物最早是做为祭品用的，后来有人偿食之发现食而无害，便“由祭品，而菜食，而药用”，最终成为饮料。2．药物：这一说法认为茶“最初是作为药用进入人类社会的。”《神农百草经》中写到：“神农尝百草，日遇七十二毒，得茶而解之”...",
					"number":"1235",
					"href":""
				},{
					"sid":"6",
					"title":"起源及原产地 ",
					"content":"茶树原产于中国，自古以来，一向为世界所公认。只是在1824年之后，印度发现有野生茶树，国外学者中有人对中国是茶树原产地提出异议，在国际学术界引发了争论。这些持异议者，均以印度野生茶树为依据，同时认为中国没有野生茶树...",
					"number":"9871",
					"href":""
				}
			]
		},{
			"id":3,
			"listName":"茶源茶史",
			"list" : [
				{
					"sid":"1",
					"title":"仙都茶 茶香觅在云深处",
					"content":"初秋节气秋风起茶园春色艳阳天,茶山处处采茶女手摘茶叶心头甜...",
					"number": "5166",
					"href" : ""
				},{
					"sid" : "2",
					"title" : "浙江宁波是海上茶路起航地",
					"content" : "主讲人竺济法宁波茶文化促进会副秘书长，炎黄家谱传记文化工作室主编、自由撰稿人。主要从事传记、家谱姓氏文化、茶文化研究。已在海内外180多种报刊发表各类文章数百万字。着有传记小品《名人茶事》、《中华茶人诗描》，主编《浙江宁海储氏宗谱-兼中国储氏文化史》...",
					"number" : "4136",
					"href" : ""
				},{
					"sid":"3",
					"title":" 质疑铁观音起源之“王说”",
					"content":" 铁观音从发现到流传至今已有近四百年历史了，是名副其实的中国茶王。而关于其来源，却有着众说纷纭的说法，其中最为经典的就是“魏”“王”之争...",
					"number":"2318",
					"href":""
				},{
					"sid":"4",
					"title":"三国已有普洱茶",
					"content":"普洱茶的种植历史源远流长。据道光《普洱府志》记载，蜀相孔明“平定南中，倡兴茶事”。这说明，早在1700多年前的三国时期，普洱府境内就已开始种茶...",
					"number":"3105",
					"href":""
				},{
					"sid":"5",
					"title":"讲述绿茶的作用与故事",
					"content":"1975年夏季的一个傍晚，崇安县（今武夷山市）绿茶的作用收购站里，23岁的陈郁榕已经跟着老师忙碌了一天。当送茶来的茶农渐渐稀少时，她的眼前出现了这样的一泡茶样——量不多，只有8两，干茶嗅香时感觉香味不俗，冲泡后品啜，更觉得香味奇特，滋味醇厚甘滑鲜爽，茶汤中带花香，岩韵极显...",
					"number":"8151",
					"href":""
				},{
					"sid":"6",
					"title":"饮茶的发源时间 ",
					"content":"神农时期：唐·陆羽《茶经》：“茶之为饮，发乎神农氏。”在中国的文化发展史上，往往是把一切与农业、与植物相关的事物起源最终都归结于神农氏。归到这里以后就再也不能向上推了。也正因为如此，神农才成为农之神...",
					"number":"8153",
					"href":""
				}
			]
		},{
			"id":4,
			"listName":"茶具知识",
			"list" : [
				{
					"sid":"1",
					"title":"紫砂壶市面“雾里看花”难辨真假",
					"content":" 不少市民喝茶，爱用紫砂壶。记者昨走访市场发现，都号称是宜兴紫砂壶，便宜只要十多元，贵的卖到数千上万元，消费者直呼看不懂。业内专家昨表示，百元以下的所谓“紫砂壶”，多是用普通陶泥制作...",
					"number": "3218",
					"href" : ""
				},{
					"sid" : "2",
					"title" : "真正的紫砂壶如何鉴别?",
					"content" : "紫砂壶的假货屡见不鲜，必须掌握一些基本的鉴别方法，选购时才不致上当。市面紫砂壶无收藏价值...",
					"number" : "3517",
					"href" : ""
				},{
					"sid":"3",
					"title":"市面紫砂壶无收藏价值",
					"content":" “目前在市场上流通的紫砂壶99%以上没有收藏投资价值，因为这些紫砂壶没有文化内涵，仅是一件喝茶的工具。希望广州的紫砂壶爱好者不要盲目收藏。”今天在广东省工艺美术珍品馆举行个人作品专集首发式的紫砂陶艺家吴顺华语出惊人。!茶发芽!”祈求神灵保佑武夷岩茶丰收、甘醇...",
					"number":"9151",
					"href":""
				},{
					"sid":"4",
					"title":"紫砂壶的造型如何选择，如何购买？",
					"content":"目前，关于茶文化的许多名词术语存在一些模糊甚至是混乱的认识，茶艺界有许多人常常将茶道、茶德、茶艺混为一谈，弄不清茶道和茶艺的区别，如有的叫茶艺馆，有的叫茶道馆。有的称茶艺表演，有的称茶道表演。需要进行深入的讨论，加以界定，以求取得统一的认识...",
					"number":"8998",
					"href":""
				},{
					"sid":"5",
					"title":"品尝摩洛哥“三味茶”",
					"content":"1、几何 型，俗称为光货，光货的设计制作是最能鉴别功力的，光货是指整个徒刑中不同形体部位解读紫砂壶...",
					"number":"3520",
					"href":""
				},{
					"sid":"6",
					"title":"解读紫砂壶",
					"content":"中国的好东西真多，就是地上的泥，有时也会像黄金那样值钱。宜兴的紫砂就是一例。...",
					"number":"9713",
					"href":""
				}
			]
		},{
			"id":5,
			"listName":"茶艺茶道",
			"list" : [
				{
					"sid":"1",
					"title":"墨君坛畔水 吃摘小青茶",
					"content":"身在缥缈群山，一路都在追踪野茶。可世间许多事，偏偏就是“有心栽花花不开，无意插柳柳成荫”，茶也一样。正当笔者遍寻野茶未果，患得患失之际，眼前突然一亮：水月溪畔，几株高约两米的茶树迎风摇曳...",
					"number": "7843",
					"href" : ""
				},{
					"sid" : "2",
					"title" : "茶是城市的柔软部分",
					"content" : "地铁呼啸而过的风，清冷而短促。站在地铁口，看着拥挤的人群，想像着假如这世界没有声音，那会多么的荒诞。 一壶风雅 满腹禅机-兼中国储氏文化史》...",
					"number" : "2158",
					"href" : ""
				},{
					"sid":"3",
					"title":" 一壶风雅 满腹禅机",
					"content":"佛家有云：“一树一菩提，一花一世界。”紫砂亦是如此。每一把紫砂壶都展现出一种别样的姿态：有的浑厚霸气如豪侠壮士，有的细腻婉约如江南女子，有的端庄稳重如堂堂君子……着名青年紫砂工艺师范泽锋的壶则如一个飘逸洒脱的文人雅士，流露出的是一种秀外慧中的禅机和智慧...",
					"number":"9823",
					"href":""
				},{
					"sid":"4",
					"title":"日本茶道源于中国径山茶宴",
					"content":" 700多年前，日本僧人在中国径山寺拜师取经，将中国的禅茶文化带回日本，并发展成为日本茶道。这一口口相传的观点得到日本史料的印证...",
					"number":"8971",
					"href":""
				},{
					"sid":"5",
					"title":"讲述绿茶的作用与故事",
					"content":"1975年夏季的一个傍晚，崇安县（今武夷山市）绿茶的作用收购站里，23岁的陈郁榕已经跟着老师忙碌了一天。当送茶来的茶农渐渐稀少时，她的眼前出现了这样的一泡茶样——量不多，只有8两，干茶嗅香时感觉香味不俗，冲泡后品啜，更觉得香味奇特，滋味醇厚甘滑鲜爽，茶汤中带花香，岩韵极显...",
					"number":"2318",
					"href":""
				},{
					"sid":"6",
					"title":"感受韩国茶道精髓 ",
					"content":"首尔，一位韩国教授在仁寺洞的某餐厅请我们吃传统料理，宾主尽欢。离开餐厅的时候教授说时间还早，我再带你们去一个好地方喝茶，你们一定会喜欢。他说这话的神情，很有一些孩子气的骄傲，又带点故弄玄虚的神秘感...",
					"number":"3878",
					"href":""
				}
			]
		},{
			"id":6,
			"listName":"茶与健康",
			"list" : [
				{
					"sid":"1",
					"title":"嚼茶叶可缓解牙齿过敏",
					"content":"很多人的牙齿一吃刺激性的东西就酸酸的，这是怎么回事呢?专家介绍说，牙齿发酸属于一种牙本质过敏症状，原因有可能是牙釉质缺乏致使牙本质暴露，或者是釉质发育钙化不良，也有可能是由于长期用一侧咀嚼食物，导致一侧牙齿磨耗严重。防治牙本质过敏，除了勤刷牙等常用的清洁口腔的方法以外，还有几个小窍门可以采用...",
					"number": "7123",
					"href" : ""
				},{
					"sid" : "2",
					"title" : "教你做美容茶,养颜美容抗衰老",
					"content" : "女性长期坐办公室，在空调环境下工作，皮肤感到非常干燥，影响容颜。这里介绍一些美容茶，在补水的同时调理气色、护理肌肤 一壶风雅 满腹禅机-兼中国储氏文化史》...",
					"number" : "6123",
					"href" : ""
				},{
					"sid":"3",
					"title":"茶叶有哪些保健作用",
					"content":"酸、碳水化合物、矿物质等对人体都有很好的营养价值和药理作用。茶叶既有天然保健的作用，又有医药功能，这是茶叶天生具有的特性。那么茶叶有哪些保健作用呢？下面由中国茶叶知识网为茶友们介绍下这个问题...",
					"number":"2157",
					"href":""
				},{
					"sid":"4",
					"title":" 饮茶减肥最健康",
					"content":" 通过喝减肥茶来排毒减重是很多女性喜爱的减肥方法。这类产品都主要包括茶叶(一般是绿茶、乌龙茶这两大茶系)和决明子、山楂、荷叶这些配料。下面就一起来看看用不同的茶来减肥，原理和效果是怎么样的。哪一种最健康有效...",
					"number":"1123",
					"href":""
				},{
					"sid":"5",
					"title":" 红茶可助养胃",
					"content":"随着气温持续升高，夏季养生提上日程。夏季由于常吃冷食、喝冷饮，很容易伤脾胃。而红茶则是夏季养胃首选，不仅可以提神消疲、生津清热、降糖降脂，还能健胃整肠。较适合压力大的上班族饮用...",
					"number":"2155",
					"href":""
				},{
					"sid":"6",
					"title":"怎样喝茶才健康 ",
					"content":"茶，是我国的传统饮料。茶中含有大量的鞣酸、茶碱、咖啡因和少量的芳香油、叶绿素、多种维生素等营养成分。适量饮茶能够提神健脑、生津解渴、除湿清热、祛病轻身，对人体健康大有益处。那么怎么喝茶更健康呢？今天就由中国茶叶知识网小编为茶友们介绍下这个问...",
					"number":"6255",
					"href":""
				}
			]
		}
	];
	var str = "";
	for(var i=0;i<data.length;i++){
		str+='<li><a href="javascript:;">'+data[i].listName+'</a></li>';
	} 
	console.log(str);
	oSmallList.innerHTML = str;
	aSmallLi[0].className = "active";
	aSmallA[0].className = "active";
	oTeaList.innerHTML=createList(0);
	for(var i=0;i<aSmallLi.length;i++){
		aSmallLi[i].index = i;
		aSmallLi[i].onclick = function(){
			for(var j=0;j<aSmallLi.length;j++){
				aSmallLi[j].className = "";
				aSmallA[j].className = "";
			}
			this.className = "active";
			aSmallA[this.index].className = "active";
			oTeaList.innerHTML = createList(this.index);
		}
	}
	function createList(n){
		var str2 = "";
		for(var i=0;i<data[n].list.length;i++){
			str2+='<li><h4><a href="javascript:;">'+data[n].list[i]["title"]+'</a></h4><span>本文已有：'+data[n].list[i]["number"]+'人阅读</span><p><a href="javascript:;">'+data[n].list[i]["content"]+'</a></p></li>';
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