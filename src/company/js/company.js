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
	

