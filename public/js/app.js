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

    var highlightTextarea = function(matches) {

      // the words to match are all the Regexp matches
      var words = [];
      for(var i = 0; i < matches.length; i++) {
        words.push(matches[i][0]);
      }

      // set the words
      match.highlightTextarea('setWords', words);
      // this forces it to redraw and rehighlight the newly added words
      match.highlightTextarea("highlight");
    }

    input.add(inputOpts).add(match).on("keyup", function() {
      try {
        $(".error").remove();
        $(".regex-used").remove();
        change()
      } catch (e) {
        $(".output h4").after("<span class='error'><code>" + e.message + "</code></span>")
      }
    });
  });

})();
