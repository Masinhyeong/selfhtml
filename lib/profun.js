module.exports={
  HTML:function(list, description){
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
            center: new google.maps.LatLng(37.250943, 127.028344),
            zoom:9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var mapProp2 = {
            center: new google.maps.LatLng(37.250943, 127.028344),
            zoom:9,
            mapTypeId: google.maps.MapTypeId.SATELLITE
          };
          var mapProp3 = {
            center: new google.maps.LatLng(37.250943, 127.028344),
            zoom:9,
            mapTypeId: google.maps.MapTypeId.HYBRID
          };
          var mapProp4 = {
            center: new google.maps.LatLng(37.250943, 127.028344),
            zoom:9,
            mapTypeId: google.maps.MapTypeId.TERRAIN
          };
          var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
          var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
          var map3 = new google.maps.Map(document.getElementById("googleMap3"),mapProp3);
          var map4 = new google.maps.Map(document.getElementById("googleMap4"),mapProp4);
        }

        google.maps.event.addDomListener(window, 'load', initialize);
        </script>
        <style>
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


  },MHTML(list){
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
          <p>홈페이지 바로가기</p>
          <a href="#" class="button">Learn More</a> </div>
        <div id="tbox2">
          <div class="title">
            <h2>레드펄스</h2>
          </div>
          <p>홈페이지 바로가기</p>
          <a href="#" class="button">Learn More</a> </div>
        <div id="tbox3">
          <div class="title">
            <h2>물반 고기반</h2>
          </div>
          <p>바로가기</p>
          <a href="#" class="button">Learn More</a> </div>
      </div>
    </div>
    <div id="footer">
      <div class="container">
        <div class="fbox1">
        <span class="icon icon-map-marker"></span>
          <span>군산대학교 디지털 정보관
          <br />IST연구실</span>
        </div>
        <div class="fbox1">
          <span class="icon icon-phone"></span>
          <span>
            Telephone: 010-2933-8568
          </span>
        </div>
        <div class="fbox1">
          <span class="icon icon-envelope"></span>
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
