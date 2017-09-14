window.onload=function(){
	//nav点击
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

	//con2中效果
	var oCon2Box2 = document.getElementById("con2_box2");
	var oCon2List = oCon2Box2.getElementsByTagName("ul")[0];
	var oCon2Box3 = document.getElementById("con2_box3");
	var aCon2List2 = oCon2Box3.getElementsByTagName('ul');
	var arrImg = ["image/shoucha1.jpg","image/shoucha2.jpg","image/shoucha3.jpg","image/shoucha4.jpg","image/shoucha5.jpg","image/shoucha6.jpg"];
	for(var i=0;i<6;i++){
		var oLi = document.createElement("li");
		oLi.style.WebkitTransform = "rotate("+i*60+"deg)";
		var oImg = document.createElement("img");
		oImg.src = arrImg[i];
		oLi.appendChild(oImg);
		oCon2List.appendChild(oLi);
	}
	var aCon2Li = oCon2List.getElementsByTagName('li');
	var aCon2Img = oCon2List.getElementsByTagName('img');
	aCon2Li[0].className = "li0";
	aCon2List2[0].style.display = "block";
	for(var i=0;i<aCon2Li.length;i++){
		aCon2Li[i].index = i;
		aCon2Li[i].onclick = function(){
			for(var j=0;j<aCon2Li.length;j++){
				aCon2Li[j].className = "";
				aCon2List2[j].style.display = "none";
			}
			oCon2List.style.WebkitTransform = "rotate("+((6-this.index)*60+135)+"deg)";
			console.log(oCon2List.style.WebkitTransform);
			this.className = "li0";
			aCon2List2[this.index].style.display = "block";
			oCon2List.style.WebkitTransform = "rotate("+((6-this.index)*60+135)+"deg)";
			aCon2List2[this.index].style.WebkitTransform = "scale(0.5)"; 
			aCon2List2[this.index].style.WebkitAnimation = "scale 1s";
			aCon2List2[this.index].addEventListener("animationend",function(){
				this.style.WebkitTransform = "scale(1)"; 
			},false);
		}
	}
	scrollH();
	window.onscroll = function(){
		scrollH();
	}
	function scrollH(){
		var scrollT  = document.body.scrollTop||document.documentElement.scrollTop;
		var clientH = document.documentElement.clientHeight;
		/*console.log(scrollT,oCon2Box2.parentNode.offsetTop);*/
		if( scrollT>= (oCon2Box2.parentNode.offsetTop-clientH/2)){
			move(oCon2Box3,3,331,"height");
		}
	}
	function move(obj,dis,target,attr,fn){
		dis = parseInt(getStyle(obj,attr))<target ?  dis : -dis;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var n = parseInt(getStyle(obj,attr)) + dis;
			if(n>target&&dis>0 || n<target&&dis<0){
				n=target;
			}
			obj.style[attr] = n + "px";
			if(n==target){
				clearInterval(obj.timer);
				fn&&fn();
			}
		},40);
	}
	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
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
					if(n%3==0){
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
	

