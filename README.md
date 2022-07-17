# LearnAngularOnpush

Learning the difference between the two **ChangeDetectionStrategy** `OnPush` and the `Default` with the relationship of changes between **Parent** and **Child** component

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

See demo: (https://lightzane.github.io/learn-angular-onpush/)

## How this Project was Created

1. `ng new learn-angular-onpush`
2. `ng g c components/child-with-default`
3. `ng g c components/child-with-onpush`

## In Parent

> NOTE: Only the `child-with-onpush.component.ts` contains the following code:

```ts
changeDetection: ChangeDetectionStrategy.OnPush;
```

**app.component.ts**

```ts
/** Updates existing input, therefore, child component (OnPush) does not update until it updates internally */
  parentMutatesExisting(): void {
    this.counter++;
    this.fruits[0].name = this.fruits[0].name.concat(' ').concat(this.counter.toString());
  }

  /** Causes the child component (OnPush) to also update the input */
  parentReplacesExisting(): void {
    this.counter = 0;
    const newFruits = [...this.fruits];
    newFruits[0].name = newFruits[0].name.includes('Apple') ? 'Mango' : 'Apple';
    this.fruits = newFruits;
  }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
