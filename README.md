# DemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Run json-server

command : json-server --watch db.json -d 2000

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Basic Concepts 

1. Bootstrap : free, opensource css framework 
               responsive
               It contains css & javascript based desing template
               helps to design website faster & easier using class 
2. JavaScript : programming language 
                case-sensitive 
                client-side scripting 
                directly processed by browser
                js datatypes => undefined, boolean, null, string, number, object
     => propmpt box : allows user to enter input           
   jQuery     : JavaScript library 
                dependant on javascript 
                simplifies html document traversing, event handling, animating for web development
                has to be converted into javascript to run in browser. 
3. JSON : JavaScript object notation
          format for storing and transporting data 
          language independent
          collections of key/value pairs
4. Git : version control system
         handle small to large project
5. HTML  : Doesn't support audio and video without use of player support
           Doesn't allow javascript to run in browser
           Doesn't allow drag and drop effects
           works with old browser
           less mobile friendly
           some tags were not there like nav, header, charset, async etc.
   HTML5 : support audio video with use of <audio>, <video>     
           Allow javascript to run in browser
           Allow drag & drop effect.
           More mobile and desktop friendly
           Some new elements like nav, header, footer, section tags 
6. Media query : deliver different style sheet to different device, create sensible breakpoint for our layout. It is block of CSS property only if certain condition is true. 
7. REST API : API that uses http requests to get, put, post, delete the data 
              used for creating web services 
              simpler compared to other 
              stateless
8. Response code : 200 Ok
                   201 created
                   301 moved permanetly
                   304 not modified
                   400 bad request
                   401 unauthorized
                   403 forbidden
                   404 not found
                   422 unprocessble entry
                   500 internal server error
                   505 http version not supported
9. OOPs Concepts : a. Object => real world entity, having property, tasks performed, Instance of a class
                   b. Class => blue print that object follows, n number of object.
                   c. Constructor => special method of a class or structure in oop that initializes as object of that type. has same name as class. 
                              Types => default, parameterized, copy, stayic, private
                   d. Abstraction => showing only essential part & hiding implementation details
                   e. Encapsulation => binding variables & method in single entity
                   f. Inheritance => Acqiring property of one class to another class, parent & child class
                                  types => Single
                                           Multi-level
                                           Hierarchical 
                                  memory saving         
                   g. Polymorphism => performing same task(method) in diff ways, implement by method overloading(compile-time) & method overriding(runtime)   
                   h. Interface => blue print, list of methods that class needs to implement, purely about what is visible on outside of a class. singnature of method & value constants. 
10. '==' : only value should be same
    '===' : value & datatype should be same    
11. SQL : Structured query language, case-insensitive,  
12. callback : plain js function passed to some method as argument. execute after another function has finished executing.   
13. a. Library => collection of precompiled routines that a program can use.  
    b. Angular => platform & framework for building single-page app using html & typescript. 
    c. TypeScript => Goal is to help catch mistakes early through a type system & to make js development more efficient.     
    d. React => Js library, Used for building UI for single-page app. For web & mobile apps, reusable component. 
    e. which is better angular or react? => completely diverse approaches to web app development. both are powerful & flexible. depending on custom app goals & system constraints. 
14. ES6 : ECMAScript, standardized version of javascript, Includes => Arrow functions, classes, modules, promises, let & const. 
15. var & let : var => overwrite variable declarations without error, let => same name can only declare once. 
16. Redux : predictable state container for js app. help to write app that behave consistently & run in diff environments(client, server, native)         
17. MVVM Architecture : model-view-viewmodel,     
18. JavaScript & TypeScript differnce => Js is scripting lang which helps to create interactive web pages whereas ts is superset of js. ts uses                                     concepts like types & interfaces to describe data being used.    
                                         Ts code needs to be compiled while Js doesn't need to compile.
                                         Ts is powerful type system, including generics & Js features for large size project where js is ideal option for small size proejct.           
19. SQL : DISTINCT => return only different value.
          WHERE => used to filter records.
          ORDER BY => used to sort result-set in ascending/descending order.
          MIN => smallest value of selected column
          MAX => largest value of selected column
          COUNT => no. of raws that match specified criterion.
          AVG => avg value of numeric column
          SUM => sum of numeric column
          JOIN => combine 
           rows from two or more tables
          INNER JOIN => select records that have matching values in both tables  |  |=|  |
          LEFT JOIN => select from left table & match record from right table  |==|=|  |
          RIGHT JOIN => select from right table & match from left table  |  |=|==|
          FULL OUTER JOIN => match left or right table  |==|=|==|
          SELF JOIN => table joined itself.
