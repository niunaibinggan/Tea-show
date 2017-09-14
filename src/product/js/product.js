window.onload = function(){
	var oSmallList = document.getElementById("smalllist");
	var aSmallLi = oSmallList.getElementsByTagName("li");
	var oProdList = document.getElementById("prodlist");
	var data = [{
		"id":1,
		"listName":"绿茶",
		"list":[
			{
				"sid":1,
				"img":"image/lv1.jpg", 
				"name":"西湖牌龙井茶叶",
				"detail":"西湖牌龙井茶叶正宗雨前西湖龙井茶250g纸包春茶绿茶2016新茶包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":2,
				"img":"image/lv2.jpg", 
				"name":"清承堂茶叶",
				"detail":"清承堂 茶叶 龙井茶 绿茶 龙井2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"98.50",
				"nowPrice":"85.50",
				"href":""
			},{
				"sid":3,
				"img":"image/lv3.jpg", 
				"name":"谢裕大黄山毛峰",
				"detail":"谢裕大黄山毛峰2016新 茶叶 高山云雾绿茶黄山野茶毛尖 日照充足",
				"naturePrice":"183.00",
				"nowPrice":"165.50",
				"href":""
			},{
				"sid":4,
				"img":"image/lv4.jpg", 
				"name":"特级洞庭碧螺春",
				"detail":"茶农直销 2016新茶叶绿茶 苏州雨前特级洞庭碧螺春250克 炒青嫩芽",
				"naturePrice":"76.00",
				"nowPrice":"55.50",
				"href":""
			},{
				"sid":5,
				"img":"image/lv5.jpg", 
				"name":"雀舌",
				"detail":"【半斤装】雀舌 2016新茶绿茶雀舌春茶叶 明前翠芽毛尖雪芽嫩芽",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":6,
				"img":"image/lv6.jpg", 
				"name":"碧螺春",
				"detail":"碧螺春 2016年新茶 茶叶 雨前茶 特级 绿茶 包邮 经济实惠",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":7,
				"img":"image/lv7.jpg", 
				"name":"高山云雾毛尖茶",
				"detail":"清承堂绿茶2016新茶叶春茶日照散装袋装高山云雾毛尖茶特级浓耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":8,
				"img":"image/lv8.jpg", 
				"name":"洞庭碧螺春炒青",
				"detail":"正宗东山 2016新茶叶绿茶 苏州 雨前特级洞庭碧螺春炒青50克 嫩芽",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":9,
				"img":"image/lv9.jpg", 
				"name":"西湖龙井茶",
				"detail":"西湖牌龙井茶叶正宗雨前西湖龙井茶250g纸包春茶绿茶2016新茶包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":10,
				"img":"image/lv10.jpg", 
				"name":"春茶雪青",
				"detail":"绿茶 2016新茶 茶叶 日照绿茶山东 春茶雪青散装500g包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":11,
				"img":"image/lv11.jpg", 
				"name":"岳西翠兰茶",
				"detail":"2016年新茶绿茶岳西翠兰茶叶明前炒青批发散装袋装500g浓香型特级",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":12,
				"img":"image/lv12.jpg", 
				"name":"云雾毛尖明",
				"detail":"一杯香绿茶2016新茶叶云雾毛尖明前春茶耐泡散装日照雪青特级礼盒",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			}
		]
	},{
		"id":2,
		"listName":"红茶",
		"list":[
			{
				"sid":1,
				"img":"image/hong1.jpg", 
				"name":"金骏眉",
				"detail":"限购2件 金骏眉 红茶 花香型 茶叶 武夷山桐木关金俊眉散装150g",
				"naturePrice":"98.00",
				"nowPrice":"76.30",
				"href":""
			},{
				"sid":2,
				"img":"image/hong2.jpg", 
				"name":"正山小种茶叶",
				"detail":"特级正山小种茶叶 红茶茶叶 特级红茶正山小种茶叶散装600克",
				"naturePrice":"75.30",
				"nowPrice":"63.50",
				"href":""
			},{
				"sid":3,
				"img":"image/hong3.jpg", 
				"name":"正宗安徽祁门红茶",
				"detail":"超值500g 正宗安徽祁门红茶 2016新茶春茶 特级红香螺 祁红红茶叶",
				"naturePrice":"205.50",
				"nowPrice":"199.90",
				"href":""
			},{
				"sid":4,
				"img":"image/hong4.jpg", 
				"name":"特级正山小种茶叶",
				"detail":"特级正山小种茶叶 红茶茶叶 特级红茶正山小种茶叶散装600克",
				"naturePrice":"57.70",
				"nowPrice":"55.50",
				"href":""
			},{
				"sid":5,
				"img":"image/hong5.jpg", 
				"name":"凤牌红茶",
				"detail":"凤牌红茶2016新茶 云南滇红茶特级茶叶 经典58工夫红茶380g包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":6,
				"img":"image/hong6.jpg", 
				"name":"正山小种红茶",
				"detail":"正山小种红茶500g 特级 福建武夷山桐木关红茶茶叶礼盒装散装包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":7,
				"img":"image/hong7.jpg", 
				"name":"正山小种红茶礼盒装",
				"detail":"特级正山小种红茶礼盒装 桐木关茶叶新茶散装春茶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":8,
				"img":"image/hong8.jpg", 
				"name":"特级春茶武夷山茶叶",
				"detail":"原产靠谱茶 正山小种红茶500g罐装 特级春茶武夷山茶叶散装礼盒装",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":9,
				"img":"image/hong9.jpg", 
				"name":"立顿红茶",
				"detail":"包邮立顿红茶200袋400克立顿黄牌精选红茶包斯里兰卡进口袋泡茶叶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":10,
				"img":"image/hong10.jpg", 
				"name":"正宗金骏眉红茶",
				"detail":"清承堂 茶叶 龙井茶 绿茶龙井 2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":11,
				"img":"image/hong11.jpg", 
				"name":"安徽祁门红茶",
				"detail":"清承堂 茶叶 龙井茶 绿茶龙井 2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":12,
				"img":"image/hong12.jpg", 
				"name":"祁门红茶",
				"detail":"清承堂 茶叶 龙井茶 绿茶龙井 2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			}
		]
	},{
		"id":3,
		"listName":"黑茶",
		"list":[
			{
				"sid":1,
				"img":"image/hei1.jpg", 
				"name":"黑茶茯砖茶",
				"detail":"湖南安化黑茶茯砖茶金花茯砖金花醇叶尊享版800g",
				"naturePrice":"230.00",
				"nowPrice":"205.70",
				"href":""
			},{
				"sid":2,
				"img":"image/hei2.jpg", 
				"name":"金花手筑茯茶",
				"detail":"黑茶湖南安化安化黑茶茯砖茶熙牧源金花手筑茯茶980克安华正宗",
				"naturePrice":"128.00",
				"nowPrice":"103.70",
				"href":""
			},{
				"sid":3,
				"img":"image/hei3.jpg", 
				"name":"安化黑茶",
				"detail":"买1送1共800克 安化黑茶 湖南安化安华黑茶 金花茯砖 君享茶叶",
				"naturePrice":"99.99",
				"nowPrice":"88.88",
				"href":""
			},{
				"sid":4,
				"img":"image/hei4.png", 
				"name":"特级茶叶茯茶手筑茯砖茶",
				"detail":"黑茶湖南安化金花茯砖茶安化黑茶正宗安华特级茶叶茯茶手筑茯砖茶",
				"naturePrice":"199.90",
				"nowPrice":"190.50",
				"href":""
			},{
				"sid":5,
				"img":"image/hei5.jpg", 
				"name":"泾渭茯茶",
				"detail":"泾渭茯茶 黑茶特级 陕西正宗金花茯茶砖泾阳茯砖茶 经典1368 900g",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":6,
				"img":"image/hei6.jpg", 
				"name":"黑茶手筑金花茯砖野生原叶",
				"detail":"黑茶湖南安化茯砖茶 甜水湾安化黑茶茯砖茶 金花手筑正宗特级茶叶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":7,
				"img":"image/hei7.jpg", 
				"name":"黑茶湖南安化",
				"detail":"黑茶湖南安化 安化黑茶茶叶 怡清源金花黑茶茯砖茶 安华黑茶正宗",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":8,
				"img":"image/hei8.jpg", 
				"name":"藏茶老树砖茶",
				"detail":"藏茶老树砖茶 四川雅安藏茶黑茶500g 雅安陈年茶叶茶厂边茶大茶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":9,
				"img":"image/hei9.jpg", 
				"name":"古渡茯砖茶",
				"detail":"泾阳茯茶陕西泾渭金花手筑茯砖黑茶古渡特级天尖伏茶砖450克包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":10,
				"img":"image/hei10.jpg", 
				"name":"手筑原叶茯砖茶",
				"detail":"清承堂 茶叶 龙井茶 绿茶龙井 2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":11,
				"img":"image/hei11.jpg", 
				"name":"特级安化黑茶",
				"detail":"清承堂 茶叶 龙井茶 绿茶龙井 2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":12,
				"img":"image/hei12.jpg", 
				"name":"正品安化黑茶金花茯砖",
				"detail":"清承堂 茶叶 龙井茶 绿茶龙井 2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			}
		]
	},{
		"id":3,
		"listName":"白茶",
		"list":[
			{
				"sid":1,
				"img":"image/bai1.jpg", 
				"name":"芳羽安吉白茶",
				"detail":"芳羽安吉白茶125克 雨前特级 2016年新茶叶 珍稀绿茶 正宗原产地",
				"naturePrice":"230.00",
				"nowPrice":"180.70",
				"href":""
			},{
				"sid":2,
				"img":"image/bai2.jpg", 
				"name":"福建福鼎白茶",
				"detail":"2008年福建福鼎白茶饼 福鼎白茶老寿眉茶饼福鼎老白茶叶贡眉350克",
				"naturePrice":"183.00",
				"nowPrice":"153.70",
				"href":""
			},{
				"sid":3,
				"img":"image/bai3.jpg", 
				"name":"雨前白茶",
				"detail":"2016新茶 正宗 安吉白茶高山绿茶 雨前白茶 茶叶 茶农直销",
				"naturePrice":"99.90",
				"nowPrice":"88.80",
				"href":""
			},{
				"sid":4,
				"img":"image/bai4.jpg", 
				"name":"高山老寿眉白茶",
				"detail":"福鼎白茶饼 陈年高山老寿眉白茶野生福建正宗福鼎老白茶贡眉茶叶",
				"naturePrice":"280.90",
				"nowPrice":"260.50",
				"href":""
			},{
				"sid":5,
				"img":"image/bai5.jpg", 
				"name":"安吉珍稀白茶",
				"detail":"清承堂 茶叶 2016新茶 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":6,
				"img":"image/bai6.jpg", 
				"name":"福鼎白茶",
				"detail":"特级茶叶白毫银针白茶饼 老白茶白牡丹",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":7,
				"img":"image/bai7.jpg", 
				"name":"芳羽安吉白茶",
				"detail":"雨前茶一级 正宗珍稀绿茶春茶 2016年新茶叶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":8,
				"img":"image/bai8.jpg", 
				"name":"5年福鼎白茶饼",
				"detail":"老寿眉福建福鼎正宗老白茶饼高山茶叶陈年",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":9,
				"img":"image/bai9.jpg", 
				"name":"正宗安吉白茶",
				"detail":"2016新茶叶雨前一级A 珍稀白茶绿茶250g",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":10,
				"img":"image/bai10.jpg", 
				"name":"福鼎白茶",
				"detail":"买一送一 2016年新茶寿眉高山茶 茶叶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":11,
				"img":"image/bai11.jpg", 
				"name":"品品香白茶",
				"detail":"福鼎白茶简语寿眉饼 已陈四年老白茶300克 2016年原料",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":12,
				"img":"image/bai12.jpg", 
				"name":"白牡丹茶饼",
				"detail":"福建福鼎白茶白牡丹茶饼 特级福鼎老白茶饼350克",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			}
		]
	},{
		"id":3,
		"listName":"药茶",
		"list":[
			{
				"sid":1,
				"img":"image/yao1.jpg", 
				"name":"茶中药茶",
				"detail":"平利绞股蓝龙须茶野生七叶绞股蓝茶叶福建龙岩正品2016新茶",
				"naturePrice":"199.00",
				"nowPrice":"169.70",
				"href":""
			},{
				"sid":2,
				"img":"image/yao2.jpg", 
				"name":"肾茶云南猫须草",
				"detail":"买2送1轩庆猫须草 肾茶云南猫须草500g 版纳猫须草 中药材花茶",
				"naturePrice":"168.00",
				"nowPrice":"158.70",
				"href":""
			},{
				"sid":3,
				"img":"image/yao3.jpg", 
				"name":"调理内分泌暖宫药茶",
				"detail":"月经不规律推迟不来量少宫寒痛经闭经补气血茶调理内分泌暖宫药茶",
				"naturePrice":"78.99",
				"nowPrice":"69.88",
				"href":""
			},{
				"sid":4,
				"img":"image/yao4.jpg", 
				"name":"增肥药茶消瘦增胖",
				"detail":"增肥增重长胖蛋白粉1kg|增肌瘦人产品粉丸食品|增肥药茶消瘦增胖",
				"naturePrice":"99.90",
				"nowPrice":"78.50",
				"href":""
			},{
				"sid":5,
				"img":"image/yao5.jpg", 
				"name":"女性备孕促孕药茶",
				"detail":"女性备孕促孕药茶促排卵好孕汤输卵管不通积水盆腔积液宫寒多囊",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":6,
				"img":"image/yao6.jpg", 
				"name":"鸡内金清石茶",
				"detail":"鸡内金清石茶金钱石草茶肾茶化石结石药茶胆囊养生排石颗粒冲剂茶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":7,
				"img":"image/yao7.jpg", 
				"name":"美国澳洲胶囊痛风药茶",
				"detail":"日本代购进口胜肽痛风灵 促进尿酸排泄 超美国澳洲胶囊痛风药茶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":8,
				"img":"image/yao8.jpg", 
				"name":"正天宁茶",
				"detail":"代用茶中草药调理缓解各种头痛偏头痛安神药茶买二送一",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":9,
				"img":"image/yao9.jpg", 
				"name":"五宝茶 ",
				"detail":"盒装 男士固本茶 男士养生茶固本强身 五宝药茶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":10,
				"img":"image/yao10.jpg", 
				"name":"滇鹤堂药茶",
				"detail":"蜂花前清茶男性保养恢复药茶 2.5g/袋 100袋/盒",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":11,
				"img":"image/yao11.jpg", 
				"name":"西湖牌龙井茶叶正宗雨前西湖龙井茶250g",
				"detail":"清承堂 茶叶 龙井茶 绿茶龙井 2016新茶 毛尖西湖 散装 醇香耐泡",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":12,
				"img":"image/yao12.jpg", 
				"name":"降 糖药 ",
				"detail":" 超食品及青钱柳 血糖高药茶三高药养生茶糖尿人用糖病药",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			}
		]
	},{
		"id":3,
		"listName":"花茶",
		"list":[
			{
				"sid":1,
				"img":"image/hua1.jpg", 
				"name":"菊花茶",
				"detail":"花茶 桐乡杭白菊 茶叶胎菊王 菊花花草茶",
				"naturePrice":"285.00",
				"nowPrice":"265.70",
				"href":""
			},{
				"sid":2,
				"img":"image/hua2.jpg", 
				"name":"艺福堂花草茶 ",
				"detail":"菊花茶 茶叶 菊博士胎菊 正宗桐乡杭白菊包邮 菊花",
				"naturePrice":"158.00",
				"nowPrice":"83.70",
				"href":""
			},{
				"sid":3,
				"img":"image/hua3.jpg", 
				"name":"菊花茶胎菊王",
				"detail":"菊花茶胎菊王桐乡杭白菊 正宗特级胎菊花茶 清热去火贡菊菊花500g",
				"naturePrice":"78.99",
				"nowPrice":"69.88",
				"href":""
			},{
				"sid":4,
				"img":"image/hua4.jpg", 
				"name":"胖大海菊花茶",
				"detail":"润喉茶利咽养喉化痰清嗓茶 嗓子痒嗓子疼 胖大海菊花茶 护嗓子",
				"naturePrice":"99.90",
				"nowPrice":"78.50",
				"href":""
			},{
				"sid":5,
				"img":"image/hua5.jpg", 
				"name":"山东平阴玫瑰花茶",
				"detail":"山东平阴玫瑰花茶 无硫玫瑰花蕾 散装袋装干玫瑰花茶叶 花草茶50g",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":6,
				"img":"image/hua6.jpg", 
				"name":"大朵玫瑰花茶花草茶",
				"detail":"头期新茶玫瑰花冠山东平阴重瓣玫瑰花冠茶 大朵玫瑰花茶花草茶35g",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":7,
				"img":"image/hua7.jpg", 
				"name":"莲子心金银花茶",
				"detail":"清心去火茶降火茶去肝火旺盛下火茶菊花茶清火茶莲子心金银花茶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":8,
				"img":"image/hua8.jpg", 
				"name":"云南特产花草茶",
				"detail":"洛神花茶 玫瑰茄 特级洛神花干 天然精选云南特产花草茶500g包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":9,
				"img":"image/hua9.jpg", 
				"name":"红山骏菊花茶",
				"detail":"红山骏菊花茶杭白菊桐乡正宗朵菊花贡菊 天然无硫杭州白菊花500克",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":10,
				"img":"image/hua10.jpg", 
				"name":"四月茶侬花草茶",
				"detail":"四月茶侬花草茶茉莉花茶茉莉花苞新鲜头花花茶叶",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":11,
				"img":"image/hua11.jpg", 
				"name":"7加蓝花草茶",
				"detail":"7加蓝花草茶 新鲜金桂烘干 2016新花 桂花茶 桂花干 干桂花茶包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":12,
				"img":"image/hua12.jpg", 
				"name":"艺福堂玫瑰花茶",
				"detail":"艺福堂玫瑰花茶 花草茶叶 法兰西胎玫瑰花茶包邮 干玫瑰花蕾80g装",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			}
		]
	},{
		"id":3,
		"listName":"茶具",
		"list":[
			{
				"sid":1,
				"img":"image/chajv1.jpg", 
				"name":"瓷恒堂茶具",
				"detail":"瓷恒堂茶具套装特价整套功夫茶具紫砂陶瓷冰裂四合一实木茶盘包邮",
				"naturePrice":"245.00",
				"nowPrice":"225.70",
				"href":""
			},{
				"sid":2,
				"img":"image/chajv2.jpg", 
				"name":"紫砂杯带盖茶杯",
				"detail":"悦目清心宜兴紫泥紫砂杯带盖茶杯 功夫茶具办公非陶瓷杯子全手工",
				"naturePrice":"358.00",
				"nowPrice":"283.70",
				"href":""
			},{
				"sid":3,
				"img":"image/chajv3.jpg", 
				"name":"紫砂杯宜兴原矿养生",
				"detail":"融昊 紫砂杯宜兴原矿养生泡茶水杯纯全手工茶杯内胆过滤杯茶具",
				"naturePrice":"78.99",
				"nowPrice":"69.88",
				"href":""
			},{
				"sid":4,
				"img":"image/chajv4.jpg", 
				"name":"茶海茶具泡茶公杯",
				"detail":"台湾76公道杯玻璃加厚茶漏大号分茶器功夫创意茶海茶具泡茶公杯",
				"naturePrice":"99.90",
				"nowPrice":"78.50",
				"href":""
			},{
				"sid":5,
				"img":"image/chajv5.jpg", 
				"name":"瓷恒堂茶具",
				"detail":"瓷恒堂茶具套装特价整套功夫茶具紫砂陶瓷冰裂四合一实木茶盘包邮",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":6,
				"img":"image/chajv6.jpg", 
				"name":"紫砂杯带盖茶杯",
				"detail":"悦目清心宜兴紫泥紫砂杯带盖茶杯 功夫茶具办公非陶瓷杯子全手工",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":7,
				"img":"image/chajv7.jpg", 
				"name":"邱公子金镶玉茶具",
				"detail":"邱公子金镶玉家用办公室喝茶陶瓷整套功夫茶具 茶杯茶壶盖碗套装",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":8,
				"img":"image/chajv8.jpg", 
				"name":"钧瓷茶具整套",
				"detail":"禹州神后 钧瓷茶具整套 手工制作 钧窑窑变 无柄双耳壶 大师之作",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":9,
				"img":"image/chajv9.jpg", 
				"name":"紫轩堂茶具",
				"detail":"紫轩堂 章淑煌95cc 宜兴紫砂壶纯全手工原矿小红泥小茶壶茶具",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":10,
				"img":"image/chajv10.jpg", 
				"name":"釉中彩步步高升杯套",
				"detail":"台湾自慢堂厦门草堂 釉中彩步步高升杯套组(6只套装）茶杯茶具",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":11,
				"img":"image/chajv11.jpg", 
				"name":"茶海茶台茶道套装",
				"detail":"茶具套装特价整套紫砂冰裂功夫茶具四合一茶盘茶海茶台茶道套装",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			},{
				"sid":12,
				"img":"image/chajv12.jpg", 
				"name":"台湾衡连茶具",
				"detail":"正品特价包邮 台湾衡连茶具 新螺纹铁壶 仿古铸铁茶壶ppp",
				"naturePrice":"108.00",
				"nowPrice":"105.50",
				"href":""
			}
		]
	}];
	var str2 = "";
	for(var i=0;i<data.length;i++){
		str2+='<li><a href="javascript:;">'+data[i].listName+'</a></li>';
	}
	oSmallList.innerHTML = str2;
	aSmallLi[0].className = "special";
	oProdList.innerHTML=createList(0);

	for(var i=0;i<aSmallLi.length;i++){
		aSmallLi[i].index = i;
		aSmallLi[i].onclick = function(){
			
			for(var j=0;j<aSmallLi.length;j++){
				aSmallLi[j].className = "";
			}
			this.className = "special";
			oProdList.innerHTML=createList(this.index);
			//CreatFn(this.index);
		}
	}
	function createList(n){
		var str = "";
		for(var i=0;i<data[n].list.length;i++){
			str+='<li><a href="../detail/detail.html"><img src="'+data[n].list[i]["img"]+'"/><h5>'+data[n].list[i]["name"]+'</h5><div></div><p class="p1">'+data[n].list[i]["detail"]+'</p></a><p><span>'+data[n].listName+'系列</span><br/><span class="sp1">原 价：</span><s>￥'+data[n].list[i]["naturePrice"]+'</s><br/><span class="sp1">现 价：</span><strong>￥'+data[n].list[i]["nowPrice"]+'</strong></p></li>';
		}
		return str;
	}
	
	//鼠标移入效果
	var aProLi = oProdList.getElementsByTagName('li');
	for(var i=0;i<aProLi.length;i++){
		aProLi[i].onmouseover = function(){
			this.style.border = "1px solid #FF6060";
		}
		aProLi[i].onmouseout = function(){
			this.style.border = "1px solid #ccc";
		}
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