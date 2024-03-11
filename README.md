# MyAngularStore
An simple store made with Angular, Typescript and Bootstrap. Includes the most basic functionality:

- Product list page
- Ability to add products to cart
- Cart page to view and modify it and to checkout
- Order confirmation page

Some oncepts and modules used:

- Services to separate concerns and make code more clean and modular
- Bootstrap for styling and icons
- `HtthClientModule` to read `data.json` and fetch product list from assets folder
- `Observable` from `rxjs` module to subscribe to the fetch request
- `BehaviorSubject` from `rxjs` module to update cart count badge on navbar
- `ngModel` and `ngModelChange` for binding form data to component variables
- `ngFor` and `ngIf` in html templates for looping and rendering elements conditionally, respectively
- `@Input` to inject values into child from parent components
- `@Output` and `EventEmitter` to comunicate from child to parent components
- `RouterModule`, `Routes` and `routerLink` for routing to keep app in one page

## Setup and running app:

1. Make sure you have the Angular CLI installed on your machine, if not, just run `npm install -g @angular/cli` on the project directory.

2. Open your code editor and terminal, and clone this project.

3. Run npm i and npm i --save-dev to install all the dependencies since node_modules is not included in the repo.

4. Run `ng serve --port=3000` to start the app on 0.0.0.0:3000. This will run the app on the ip address 0.0.0.0 and on port 3000. # caffe-pr-frontend
