  window.onload=function() {

    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'www.shanghaimemory.com/p_comment/comments.html', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        var responseData = JSON.parse(xhr.responseText);
        
        // responseData 是从后端返回的JSON对象数组
        for (var i = 0; i < responseData.length; i++) {
          var targetBox="no"+i;

          var obj = responseData[i];
          var string1 = obj.string1;
          var string2 = obj.string2;
          var string3 = obj.string3;
          
          // 在这里处理你的数据，可以将其显示在页面上或进行其他操作
          var p=document.getElementById(targetBox);
          p.getElementsByClassName("ename")=string1;
          p.getElementsByClassName("email")=string2;
          p.getElementsByClassName("econtent")=string3;

          console.log(string1, string2, string3);
        }
      } else {
        // 处理请求失败的情况
        console.error('请求失败：' + xhr.status);
      }
    };
    
    xhr.send();



  };
