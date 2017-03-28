<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Captain Planet: The Game</title>

  <!-- Bootstrap File -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  <!-- JQuery -->
  <script src="https://code.jquery.com/jquery.js"></script>

</head>
<body>

  <!-- Overall Bootstrap Grid -->
  <div class="container">

    <!-- Jumbotron with Title -->
    <div class="jumbotron">
      <h1 class="text-center"><strong>Captain Planet: The Game!</strong></h1>
      <h4 class="text-center">Rated M for Mature</h4>
      <hr>
      <div class="text-center">
        <button class="btn btn-warning btn-xs theme-button"><span class="glyphicon glyphicon-music"></span> Play Theme!</button>
        <button class="btn btn-default btn-xs pause-button"><span class="glyphicon glyphicon-pause"></span> Pause Song</button>
      </div>

    </div>
    <div class="row">

      <!-- Left Panel -->
      <div class="col-lg-6">

        <!-- Controls (Superpower Grow/Shrink)-->
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Superpowers - Change Sizes!</h3>
          </div>
          <div class="panel-body">
            <div class="text-center">
              <button class="btn btn-default btn-lg normal-button"><span class="glyphicon glyphicon-ok-sign"></span> Normal</button>
              <button class="btn btn-primary btn-lg grow-button"><span class="glyphicon glyphicon-plus-sign"></span> Grow</button>
              <button class="btn btn-danger btn-lg shrink-button"><span class="glyphicon glyphicon-minus-sign"></span> Shrink</button>
            </div>
          </div>
        </div>

        <!-- Controls (Superpower Visibility) -->
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Superpowers - Invisiblity!</h3>
          </div>
          <div class="panel-body">
            <div class="text-center">
              <button class="btn btn-default btn-lg vis-button"><span class="glyphicon glyphicon-eye-open"></span> Visible</button>
              <button class="btn btn-info btn-lg invis-button"><span class="glyphicon glyphicon-eye-close"></span> Invisible</button>
            </div>
          </div>
        </div>

        <!--/***************************************************************/-->
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Superpowers - Turn into Hello Kitty</h3>
          </div>
          <div class="panel-body">
            <div class="text-center">
              <button class="btn btn-default btn-lg hellokitty"><span class="glyphicon glyphicon-eye-open"></span> Captin Planet</button>
              <button class="btn btn-info btn-lg planet"><span class="glyphicon glyphicon-eye-close"></span> Hello Kitty</button>
            </div>
          </div>
        </div>

        <!-- Controls (Superpower Move Controls) -->
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Move Controls</h3>
          </div>
          <div class="panel-body">
            <div class="text-center">
              <button class="btn btn-default btn-lg up-button"><span class="glyphicon glyphicon-arrow-up"></span></button>
            </div>
            <div class="text-center">
              <button class="btn btn-default btn-lg left-button"><span class="glyphicon glyphicon-arrow-left"></span></button>
              <button class="btn btn-default btn-lg down-button"><span class="glyphicon glyphicon-arrow-down"></span></button>
              <button class="btn btn-default btn-lg right-button"><span class="glyphicon glyphicon-arrow-right"></span></button>
            </div>
            <br>
            <div class="text-center">
              <button class="btn btn-default btn-lg back-button"><span class="glyphicon glyphicon-comment"></span> Go Planet!</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Panel (Captain Planet Hero)-->
      <div class="col-lg-6">

        <!-- Captain Planet Image -->
        <img src="http://screencrush.com/442/files/2013/06/captain-planet-01.jpg" alt="" class="img captain-planet" style="position:absolute; top:50px; left: 80px; z-index: -20; height: 300px">

        <!--- Captain Kitty Image ---->
        <img src="http://3.bp.blogspot.com/-RjK_rOLqtug/Tkto1rt57AI/AAAAAAAAEiU/hPRO37kAaoE/s1600/%255Banimepaper.net%255Dpicture-standard-anime-hello-kitty-hello-kitty-superhero-80969-purpledragon42-preview-b227d708uuuuu.jpg alt="" class="img hello-kitty" style="position:absolute; top:50px; left: 80px; z-index: -20; height: 300px">
      </div>
    </div>
  </div>

  <script>

    // JavaScript function that wraps everything
    $(document).ready(function() {

      // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "Assets/captainplanet24.mp3");



      // Theme Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });

      $(".pause-button").on("click", function() {
        audioElement.pause();
      });

      // Size Buttons
      $(".normal-button").on("click", function() {
        $(".captain-planet").animate({ height: "300px" });
      });

      $(".grow-button").on("click", function() {
        $(".captain-planet").animate({ height: "500px" });
      });

      $(".shrink-button").on("click", function() {
        $(".captain-planet").animate({ height: "100px" });
      });

      // Visibility Buttons
      $(".vis-button").on("click", function() {
        $(".captain-planet").animate({ opacity: "1" });
      });

      $(".invis-button").on("click", function() {
        $(".captain-planet").animate({ opacity: "0.05" });
      });

          $(function() {
      $('.planet').click(function(){
        $(".hello-kitty").animate({ opacity: "1.0" });
      });
      });

      $(function() {
      $('.hellokitty').click(function(){
        $(".hello-kitty").animate({ opacity: "0.00" });
      });
     });
   


      // Move Buttons
      $(".up-button").on("click", function() {
        $(".captain-planet").animate({ top: "-=200px" }, "normal");
      });

      $(".down-button").on("click", function() {
        $(".captain-planet").animate({ top: "+=200px" }, "normal");
      });

      $(".left-button").on("click", function() {
        $(".captain-planet").animate({ left: "-=200px" }, "normal");
      });

      $(".right-button").on("click", function() {
        $(".captain-planet").animate({ left: "+=200px" }, "normal");
      });

      $(".back-button").on("click", function() {
        $(".captain-planet").animate({ top: "50px", left: "80px" }, "fast");
      });

      // Move Buttons (Keyboard Down)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 40:
            $(".captain-planet").animate({ top: "+=200px" }, "normal");
        }
      });

      // Move Buttons (Keyboard Right)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 39:
            $(".captain-planet").animate({ left: "+=200px" }, "normal");
        }
      });

      // Move Buttons (Keyboard Up)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 38:
            $(".captain-planet").animate({ top: "-=200px" }, "normal");
        }
      });

      // Move Buttons (Keyboard Left)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 37:
            $(".captain-planet").animate({ left: "-=200px" }, "normal");
        }
      });
    });

  </script>

</body>
</html>