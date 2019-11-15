//按钮样式
var btn1=document.createElement("button");
   btn1.innerHTML = "一号"
   btn1.onclick=chose1;
   btn1.setAttribute('style', 'width: 100px;height:50px;margin-left:700px;margin-top:50px');
   document.getElementById("filter-panel").appendChild(btn1);

var btn2=document.createElement("button");
   btn2.innerHTML = "二号"
   btn2.onclick=chose2;
   btn2.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(btn2);

var btn3=document.createElement("button");
   btn3.innerHTML = "三号"
   btn3.onclick=chose3;
   btn3.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(btn3);

var btn4=document.createElement("button");
   btn4.innerHTML = "无效"
   btn4.onclick=chose4;
   btn4.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(btn4);

var refresh=document.createElement("button");
   refresh.innerHTML = "刷新"
   refresh.onclick=refresh1;
   refresh.setAttribute('style', 'width: 100px;height:50px;margin-left:700px');
   document.getElementById("filter-panel").appendChild(refresh);
//转换数据
var value = null;
var splitValue = new Array();
var Num = ["一","二","三","四","五","六","七","八","九","十","百","千","万"];
var phoneNum=["零","幺","二","三","四","五","六","七","八","九"];
//刷新数据
function refresh1(){
	value = document.getElementById("com_mark_response_text_2").value;
	splitValue = value.split(";");
	console.log(splitValue);
	return;
}
//分割数据
function chose1(){
	if(splitValue[0] != null)
		writeData(splitValue[0]);
	else alert("请刷新数据");
		return;
}

function chose2(){
	
	if(splitValue[1] != null)
		writeData(splitValue[1]);
	else alert("请刷新数据");
		return;
	
}

function chose3(){
	if(splitValue[2] != null)
		writeData(splitValue[2]);
	else alert("请刷新数据");
		return;
	
}

function chose4(){
    var res ="<sil>";
    document.getElementById("com_mark_response_text_2").value = res;
} 

function writeData(data){
	var write = new Array();
	var temp = 0,sign = false,i = 0;
	write = data.split("");
	var n = write.length;
	if(write[n] == "儿")//检测儿字出现
		alert("注意有'儿'字在末尾出现");
	for(i;i<n;i++)//检测数字出现
	{
		if('0'<=write[i]<='9'){
			sign = true;
			break;
		}
	}
	if(sign){
		sign = confirm("该数字是否为电话号码?");
		if(sign){	
			for(i;i<n;i++){
				if('0'<=write[i]<='9'){
					temp = write[i] - '0';
					write[i] = phoneNum[temp];
				}
			}
		}
		else{
			for(i;i<n;i++){
				if('0'<=write[i]<='9'){
					if('0'<=write[i+1]<='9')
						write = translateToNum(write,i);
					else{
						temp = write[i] - '0';
						write[i] = phoneNum[temp];
						}
					}
				}
			}
		
		
		alert("已经自动转换,请自行确认一下是否正确");
	}
	
	
    var res = write.join("");
    document.getElementById("com_mark_response_text_2").value = res;
}
function translateToNum(write,i){
	return write;
}