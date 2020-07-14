# List of practiced topics

### Project Structure
- ```src/app/app.module.ts```: main application module
- ```src/app/app.component.html```: main template HTML page for placeholer content


### Development Process
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
5. Add new component selector to app template page
6. Create new class (optional)
[[student.ts]()]
7. Create sample data in the Component 
[[student-list.component.ts]()]
8. Update template HTML page of the component to display sample data 
[[student-list.component.html]()]
   - Atrribute ```*ngFor``` loops through the array (used for ```<tr>```)

### Notes
- ```{{ }}``` reads the property of the related component in template
- Modifier ```public``` is commonly used for properties in Angular -> no need for getter/setter accessor


### Angular CLI Commands
- ```ng help```: list on commands with the infomation
- ```ng new <project_name>```: create new project
- ```ng serve```: build the app and start the server with hot reload (```--open``` automatically open app in browser)
- ```ng generate component <component_name>```: create new Component
- ```ng generate class <component_name>/<class_name>``` (no ```.ts```): create new TypeScript class inside folder contanning the component