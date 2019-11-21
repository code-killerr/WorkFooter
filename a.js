//按钮样式
var btn1=document.createElement("button");
   btn1.innerHTML = "一号"
   btn1.onclick=chose1;
   btn1.setAttribute('style', 'width: 100px;height:50px;margin-left:-150px;float:left;margin-top:250px');
   document.getElementById("filter-panel").appendChild(btn1);

var btn2=document.createElement("button");
   btn2.innerHTML = "二号"
   btn2.onclick=chose2;
   btn2.setAttribute('style', 'width: 100px;height:50px;margin-left:-150px;float:left;margin-top:300px');
   document.getElementById("filter-panel").appendChild(btn2);

var btn3=document.createElement("button");
   btn3.innerHTML = "三号"
   btn3.onclick=chose3;
   btn3.setAttribute('style', 'width: 100px;height:50px;margin-left:-150px;float:left;margin-top:350px');
   document.getElementById("filter-panel").appendChild(btn3);

var btn4=document.createElement("button");
   btn4.innerHTML = "无效"
   btn4.onclick=chose4;
   btn4.setAttribute('style', 'width: 100px;height:50px;margin-left:-150px;float:left;margin-top:400px');
   document.getElementById("filter-panel").appendChild(btn4);

var refresh=document.createElement("button");
   refresh.innerHTML = "刷新"
   refresh.onclick=refresh1;
   refresh.setAttribute('style', 'width: 100px;height:50px;margin-left:-150px;float:left;margin-top:450px');
   document.getElementById("filter-panel").appendChild(refresh);
var submitButton = document.getElementById("js_submit_btn");
var returnButton = document.getElementById("js_return_btn");
if(submitButton)
	submitButton.onclick=restFin;
if(returnButton)
	returnButton.onclick=restReturn;
//转换数据
var data = null;
var splitValue = new Array();
var Num = ["零","一","二","三","四","五","六","七","八","九","十","百","千","万"];
var phoneNum=["零","幺","二","三","四","五","六","七","八","九"];
//刷新数据并检测
function refresh1(){
	data = document.getElementById("com_mark_response_text_2").value;
	var write = data.split("");
	var n = write.length;
	var temp = 0,sign = false;
	var ErSign = false,NumSign = false;
	ErSign = /.*儿+.*/.test(data)//检测儿字出现
	NumSign = /.*[0-9]+.*/.test(data)//检测数字
	//检测运算符号
	for(i = 0;i < n;i++){
		if(write[i] == '+'){
			write[i] = '加';
		}
		else if(write[i] == '-'){
			write[i] = '减';
		}
		else if(write[i] == '='){
			write[i] = '等';
			write.splice(i+1,0,'于')
			n +=1;
		}
		else if(write[i] == '.'){
			write[i] = '点';
		}
	}
	//处理数字
	if(NumSign){
		var sign = confirm("该数字是否为非进制数字(电话号码，房间号等)?");
		if(sign){
			sign = confirm("该数字是否为电话号码?");
			if(sign)
				for(i=0;i<n;i++){
					if(/^[0-9]$/.test(write[i])){
						temp = write[i] - '0';
						write[i] = phoneNum[temp];
					}
				}
			else{
				for(i=0;i<n;i++){
					if(/^[0-9]$/.test(write[i])){
						temp = write[i] - '0';
						if(temp == 1)
							write[i] = '一';
						else
							write[i] = phoneNum[temp];
					}
				}
			}
		}
		else{
			for(i=0;i<n;i++){
				if(/^[0-9]$/.test(write[i])){
					if(write[i+1]!=null&&/^[0-9]$/.test(write[i+1])){
						write = translateToNum(write,i);
                                                                                                n = write.length;
                                                                                }
					else{
						temp = write[i] - '0';
						write[i] = Num[temp];
						}
					}
				}
			}	
		alert("已经自动转换,请自行确认一下是否正确");
	}
	if(ErSign){
		alert("请注意有‘儿’字出没，小心整改");
	}
	data = write.join("");
	splitValue = data.split(";");
	console.log(splitValue);
	chose1();
	return;
}
//分割数据
function chose1(){
	if(splitValue[0] != null)
		writeData(splitValue[0]);
	else alert("无一号信息请刷新数据");
		return;
}

function chose2(){
	
	if(splitValue[1] != null)
		writeData(splitValue[1]);
	else alert("无二号信息请刷新数据");
		return;
	
}

function chose3(){
	if(splitValue[2] != null)
		writeData(splitValue[2]);
	else alert("无三号信息请刷新数据");
		return;
	
}
//数据无效
function chose4(){
    var res ="<sil>";
    document.getElementById("com_mark_response_single_1").value = "102";
    document.getElementById("com_mark_response_single_1").type = "";
    document.getElementById("com_mark_response_single_3").value = "302";
    document.getElementById("com_mark_response_single_3").type = "";
    document.getElementById("com_mark_response_text_2").value = res;
}
//输出数据
function writeData(write){
    document.getElementById("com_mark_response_text_2").value = write;
}
//预留进制转换接口
function translateToNum(write,i){
var temp = 0;
    if(write[i] == '1'){
          write[i] = '十';
          if(write[i+1]!='0'){
              temp = write[i+1] - '0';
              write[i+1] = Num[temp];
            }
         else{write.splice(i+1,1,'');}
    }
    else{
        temp = write[i] - '0';
        write[i] = Num[temp];
        temp = write[i+1] - '0';
        if(temp!=0){
            write.splice(i+1,0,'十');
            write[i+2] = Num[temp];
        }
        else{write[i+1] = '十';}
    }
    return write;
}
//提交按钮接口
function restFin(){
    //检测是否忽略选择选项
    data = document.getElementById("com_mark_response_text_2").value;
    if( /.*;+.*/.test(data))
        alert("注意选择框中存在分号");
    rest();
}
//预留归还题目功能接口
function restReturn(){
    rest();
}
function rest(){
    data = null;
    splitValue = new Array();
}