20. blob : data type which store binary data such as images, multimedia files etc..
21. Authentication : refers to proving correct identity.
    Authorization : refers to allowing a certain actions. having privilegs/rights to allow. In code have to pass headers like content-type. 
22. Swaping : with 3rd variable => temp = x,     x = y,   y = temp
              without 3rd variable => a = a+b,   b = a-b,    a=a-b
23. fibonacci series : without recursion => n3 = n1+n2,    n1=n2,   n2=n3              
24. Palindrom : same after reverse => temp = n,   r=n%10,   sum=(sum*10)+r,    n=n/10
25. Reverse : reverse=0, rem,   rem=n%10,   reverse=reverse*10+rem,    n/=10


## Angular Concepts (From Coursera Course)

1. {{ }} string interpolation one-way data binding 
2. property binding => .ts to .html file...like can use method/function in html file
3. event binding => .html to .ts file...like for ex. onClick() method initlize in html and define 
 in .ts file
4. Single page application => web app that interacts with web browser by dynamically rewriting the current page with new data from web server.
5. pipe => vertical bar "|". display value transformation in template. ex. uppercase, lowercase, date-time
6. Directives : a. structure directives => change the DOM layout by adding & removing DOM elements. ngIf, ngFor
                b. Attribute directives => change the appearance or behavior of an element, component, or another directive. It gives instructions to angular on how to render the templates to DOM. @Directive decorator. Modify  behavior of html elements, attributes, properties & components.
                    Built-in Attribute directives : NgStyle, NgModel, NgClass
                c. components directives =>     
7. Data binding => mechanism for coordinating between template -> DOM,  component -> property
     a. one-way from data source to view target:
          {{value}} -> interpolation
          [target]="expresssion" -> property attribute
          bind-target="expression" -> class style
     b. one-way from view target to data source:
          (click)="statement -> event
          on-click="statement" -> event
     c. two-way:
          [(ngModel)]="expression" -> two-way
          bind-target="expression" -> two-way    
8. @Input decorator => sending/supply information from one to another component
   @Output decorator => an event can pass back from one to another compoent         
9. Services: fetching data from server, user input validation, logging, application logic into services
     Related concepts : Dependency injection
                        Promises
                        Reactive JavaScript
10. Dependency Injection : software design where one object is dependent on another object. passing of a dependency to dependent object so it can use it. 
     Way to use : create dependency using new operator
                  create global variable
                  dependency passed to it where needed (most flexible)
     DI involve 4 roles : the service
                          the client
                          the interface
                          the injector             
Write business logic into independent object and inject them where required    
11. ngOnInit() : life cycle method 
12. Routing : navigation between components or among views, modify website's URL without a full page refresh. 
     Routes {path: "/", component: Component} 
     <routerOutlet></routerOutlet>
     routerLink <a routerLink="/"></a>
13. Route parameter : <a [routerLink]="['/'. dish.id]">, ActivatedRoute Service  
14. Single page application : no need to reload entire page, desktop application, 
15. Template driven forms : two-way data binding, Change tracking, Form validation & error handling. Use ngModel directive.  
ex. #username="ngModel"
16. Reactive form : Management of data flowing between non-UI data model and UI-oriented form model. Bind them to form control elements in template.    
ex. FormControl, FormGroup, AbstractControl, FormArray      
17. Promise : when we send request to service to get data then it will take time so have to wait for the response. Asynchoronous operation is the method that start further procced without wait and return results when available So for that Promise takes place to complete this task. 
     Promise(pending) => Promise(resolved/fulfilled)
                      => Promise(rejected)
     ex. new Promise( function (resolve, reject) {...});       
18. Reactive programming : 
     Observer pattern : Obervable tracks obersers, can be unsubscribed, canceling & retrial straightforward    
19. RxJS : Reactive programming in javascript, library for compose asynchronous & event-based program by using obervable sequence.       
Provides : one core type => Observable
           satellite types => Observer, Schedulers, Subjects
           operator => map, filter, reduce, every etc.
           allow handling asynchronous events as collections
20. Observables all over angular
     Forms : Reactive forms
     HTTP : Use for get, post, update, delete in HttpModule
     AsyncPipe
     Change detection           
