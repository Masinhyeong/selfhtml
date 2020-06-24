module.exports={
  HTML:function(list, description){
    console.log(description);
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
            .main2 {
              overflow: hidden;
              padding: 2em 0em 5em 2em;
              background: #FF
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
                    ${description}
                    </body>
                    </html>
                    `;

  },list:function(filelist){
    var list = `<ul>`;
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
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
  }, HTML2:function(list,b,c,boat,motel,pss,mk){
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
      <script>
        function initialize()
        {
         
          var mapProp = {
            center: new google.maps.LatLng(${b},${c}),
            zoom:9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(${b},${c}),
            map: map,
            title: 'Seoul Station'
        });

          
          
          var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
          ${mk}
        }

        google.maps.event.addDomListener(window, 'load', initialize);
        </script>
        <style>
        div.boxer { width:245px; height:90px; padding:10px; border:5px solid green; background-color:#ffeeee; }
  .main2 {
    overflow: hidden;
    padding: 2em 0em 5em 2em;
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
  <select name='도'>
      <option value='' selected>-- 선택 --</option>
      <option value='apple'>경기도</option>
      <option value='banana'>전라남도</option>
      <option value='lemon'>전라북도</option>
   </select>
  <select name='시'>
    <option value='' selected>-- 선택 --</option>
    <option value='apple'>전주</option>
    <option value='banana'>군산</option>
    <option value='lemon'>익산</option>
  </select>
  <form id="myform" action="/page/information" method="post">
    <select name='locate'>
        <option value='' selected>-- 선택 --</option>
        <option value='모항'>모항</option>
        <option value='줄포'>줄포</option>
        <option value='왕포'>왕포</option>
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


  }
}
