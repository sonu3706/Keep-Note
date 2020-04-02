# KeepNoteUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Angular Assignment - Keep	Level 3

## Objective 

The Objective of this level of Keep is to cover the following areas :  

- Components Design  
- Components Interaction  
- Named Router Outlets  
- Testing  

## Prerequisites

1. Fork this boilerplate repository  
2. Clone the boilerplate repository and cd into it  
3. Install dependencies `npm install`  
4. Run the backend `npm run serve`  which shall run on port:3000  
5. Run the frontend `npm run start` which shall run on port:4200 

## Know your server  

On running `npm run serve`, following apis would be available for your use -  
1. To authenticate user - POST - http://localhost:3000/auth/v1 - expecting data - { username, password }  
2. To check if user is authenticated - POST - http://localhost:3000/auth/v1/isAuthenticated - expecting header - { 'Authorization', `Bearer ${token}` }  
3. To get notes - GET - http://localhost:3000/api/v1/notes - expecting header - { 'Authorization', `Bearer ${token}` }  
4. To add a note - POST - http://localhost:3000/api/v1/notes - expecting header - { 'Authorization', `Bearer ${token}` } and data - { note } 


## Assignment:	
	
Keep to include following -  
1. Notes View - collection of notes  
2. List View - collection of notes but classified into three lists based on their `state` values  
	- Not Started  
	- Started  
	- Completed  
3. Edit Note View - Both the NotesView and the ListView should be able to edit notes and should be able to update the list and notes view.  
4. Note Taker Component: Both the NotesView and the ListView should have a common NoteTakerComponent present in the DashboardComponent.  
5. Add more Unit test cases for all the Components.  
6. Add Unit test cases for all the Services.  
7. Add more E2E test cases to the application.    

## Instructions:  

1. You are expected to use `Note` class for Note model  
2. `AppModule` shall be the root module  
3. Application to have following routes -  
	3.1. `dashboard` mapped to `DashboardComponent`  
	3.2. `dashboard/view/noteview` mapped to `NoteViewComponent`  
	3.3. `dashboard/view/listview` mapped to `ListViewComponent`  
	3.4. `login` mapped to `LoginComponent`  
	3.5. `note/:noteId/edit` mapped to `EditNoteOpenerComponent` rendered in `noteEditOutlet` named router outlet  
	`dashboard/view/noteview` being the default route  
4. `AppComponent` as the bootstrapping component  
5. `HeaderComponent` to have a property `isNoteView` which is set based on the route rendered and two icons as shown in the template to switch between List View and Note View.  
6. `LoginComponent` same as implemented in `Keep Level 2`  
7. `DashboardComponent` calls notesService.fetchNotesFromServer() on initialization and renders components based on router outlets mentioned in the template  
8. `NoteTakerComponent` has the same implementation of Expansion panel to add new notes from `DashboardComponent` of `Keep Level 2`  
9. `NoteViewComponent` displays the notes collection with each note rendered as a separate NoteComponent, the component class subscribes to notesService.getNotes() and populates the response in its `notes` property  
10. `NoteComponent` displays a single note as a Material Card, with card title set to note title and card content set to note text. On click of this card, user is navigated to Edit View of the same note.  
11. `ListViewComponent` to have three properties in the component class as - `notStartedNotes`, `startedNotes`, `completedNotes` into which the updated collection of notes is classified based on the `state` property of Note objects.  
12. `EditNoteOpenerComponent` which gets rendered when application is routed to Edit View. This component extracts noteId from query parameter and passed same as data while opening EditNoteViewComponent in a Material Dialog.  
13. `EditNoteViewComponent` enables editing of a note by fetching the entire note using notesService.getNoteById() based on noteId provided in the data while opening this component in a Material Dialog. `onSave()` persists the updated note via notesService.editNote() and the dialog is closed after which the previous route is rendered by calling routerService.routeBack(). In case of any server error, the template has a label with class `error-message`, the text of which is set with the error object's message property.  
14. `CanActivateRouteGuard` same as implemented in `Keep Level 2`  
15. `AuthenticationService` same as implemented in `Keep Level 2`  
16. `NotesService` with two properties -> `notes` which is array of all the updated notes and `notesSubject` which is a BehaviourSubject of array of all updated notes and helps to emit changes to this array across subscribers, the service has methods as below -  
	16.1. `fetchNotesFromServer()` to fetch notes from backend and update the `notes` and `notesSubject` likewise in the service  
		INPUT - no params  
		URL - `http://localhost:3000/api/v1/notes`  
		METHOD - `GET`  
		RETURN TYPE - void  
	16.2. `getNotes()` to return the `notesSubject` of the service  
		INPUT - no params  
		RETURN TYPE - `BehaviorSubject<Array<Note>>`  
	16.3. `addNote()` to persist the new note created with server and update the `notes` and `notesSubject` of the service  
		INPUT - Note  
		URL - `http://localhost:3000/api/v1/notes`  
		METHOD - `POST`  
		RETURN TYPE - `Observable<Note>`  
	16.4. `editNote()` to persist the updated note with server and update the `notes` and `notesSubject` of the service  
		INPUT - Note  
		URL - `http://localhost:3000/api/v1/notes/${note.id}`  
		METHOD - `PUT`  
		RETURN TYPE - `Observable<Note>`  
	16.5. `getNoteById()` to fetch the note matching provided Id from `notes` collection of the service  
		INPUT - Number (noteId)  
		RETURN TYPE - Note  
17. `RouterService` to navigate user to available routes -  
	17.1. `routeToDashboard()` to navigate to dashboard route  
	17.2. `routeToLogin()` to navigate to login route  
	17.3. `routeToEditNoteView()` to navigate to edit view of the note of given noteId  
	17.4. `routeBack()` to navigate back to previous route  
	17.5. `routeToNoteView()` to navigate to notes view  
	17.6. `routeToListView()` to navigate to list view  
18. Ensure following commands succeed in your local machine before submitting your code for Preliminary automated review as described next -  
`npm install
npm run build
npm run lint
`
19. Ensure unit test cases pass -  
`npm run test
`
20. Ensure e2e test cases pass -  
`npm run serve` (backend shall be running before executing e2e test cases)  
`npm run e2e`

## Submitting your solution for preliminary automated review  