21. User Observable instead of Promise in services. 
22. snapshot : When we use this as snapshot here, we are taking one snapshot from the route service and then obtaining the parameter observable at that particular point of time. The value of the params at that particular point of time and then making use of it within our application.
23. (data?: any) => means parameter is optional
24. selector : already wrote in .ts file, it's property of object that we use along with comp configuration, used to identify each comp uniquely into another comp. represented in html tag. 
25. Animations : built around transitions of element between states driven by model attribute, User experience better, defined inside @component metadata, ex. trigger, state, style, animate, transition
26. Route Guards : An interface which can tell the router whether or not it should allow navigation to requested route. Types of guards :              CanActivate
               CanActivateChild
               CanDeactivate
               CanLoad
               Resolve
27. CLI => command line interface, tool that use to initialize, develop & maintain angular. 
28. Lazy loading : known as asysnchronous loading, delay loading of object until it is needed. 
29. Commands : ng g component name
               ng g service name
               ng g module app-routing
30. Angular 8 supports TypeScript 3.4 or above version.           
31. JIT : Just in time. runtime compilation during execution of program. First it is responsible for turning high-level lang into machine code then linked to executable, slower than AOT, suitable in development mode, 
32. AOT : Ahead of time compiler converts code during build time in server before browser run the code. provide faster rendering, suitable in case of production,

## MEAN Stack 

To run, type command in terminal : nodemon

1. MEAN : Mongodb, Express, Angular, Nodejs
2. CORS : Cross origin resourcering, work as middleware
3. bodyParser : parsing incoming requested body
4. To check databases in mongo shell : (open mongoshell)
                                       show dbs
                                       use db_name
                                       show collections
                                       db.collection_name.find().pretty()



## React Concepts

1. purpose of render() : returns a single react element
2. Props() : peroperties in react, passed down from parent to child component. 
3. state() : heart of react component, source of data, object which determine computer rendering and behavior. Centeral place which stores everything here. 
4. event : event are triggered reactions to specific action like mouse hover, mouse click, key press etc. 
5. Reusable component, fast reloading, performance, light weight, Use with any of the library,  Javascript needed, ReactJs hooks
6. Virtual DOM : no need to entire page reload just need to reload one component to get updated.
7. Component : class base => more powerful
               functional base => less powerful & less useful
8. Hooks :  allow to reuse stateful logic without changing component hierarchy.
9. Command : npx create-react-app app_name
             npm start
10. When we write html code inside return statement then it's not html!! It's JSX and need to write in <div></div> otherwise it will give error.
11. write className in tags instead of class.                         
12. class hold our state.
13. In render(), you should return something and it is JSX code. 
14. Virtual DOM : concept where an ideal or virtual representation of UI is kept in memory & synced with 'real' DOM by library such as reactDOM. 

## NodeJs Concepts

1. What : Javascript runtime, built on V8 js engine, written in c++, allow to run js code on the server.
2. Why use : fast, efficient, event driven, same language on frontend & backend, works on single thread using non-blocking I/O calls
3. node's event loop : single threaded, EventEmitter class is used to bind events & listeners.
     EventEmitter => Events => Event loop => Event handlers
4. Types of project use nodejs : REST API & microservices, real time services, CRUD app
5. commands : npm init => generate package
              npm install express => install locally
              npm install -g nodemon => install globally    
6. convert js code into machine code through V8 js engine. 



## PHP Laravel
1. laravel : dependency manager for php


## Fullstack web development using nodejs, express, mongodb
0. Commands : npm init (will create package.json file)
              npm install express --save
1. Single page app using js framework like Angular, React <= nodejs <=> mongodb json 
2. nodejs and npm : event-driven, non-blocking IO model, npm manages ecosystem of node modules
3. In node project, we have to exports modules in js file.

=====> Node module callback and error handling <=====
4. Closures : function defined inside another function has access to all variables declared in outer function
5. callbacks :  plain js function passed to some method as argument. execute after another function has finished executing.

=====> Node and Http <=====
6. http module : pass http, fs(file system) hostname, port and create server(pass header). At the end, server.listen(port, hostname, ()=>{ }); 

=====> ExpressJs <=====
7. express : nodejs web-app framework which provide set of features for web & mobile app development. Backend, third party middleware, server-side development, plug-in functionality
, use 
     
