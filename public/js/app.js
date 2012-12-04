(function() {

  "use strict";

  $(function() {
    var input = $("input[name='regexp']");
    var match = $("textarea");
    var inputOpts = $("input[name='options']");
    match.highlightTextarea();

    var change = function() {
      var inputVal = input.val();
      var matchVal = match.val();
      var inputOptsVal = inputOpts.val();
      if(inputVal === "" || matchVal === "") return;


      var re = new RegExp(inputVal, "g");
      var matched;
      var matches = [];
      do {
        matched = re.exec(matchVal);
        if(matched) {
          matches.push(matched);
        }
      } while(matched);

      $(".regex-used").remove();
      $(".output h4").after("<span class='regex-used'>Regex Used: <code>" + re.source + "</code></span>");

      updateResults(matches);

    };

    var updateResults = function(matches) {

      highlightTextarea(matches);

      var list = $(".output ul");
      $(".output div").hide();

      var li;
      list.html("");
      for(var i = 0; i < matches.length; i++) {
        var groups = [];
        // got to be j = 1, as 0 is the entire match, we only want groups
        for(var j = 1; j < matches[i].length; j++) {
          groups.push(matches[i][j]);
        };
        li = "<li><span class='matched-text'>";
        li += matches[i][0];
        li += "</span>";
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

    var highlightTextarea = function(matches) {
      var words = [];
      for(var i = 0; i < matches.length; i++) {
        words.push(matches[i][0]);
      }
      match.highlightTextarea('setWords', words);
      match.highlightTextarea("highlight");
    }

    input.on("keyup", change);
    inputOpts.on("keyup", change);
    match.on("keyup", change);
    change();
  });

})();
