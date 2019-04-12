# Geo Localization #
### How to compile and run the application.
In this project was used AngularJS, Bootstrap, Node.js, grunt and bower.
You'll need to install node and bower dependencies. Just go to the project folder and run:
```
npm install && bower install
```

After installing dependencies you'll be able to run project by using:

```
grunt serve
```
### How to run the suite of automated tests.

It was used Protractor (jasmine) to run the BDD tests. Use npm to install Protractor with:
```
npm install -g protractor
```
Check if the webdriver-manager is up to date with:
```
webdriver-manager update
```
and run it using:

```
webdriver-manager start
```
In terminal navigate to 'ui-challenge/yeoman/tests' and start the tests by using:

```
protractor conf.js
```
> **Note:**
> You'll need to have you project and the web-manager running. More info in Protractor site: http://angular.github.io/protractor

### Libraries used for this challenge.
- ui-map is a directive used to make the map and manage its markers by using the Google Maps API. More details can be found in https://github.com/angular-ui/ui-map


### Additional comments.
- The application already supports SASS. The previous and current web application styles can be found in 'ui-challenge/yeoman/app/styles/main.scss'
- I removed the original libs once I could refactor using the AngularJS framework.
