# JS Regular Expression Tester

When I'm working with Ruby and Regular Expressions I love using [Rubular](http://rubular.com/). I couldn't find a tool that was just like it but used JavaScript, so I built this.

The app is a small Ruby (Sinatra) app, purely as that was the quickest thing I could use to get it online through Herok, [where it currently lives](http://jsregex.herokuapp.com/). I guess I _should_ have made it a Node app...but Sinatra was quicker for me personally to through a quick site together.

The entire idea, and the quick reference guide was taken directly from Rubular. I'm not trying to outrageously copy, but I literally wanted the exact same site as Rubular, but for JavaScript. All credit to the idea, reference and general layout goes to [Michael Lovitt](http://twitter.com/lovitt). I just wrote some JavaScript that ties it together. It's fairly messy JavaScript too, but life goes on.

It also makes use of the [jQuery highlightTextarea plugin](http://www.strangeplanet.fr/work/jquery-highlighttextarea/) by Damien Sorel.

Pull requests, bug reports and so on are much appreciated. If you're a designer and fancy making this look pretty, feel free.

You can run the app locally by cloning this repository, and then navigating to it on the command line. Then run `bundle` and then `shotgun -p 1234`. Visit `localhost:1234` to see it in action. You'll need Ruby and Rubygems installed.
