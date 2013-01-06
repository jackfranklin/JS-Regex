(function() {
  "use strict";




  $(function() {
     // in order to prevent method calls per keyup, setting a timeout
     // that can be cleared if a keyup happens rapidly
    var time;

    var input = $("input[name='regexp']");
    var match = $("textarea");
    var inputOpts = $("input[name='regexpopts']");

    
    input.add(inputOpts).add(match).on("keyup", function() {
      if (time) {
        clearTimeout(time);
      }

      time = setTimeout(function() {
        $(".error").remove();
        $(".regex-used").remove();
        
        try {
          change();
        } catch( e ) {
          $(".output h4").after("<span class='error'><code>" + e.message + "</code></span>")
        }

      }, 400);
    });

    var updateResults = function(matches) {
      var list = $(".output ul");
      $(".output div").hide();
      var li;
      list.html("");
      for(var i = 0; i < matches.length; i++) {
        // get all the groups in the match to its own array
        var groups = [];
        // got to be j = 1, as 0 is the entire match, we only want groups
        for(var j = 1; j < matches[i].length; j++) {
          groups.push(matches[i][j]);
        };
        // start building the list item
        li = "<li><span class='matched-text'>";
        li += matches[i][0];
        li += "</span>";
        // add all the groups
        li += "<ul class='matched-groups'>";
        for(var y = 0; y < groups.length; y++) {
          li += "<li>Group " + (y+1) + ": ";
          li += "<span class='matched-group'>";
          li += groups[y];
          li += "</span>";
          li += "</li>"
        }

        li += "</ul>";
        list.append(li);
      }
    };


    var change = function() {
      var inputVal = input.val();
      var matchVal = match.val();
      var inputOptsVal = inputOpts.val();

      if(inputVal === "" || matchVal === "") return;

      var re = new RegExp(inputVal, inputOptsVal);
      var matched;
      var matches = [];

      // let the loop run only 100 times to avoid infinite matching (bit hacky but will do for now!)
      var i = 0;
      do {
        matched = re.exec(matchVal);
        i++;
        if(matched) {
          matches.push(matched);
        }
      } while(matched && i < 100);
      $(".output h4").after("<span class='regex-used'>Regex Used: <code>" + re.source + "</code> with options <code>" + inputOptsVal + "</code></span>");

      updateResults(matches);

    };
  });



})();
