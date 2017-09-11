# Venturo-Dummy-App

this is the complete test project for the venturo dummy app.

# Running the project:
I utilized npm javascript module loader to load and manage project dependencies.  
1 - download and install node.js   
2 - download and install npm.   
3 - run "npm install" inside main foulder (this ill install all package.json dependencies)   
4 - run "npm run typings install"  
  this command install the TypeScript type definitions containded in typings.json     
5 - run "node ./rxModuleBuilder.js" this command will create a module containing all the reactive extensions functionality, along with aditional information that SystemJs needs to resolve dependencies.     
6 - run "npm start" this command will start the development server url: "localhost:3000/dummy"   

# Thinking process
I started the development process preparing the application so it supports angular and the supporting development tools that would be used to create the angular client side of the application and preparing the back-end services that will support angular by providing storing application data, responding to HTTP requests, and authenticating users.   
    1.1 - created the folder structure   
    1.2 - Installed the NPM Packages  
    1.3 - Prepared the RESTful Web Service   
    1.4 - Configured TypeScript  
    1.5 - Configured the development HTTP Server  
    1.5 - Configured the Javascript Module Loader  
    1.6 - Created the Reactive Extensions Javascript Module  
    1.7 - Created the index.html HTML file  
    1.8 - Created the root component, root module and bootstrap file  
    1.9 - Added the javascript module loader to the Html Files  
    1.10 - Started the Data Model, "dummy" datasource, and the data repository (this garantees the separation of concerns)  
    
Having this done i continued upgrading the application have the test documentation you guys sent me. 

# Observations
I used bootstrap as the grid system. I also used its clases in some of the content cause, as specified, i had 1 year of experience with Angular Js and it took me some time to get ready. So i had no time to focus on css. Even though Angular 2 is an iteration, its paradigm changed quite much. That said Angular 2 usage was almost a new development expirience for me. What helped me was the programming bases, knoledge in MVC pattern and JAVA expirience. So i know mu code is not as pristine as it could be.
Tryed to do the editing and removal of bikers as well but for some reason wasnt abble to make the DELETE requests through the HTTP, HTTPRequest Angular components before time runned out. 

# Final Thoughts
I really enjoyed developing this task, i love working with these support develoment tools, and in a well structured project like Angular 2 and Angular Js rovides. Had a look at Venturo's web site and got very excited for what it can bring to my experience. Hoping to receive good news from you guys. Thank you all.
