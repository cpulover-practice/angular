# List of practiced topics

### Project Structure
- ```src/app/app.module.ts```: main application module
- ```src/app/app.component.html```: main template HTML page for content placeholder


### New Component
1. Create new project by CLI
   - No routing
   - CSS style
2. Build and run the app
3. Update main template page 
[[app.component.html]()]
4. Create new Component by CLI, files generated:
   - ```<component_name>.component.ts```: the component class
   - ```<component_name>.component.html```: the component template HTML
   - ```<component_name>.component.css```: the component private CSS
   - ```<component_name>.component.spec.ts```: the unit test specifications
   - Automatically update main app module: include new Component into the module
5. Add new component selector to app template page to include its template to the main app template (web page)
6. Create new class (optional)
[[student.ts]()]
7. Create sample data in the Component 
[[student-list.component.ts]()]
8. Update template HTML page of the component to display sample data 
[[student-list.component.html]()]

### Integrating Bootstrap
1. Get links for remote Bootstrap files: required meta and link tags 
[[URL](https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template)]
2. Add the reference links to 
[index.html]()
3. Apply Bootstrap style in the templates
[[app.component.html]()] [[student-list-bootstrap.component.html]()]
   - Wrap the content inside ```<div class="container">```
4. Update new template URL for the Component if necessary (change template)
[[student-list.component.ts]()]

### Notes
- ```{{ }}``` reads the property of the related component in template
- Modifier ```public``` is commonly used for properties in Angular -> no need for getter/setter accessor

### @angular/common API
 [[student-list.component.html]()]
 - ```*ngFor="let <var> of <var_array>``` loops through the array (used for ```<tr>```) 
 - ```*ngIf="<boolean expression>; else <else_block>"``` and ```<ng-template #<else_block>>``` displays the content based on boolean expression result
- ```[ngClass]="{'<class>': <boolean expression>}">``` assigns the class to the element based on boolean expression result

### Angular CLI Commands
- ```ng help```: list on commands with the infomation
- ```ng new <project_name>```: create new project
- ```ng serve```: build the app and start the server with hot reload (```--open``` automatically open app in browser)
- ```ng generate component <component_name>```: create new Component
- ```ng generate class <component_name>/<class_name>``` (no ```.ts```): create new TypeScript class inside folder contanning the component