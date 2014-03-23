# ngTemplate

An AngularJS app directory structure template.

Pretty much says it all. After building several websites and applications using Angular and evolving my own best practices I'd thought I'd document the first thing I do, the directory structure.

Once you have that you can start filling in the gaps and really think about the construction of your Angular app.

## Guide

The basics are simple. Each directory has it's own file with a short description about the type of code that you should put into it. Below is a more detail description of each directory.

### Root

There are 3 directories here; app, css and img. Lets not insult anyone's intelligence here and skip css and img.

### App

`app` is the home of all our JavaScript *and* HTML. Because each component and feature of our application is self-contained they each own their own HTML templates as you'll see later. `app` is also the home of our good friend `app.js`.

### Libs

Next we have `libs`. Ok we're not going in alphabetical order here but it's logical trust me! `libs` is for our external JavaScript libraries, for example we'll most definately have AngularJS itself, maybe protractor.js for testing and for the example we could throw in JQuery. The idea of this folder is that nothing inside it changes. You drop your libraries in here and use them in your app and that's it. As soon as you start tinkering with the code in here you harm upgrading any library you have included.

### Models

Don't think of `models` as your usual data structure, or JavaScript representation of a class diagram. These models are plain and simple objects that help you construct your data correctly before sending it to an external service, that's pretty much it. I've found using these sorts of objects really useful. It helps maintain contracts between you and your APIs.

### APIs

Your application will almost certainly rely on exposed server side APIs. Firebase or Sendgrid for common examples. Build your Angular factories/services and wrap these APIs inside. Then plop them in this directory. It will help you maintain organisation over your external service dependencies.

### Services

Network related dependencies like APIs won't be the only logic you rely on. Possibly at some point your application will rely on business logic, enums and calculations perhaps. If so wrap their functionality in an Angular services and drop them in here. I usually put objects representing enums into constants on a module and stored them in this directory.

### Components

If you are truely making use of Angular's abilities you will no doubt be trying to turn everything into a directive. "This header, could it be a directive?", "This markdown editor, could it be a directive?", these are the sorts of questions you should be asking whilst you develop your application. If a piece of functionality is self-contained, has the possibility to be re-used and isn't a defining characteristic of your application then it's probably a component.

### Features

Features bring your components together and define the characteristics of your application. They also contain your base templates. So as an example a header component would be utilised by the login feature.
