# JS Regular Expression Tester

## [Go Use](http://jsregex.herokuapp.com)

When I'm working with Ruby and Regular Expressions I love using [Rubular](http://rubular.com/). I couldn't find a tool that was just like it but used JavaScript, so I built this.

The app is a small Ruby (Sinatra) app, purely as that was the quickest thing I could use to get it online through Heroku, [where it currently lives](http://jsregex.herokuapp.com/). I guess I _should_ have made it a Node app...but Sinatra was quicker for me personally to through a quick site together, and keep all the logic on the front-end.

The entire idea, and the quick reference guide was taken directly from Rubular. I'm not trying to outrageously copy, but I literally wanted the exact same site as Rubular, but for JavaScript. All credit to the idea, reference and general layout goes to [Michael Lovitt](http://twitter.com/lovitt). I just wrote some JavaScript that ties it together.

It also makes use of the [jQuery highlightTextarea plugin](http://www.strangeplanet.fr/work/jquery-highlighttextarea/) by Damien Sorel.

Pull requests, bug reports and so on are much appreciated. If you're a designer and fancy making this look pretty, feel free.

## Running the App Locally

- you'll need Ruby (1.9) and Rubygems.
- `git clone git@github.com:jackfranklin/JS-Regex.git`
- `cd JS-Regex`
- `bundle`
- `shotgun -p 1234`
- `open http://localhost:1234`

## Changelog

__v0.0.1__
- initial release
