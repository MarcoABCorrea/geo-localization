# Geo Localization #
This project allows you to see your localization using Google Maps API + AngularJS

## Stack & Components

* AngularJS
* Bootstrap
* SASS
* Karma
* Protractor

### How to compile and run the application.
In this project was used AngularJS, Bootstrap, Node.js, grunt and bower.

You'll need to install node and bower dependencies. Just go to the project folder and run:

```
npm install && bower install
```
Also, it's necessary to add the styles with Ruby:

```
sudo apt-get install ruby-full
sudo gem install compass
```

After installing dependencies you'll be able to run project by using:

```
grunt serve
```

### How to run the suite of automated tests.	

 It was used Protractor (jasmine) to run the BDD tests. Use npm to install Protractor with:	After installing dependencies you'll be able to run project by using:
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

In terminal navigate to 'yeoman/tests' and start the tests by using:	

```
protractor conf.js	grunt serve
```
