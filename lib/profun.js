module.exports={
 list:function(){
    var list = `<ul>
    <li><a href="/page/information">information</a></li>
    <li><a href="/page/Q&A">Q&A</a></li>
    </ul>`;
    return list;
  },MHTML:function(list){
    return `
    <!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Night Fishing</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900|Quicksand:400,700|Questrial" rel="stylesheet" />
    <link href="default.css" rel="stylesheet" type="text/css" media="all" />
    <link href="fonts.css" rel="stylesheet" type="text/css" media="all" />

    </head>
    <body>
    <div id="header-wrapper">
      <div id="header" class="container">
        <div id="logo">
          <h1><a href="/">밤낚시</a></h1>
        </div>
        <div id="menu">
          ${list}
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div id="banner" class="container"><img src="images/banner.jpg" width="1200" height="500" alt="" /></div>
      <div id="welcome" class="container">

    <div class="title">
        <h2>환영합니다</h2>
        </div>
        <p>주변의 낚시정보를 제공받으세요 </p>
      </div>
      <div id="three-column" class="container">
        <div><span class="arrow-down"></span></div>
        <div id="tbox1">
          <div class="title">
            <h2>머털낚시</h2>
          </div>
          <a href="https://www.wfish.co.kr/main?mobile_conn=off" class="button">홈페이지 바로가기</a> </div>
        <div id="tbox2">
          <div class="title">
            <h2>레드펄스</h2>
          </div>
          <a href="http://www.redpulsemall.kr/" class="button">홈페이지 바로가기</a> </div>
        <div id="tbox3">
          <div class="title">
            <h2>물반 고기반</h2>
          </div>
          <a href="https://www.moolban.com/" class="button">홈페이지 바로가기</a> </div>
      </div>
    </div>
    <div id="footer">
      <div class="container">
        <div class="fbox1">
          <span>군산대학교 디지털 정보관
          <br />IST연구실</span>
        </div>
        <div class="fbox1">
          <span>
            Telephone: 010-2933-8568
          </span>
        </div>
        <div class="fbox1">
          <span>tlsguddk1229@gmail.com</span>
        </div>
      </div>
    </div>
    <div id="copyright">
      <p>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
    </div>

    </body>
    </html>
    `;
  },QHTML2:function(list,gesi){
    return `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Night Fishing</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900|Quicksand:400,700|Questrial" rel="stylesheet" />
    <link href="../default.css" rel="stylesheet" type="text/css" media="all" />
    <link href="../fonts.css" rel="stylesheet" type="text/css" media="all" />
        <style>

.gune {

width: 400px;
height: 500px;
}


.gune2 {

  width: 600px;
  height: 700px;
  }
          
          .wrapper {

            overflow: hidden;
            padding-top:50px;
            padding-left:400px;
            background: #FF
        }
        form{
          display : inline;
            }
          .con{
            width: 400px;
          }
            #ht2wrapper{
            display: grid;
            grid-template-columns : 600px 1fr;
            }
            
            #target {
                border: 1px solid black;
                width: 300px;
                height: 100px;
                overflow: scroll;
            }
            table.type09 {
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;

}
table.type09 thead th {
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: #369;
    border-bottom: 3px solid #036;
}
table.type09 tbody th {
    width: 150px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    background: #f3f6f7;
}
table.type09 td {
    width: 350px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
}
        </style>
              </head>
              <body>
              <div id="header-wrapper">
                
                <div id="header" class="container">
                  <div id="logo">
                    <h1><a href="/">밤낚시</a></h1>
                  </div>
                  <div id="menu">
                    ${list}
                  </div>
                  </div>
                  </div>
                  <div class="wrapper">
                    <div class = "gune">
                    <form action="/page/Q&A" method="post">
                        이름: <input type="text" name="userName"><p>
                        
                        건의종류:
                        <input type="radio" name="gender" value="지역추천" checked>지역추천
                        <input type="radio" name="gender" value="사업등록">사업등록<p>
                        
                        <p>건의사항:<p></p>
                        <textarea name="comment" rows="5" cols="40"></textarea>
                        <p>
                        현재시간 : <input type="datetime-local" name = "currentDatetime" id='currentDatetime'/><p>
                          <script>
                            document.getElementById('currentDatetime').value= new Date().toISOString(). slice(0, 16);
                          </script>
                        <input type="submit" value="건의">
                        </form>
                        </body>
                       </html>
                      </div>
                      <div class = "gune2">
                        <table class="type09">
                          <thead>
                          <tr>
                              <th scope="cols">작성자</th>
                              <th scope="cols">건의사항</th>
                              <th scope="cols">내용</th>
                              <th scope="cols">시간</th>
                          </tr>
                          </thead>
                          <tbody>
                          ${gesi}
                          </tbody>
                      </table>
                      </div>
                  </div>
                  <div id="footer">
                    <div class="container">
                      <div class="fbox1">
                        <span>군산대학교 디지털 정보관
                        <br />IST연구실</span>
                      </div>
                      <div class="fbox1">
                        <span>
                          Telephone: 010-2933-8568
                        </span>
                      </div>
                      <div class="fbox1">
                        <span>tlsguddk1229@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  <div id="copyright">
                    <p>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
                  </div>
                  
                  </body>
                  </html>
                  `;
  },QHTML:function(list){
    return `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Night Fishing</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900|Quicksand:400,700|Questrial" rel="stylesheet" />
    <link href="../default.css" rel="stylesheet" type="text/css" media="all" />
    <link href="../fonts.css" rel="stylesheet" type="text/css" media="all" />
        <style>

.gune {

width: 400px;
height: 400px;
}


.gune2 {

  width: 600px;
  height: 700px;
  }
          
          .wrapper {

            overflow: hidden;
            padding-top:50px;
            padding-left:400px;
            background: #FF
        }
        form{
          display : inline;
            }
          .con{
            width: 400px;
          }
            #ht2wrapper{
            display: grid;
            grid-template-columns : 600px 1fr;
            }
            
            #target {
                border: 1px solid black;
                width: 300px;
                height: 100px;
                overflow: scroll;
            }
            table.type09 {
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;

}
table.type09 thead th {
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: #369;
    border-bottom: 3px solid #036;
}
table.type09 tbody th {
    width: 150px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    background: #f3f6f7;
}
table.type09 td {
    width: 350px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
}
        </style>
              </head>
              <body>
              <div id="header-wrapper">
                
                <div id="header" class="container">
                  <div id="logo">
                    <h1><a href="/">밤낚시</a></h1>
                  </div>
                  <div id="menu">
                    ${list}
                  </div>
                  </div>
                  </div>
                  <div class="wrapper">
                    <div class = "gune">
                    <form action="/page/Q&A" method="post">
                        이름: <input type="text" name="userName"><p>
                        
                        건의종류:
                        <input type="radio" name="gender" value="location" checked>지역추천
                        <input type="radio" name="gender" value="company">사업등록<p>
                        
                        <p>건의사항:<p></p>
                        <textarea name="comment" rows="5" cols="40"></textarea>
                        <p>
                        <input type="submit" value="건의">
                        </form>
                        </body>
                       </html>
                      </div>
                      <div class = "gune2">
                        <table class="type09">
                          <thead>
                          <tr>
                              <th scope="cols">작성자</th>
                              <th scope="cols">건의사항</th>
                              <th scope="cols">내용</th>
                          </tr>
                          </thead>
                          <tbody>
                          </tbody>
                      </table>
                      </div>
                  </div>
                  <div id="footer">
                    <div class="container">
                      <div class="fbox1">
                        <span>군산대학교 디지털 정보관
                        <br />IST연구실</span>
                      </div>
                      <div class="fbox1">
                        <span>
                          Telephone: 010-2933-8568
                        </span>
                      </div>
                      <div class="fbox1">
                        <span>tlsguddk1229@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  <div id="copyright">
                    <p>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
                  </div>
                  
                  </body>
                  </html>
                  `;
  }, HTML2:function(list,a,b,c,boat,motel,pss,mk){
    return `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Night Fishing</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900|Quicksand:400,700|Questrial" rel="stylesheet" />
    <link href="../default.css" rel="stylesheet" type="text/css" media="all" />
    <link href="../fonts.css" rel="stylesheet" type="text/css" media="all" />
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script type="text/javascript">
      function doChange(srcE, targetId){
          var val = srcE.options[srcE.selectedIndex].value;
          var targetE = document.getElementById(targetId);
          removeAll(targetE);
      
          if(val == 'jb'){
              addOption('군산', targetE);
              addOption('전주', targetE);
              addOption('부안', targetE);
          }
          else if(val == 'jn'){
              addOption('목포', targetE);
              addOption('신안', targetE);
              addOption('진도', targetE);
              addOption('완도', targetE);
          }
          else if(val == 'cb'){
              addOption('충주', targetE);
              addOption('제천', targetE);
              addOption('괴산', targetE);
          }
          else if(val == 'cn'){
              addOption('서천', targetE);
              addOption('보령', targetE);
              addOption('홍성', targetE);
              addOption('태안', targetE);
          }
          else if(val == '군산'){
              addOption('야미도', targetE);
              addOption('선유도', targetE);
              addOption('비응', targetE);
              addOption('무녀도', targetE);
          }
          else if(val == '부안'){
              addOption('줄포', targetE);
              addOption('왕포', targetE);
              addOption('남선유도', targetE);
              addOption('모항', targetE);
          }
      }
      function doCha(srcE){
          var val = srcE.options[srcE.selectedIndex].value;
          removeAll(targetE);
          
      
          
      }
      
      function addOption(value, e){
          var o = new Option(value);
          try{
              e.add(o);
          }catch(ee){
              e.add(o, null);
          }
      }
      
      function removeAll(e){
          for(var i = 0, limit = e.options.length; i < limit - 1; ++i){
              e.remove(1);
          }
      }
      </script>
    <script>
      function initialize()
      {
       
        var mapProp = {
          center: new google.maps.LatLng(${b},${c}),
          zoom:15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        

        
        
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(${b},${c}),
          map: map,
          title: '${a}'
      });
        ${mk}
      }

      google.maps.event.addDomListener(window, 'load', initialize);
      </script>
      <style>
     
      div.boxer { width:245px; height:90px; padding:10px; border:5px solid green; background-color:#ffeeee; }
.main2 {
    padding-top:50px;
  padding-left:400px;
  overflow: hidden;
  background: #FFF;
}

.con{
  width: 400px;
}
  #ht2wrapper{
 
    display: grid;
    

  grid-template-columns : 600px 1fr;
  }
  
  #target {
      border: 1px solid black;
      width: 300px;
      height: 300px;
      overflow: scroll;
  }
  form{
  display : inline;
}
</style>
    </head>
    <body>
    <div id="header-wrapper">
      <div id="header" class="container">
        <div id="logo">
          <h1><a href="/">밤낚시</a></h1>
        </div>
        <div id="menu">
          ${list}
        </div>
        </div>
        </div>
        <div class="main2">
<div id = ht2wrapper>
<div class="con">
  <div>
      <select name="selOne" id="selOne" onchange="doChange(this, 'selTwo')">
          <option value="default">도</option>
          <option value="jb">전라북도</option>
          <option value="jn">전라남도</option>
          <option value="cb">충청북도</option>
          <option value="cn">충청남도</option>
      </select>
      <select name="selTwo" id="selTwo" onchange="doChange(this, 'selThree')">
          <option value="default">시</option>
      </select>
  <form id="myform" action="/page/information" method="post">
      <select name="selThree" id="selThree" onchange="doCha(this)">
          <option value="default">지역</option>
      </select>
  <input type="submit" value="검색">
  </form>
  </div>
<div id="googleMap" style="width:550px;height:550px;"></div><br>  
</div>

<div class="con">
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="gbm_free_banner" width="204" height="213" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"> <param name="movie" value="http://www.153weather.com/swf/free_cur_weather2.swf" /> <param name="quality" value="high" /> <param name="bgcolor" value="#869ca7" /> <param name="allowScriptAccess" value="sameDomain" /> <param name="wmode" value="transparent" /> <param name="flashvars" value="bg=7&font=malgun&regid=4513051500" /> <embed src="/swf/free_cur_weather2.swf" quality="high" bgcolor="#869ca7" width="204" height="213" name="gbm_free_banner" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"> </embed> </object> 
<h2>편의시설</h2>
  <div id=target>
  ${pss}
  </div>
  <h2>배</h2>
  <div id=target>
  ${boat}
</div>
<h2>숙박업소</h2>
<div id=target>
${motel}
</div>
</div>
</div>
</div>
<div id="footer">
<div class="container">
  <div class="fbox1">
    <span>군산대학교 디지털 정보관
    <br />IST연구실</span>
  </div>
  <div class="fbox1">

    <span>
      Telephone: 010-2933-8568
    </span>
  </div>
  <div class="fbox1">
    <span>tlsguddk1229@gmail.com</span>
  </div>
</div>
</div>
<div id="copyright">
<p>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
</div>
        </body>
        </html>
          `;


  }, HTML3:function(list){
    return `
    <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Night Fishing</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900|Quicksand:400,700|Questrial" rel="stylesheet" />
<link href="../default.css" rel="stylesheet" type="text/css" media="all" />
<link href="../fonts.css" rel="stylesheet" type="text/css" media="all" />
<script src="http://maps.googleapis.com/maps/api/js"></script>
<script type="text/javascript">
    function doChange(srcE, targetId){
        var val = srcE.options[srcE.selectedIndex].value;
        var targetE = document.getElementById(targetId);
        removeAll(targetE);
    
        if(val == 'jb'){
            addOption('군산', targetE);
            addOption('전주', targetE);
            addOption('부안', targetE);
        }
        else if(val == 'jn'){
            addOption('목포', targetE);
            addOption('신안', targetE);
            addOption('진도', targetE);
            addOption('완도', targetE);
        }
        else if(val == 'cb'){
            addOption('충주', targetE);
            addOption('제천', targetE);
            addOption('괴산', targetE);
        }
        else if(val == 'cn'){
            addOption('서천', targetE);
            addOption('보령', targetE);
            addOption('홍성', targetE);
            addOption('태안', targetE);
        }
        else if(val == '군산'){
            addOption('야미도', targetE);
            addOption('선유도', targetE);
            addOption('비응', targetE);
            addOption('무녀도', targetE);
        }
        else if(val == '부안'){
            addOption('줄포', targetE);
            addOption('왕포', targetE);
            addOption('남선유도', targetE);
            addOption('모항', targetE);
        }
    }
    function doCha(srcE){
        var val = srcE.options[srcE.selectedIndex].value;
        removeAll(targetE);
        
    
        
    }
    
    function addOption(value, e){
        var o = new Option(value);
        try{
            e.add(o);
        }catch(ee){
            e.add(o, null);
        }
    }
    
    function removeAll(e){
        for(var i = 0, limit = e.options.length; i < limit - 1; ++i){
            e.remove(1);
        }
    }
    </script>
<script>
  function initialize()
  {
   
    var mapProp = {
      center: new google.maps.LatLng(35.946029, 126.682024),
      zoom:12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(35.946029, 126.682024),
      map: map,
      title: 'Seoul Station'
  });

    
    
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
  }

  google.maps.event.addDomListener(window, 'load', initialize);
  </script>
  <style>
  div.boxer { width:245px; height:90px; padding:10px; border:5px solid green; background-color:#ffeeee; }
.main2 {
overflow: hidden;
padding-top:50px;
padding-left:400px;
background: #FFF;
}

.con{
    float:left;
    width: 500px;

}
#ht2wrapper{
display: grid;
grid-template-columns : 600px 1fr;
}

#target {
  border: 1px solid black;
  width: 300px;
  height: 300px;
  overflow: scroll;
}
#myform{
    display : inline;
}
</style>
</head>
<body>
<div id="header-wrapper">
  <div id="header" class="container">
    <div id="logo">
      <h1><a href="/">밤낚시</a></h1>
    </div>
    <div id="menu">
      ${list}
    </div>
    </div>
    </div>
    <div class="main2">
<div id = ht2wrapper>
<div class="con">
<div>
    <select name="selOne" id="selOne" onchange="doChange(this, 'selTwo')">
        <option value="default">도</option>
        <option value="jb">전라북도</option>
        <option value="jn">전라남도</option>
        <option value="cb">충청북도</option>
        <option value="cn">충청남도</option>
    </select>
    <select name="selTwo" id="selTwo" onchange="doChange(this, 'selThree')">
        <option value="default">시</option>
    </select>
<form id="myform" action="/page/information" method="post">
    <select name="selThree" id="selThree" onchange="doCha(this)">
        <option value="default">지역</option>
    </select>
<input type="submit" value="검색">
</form>
</div>
<div id="googleMap" style="width:550px;height:550px;"></div><br>  
</div>

<div class="con">
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="gbm_free_banner" width="204" height="213" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"> <param name="movie" value="http://www.153weather.com/swf/free_cur_weather2.swf" /> <param name="quality" value="high" /> <param name="bgcolor" value="#869ca7" /> <param name="allowScriptAccess" value="sameDomain" /> <param name="wmode" value="transparent" /> <param name="flashvars" value="bg=7&font=malgun&regid=4513051500" /> <embed src="/swf/free_cur_weather2.swf" quality="high" bgcolor="#869ca7" width="204" height="213" name="gbm_free_banner" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"> </embed> </object> 
<h2>편의시설</h2>
<div id=target>

</div>
<h2>배</h2>
<div id=target>

</div>
<h2>숙박업소</h2>
<div id=target>

</div>
</div>
</div>
</div>
<div id="footer">
<div class="container">
<div class="fbox1">
<span>군산대학교 디지털 정보관
<br />IST연구실</span>
</div>
<div class="fbox1">

<span>
  Telephone: 010-2933-8568
</span>
</div>
<div class="fbox1">
<span>tlsguddk1229@gmail.com</span>
</div>
</div>
</div>
<div id="copyright">
<p>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
</div>
    </body>
    </html>
          `;


  }
}


