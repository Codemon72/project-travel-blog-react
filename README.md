# Project-Travel-Blog-React
A travel blog made with React


This project is part of the curriculum of the Full-Stack Web Development program at [Hamburg Coding School](https://hamburgcodingschool.com/).

## Goal

Goal is to transfer the main idea from your last [project "The Travel Blog"](https://github.com/hamburgcodingschool/javascript-for-web-2020-03/blob/master/PROJECT.md),
made with pure Javascript, HTML and CSS into a **React App**.

While working on the project remind yourself of *"thinking in components"*, – one of the many great parts of React.

## Features

### 1. Dashboard (Main Page)

The dashboard shows an overview of the all blog posts and a Google Map.
- [ ] Left: Blog Post preview cards
- [x] Right: Google Map with markers at the positions of the blog posts


### 2. Menu Bar
- [x] Add a menu bar which contains a logo (of your choice) and the Headline (a name of your choice) on the left side.
- [x] In the menu provide a login button (text + icon) on the right side.
- [x] The menu bar is available on all pages.

> **Icon Resources:** We recommend you use [FontAwesome](https://fontawesome.com/) for your icons.


### now Bonus: 3. Authentication / Login
- [x] Use Firebase Auth (login with email and password) for authentication.
- [x] If the login button is clicked, a login form is shown right below the login button under the menu bar.
- [x] The User can login with her email and password.
- [x] If successfully logged in, the login form disappears and instead of the login button a logout button is shown.
- [ ] If logged in, there should be another button for adding a new blog post (icon + text: "New blog post") on the left of the logout button. It links to `/new`, where the logged-in user can add a new blog post.

### 4. World Map with Google Maps API

- [x] Use the [google-map-react](https://github.com/google-map-react/google-map-react) library to display a world map.
- [x] For each blog post, put a marker on the map at the location of the post.
- [x] Initially the map gets centered by the newest blog post entry.

#### Display Blog Posts at Location

- [x] Make the markers clickable: on click, show the short preview of the blog post in the "InfoWindow".
- It contains:
  - [x] title
  - [x] visiting date
  - [ ] authors image and name (can be hardcoded)
  - [ ] Place a link, which links to the detail page: `/post/:id`
  - [x] The InfoWindow can be closed by clicking on the "x" (which is placed at right-top in the InfoWindow


### 5. Blog Posts

#### now Bonus: Get Blog Posts from Firestore

- [x] Store the blog posts on Firebase Firestore and load them with the Firebase API.
- [x] Also save the coordinates of a location with latitude and longitude.
- [ ] Load all blog posts on the dashboard (main) page.
- [ ] The blog post previews should be visible on the left, right beside the map.

#### Blog Post Previews

- [ ] On the left all blog posts are listed as previews (similar to the Micro Blog from JavaScript for Web).
- [ ] The blogs are ordered ascending by visiting date.
- [ ] Each preview contains:
  - [ ] title
  - [ ] visiting date
  - [ ] authors image + name (can be hardcoded)
  - [ ] image
  - [ ] When user clicks on one of the listed blog post than she gets linked to the detail page `/post/:id`


#### Blog Post Detail
- [ ] On clicking at the title or the image of the blog post preview, the blog post is opened at the detail page `/post/:id`.
- [ ] A back button at the details page (position: top-left) links back to the dashboard.
- [ ] The detail page shows the full blog post, with all information.

**Content of a blog post**  
A blog post should contain:
  - [ ] title
  - [ ] visiting date
  - [ ] authors name
  - [ ] image
  - [ ] text
  - [ ] location with city and country


### now Bonus: 6. New Blog Post

- [ ] With the path `/new` a blog post form is shown, where a new blog post can be added.
- [ ] On submit, the new blog post is sent and stored to Firestore.
- [ ] The form is cleared after adding a new blog post and the user gets directed to the Dashboard, again.  

  You can use the history hook provided by the React Router: `useHistory()`.

  ```
  import { useHistory } from "react-router-dom";

  function HomeButton() {
    let history = useHistory();

    function handleClick() {
      history.push("/home");
    }

    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    );
  }
  ```
  You can read more about, how changing a route programmatically, here:
  
  - https://reacttraining.com/react-router/web/api/Hooks/usehistory
  - https://reacttraining.com/react-router/web/api/history

- [ ] For the images: Save the image in your project manually in the public folder and use it with relative path as string.  
  For instance: The image `barcelona.jpg` saved under `public/images` can be linked in the templates with `"/images/barcelona.jpg"`.
- [ ] Only signed in user can add new blog posts.


### 7. Imprint / Contact

- [x] Create a link `/contact` in the menu bar named "Contact".
- [x] On the contact page place your (and your team mate's) name.
- [x] Write two sentences about your project.
- [x] Put your (or if you prefer [Hamburg Coding School's](https://hamburgcodingschool.com/contact/)) contact details:
  - [x] name
  - [x] address
  - [x] email
  - [x] phone number
- [x] Write a note that this was a project from a course at Hamburg Coding School.


## Optional Bonus Tasks

You can choose any of these optional bonus tasks, in any order.

### Bonus 1: Map for Blog Post Detail Page

- [ ] On the Blog Post Detail page, place a the map on the right side next to the blog post.
- [ ] The map shows centered the location of the blog post.

### Bonus 2: Firebase Storage for images

- [ ] Include the Storage API from Firebase.
- [ ] Research how to upload and download pictures with Firebase Storage.
- [ ] Upload your blog post's images to Storage.
- [ ] Load the images from Storage when displaying the blog posts.
- [ ] In the form for creating a new blog post, add an option to upload an image for the blog post to Storage.

### Bonus 3: Edit Blog Posts

- [ ] At the `/post/:id` page, add an "edit" icon.
- [ ] If the user clicks that, the blog post turns into editable mode and entries can be updated and saved.  
>  Take into consideration using the same form component, which you might have defined for creating new blog post.
- [ ] The values of the form are pre-filled with the data from the blog post.
- [ ] On form submit the blog post gets updated and sent to Firestore.

### Bonus 4: Focus of Blog Post in List on Marker Active

- [ ] If the user clicks on a marker, the corresponding blog post entry aside in list gets highlighted (e.g. with applying a prominent border color to it).

### Bonus 5: Provide a user profile page

- [ ] Add a link in the menu bar, where the signed-in user can edit her profile and store it to Firebase.
- [ ] Research how to save user data in Firebase.
- [ ] At the profile page, the signed-in user can upload a profile image and save her name.
- [ ] Use this information, if available,
  - [ ] on the page where a user can add new blog entries and
  - [ ] in the menu to show logged in users name and image.

## Modalities

- [ ] You can work alone or in a team of two.
- [ ] You are allowed (and even encouraged) to ask your classmates for help or help them.
- [ ] Use all the documentation and online tutorials as you like.
- [ ] You can ask Mary for help anytime.
- [ ] For communication, use the Slack channel.
- [ ] You get two consultation classes:
  - [ ] Tuesday, June 16th, 6pm - 8pm
  - [ ] Tuesday, June 23rd, 6pm - 8pm
- [ ] The consultation classes take place in our online classroom at NewRow.
- **Deadline: June 25rd 2020, 6pm**


## Submission

1. Upload your code to a new GitHub repository.
  - If you placed your API keys directly into your code, remember to remove your API keys.

    **Hint:**
    There is a way to use keys in the React project without the risk to push those to a repository accidentally:
      - Add a file `.env` into your project root folder. It is ignored by git.
      - In this file you can define custom environment variables like that: `REACT_APP_MY_API_KEY=MyKey-12345`
      - Within your component you can use it with `{process.env.REACT_APP_MY_API_KEY}`
      - After every change in this files you have to restart your project.

      For more information check out: https://create-react-app.dev/docs/adding-custom-environment-variables/.

  - If you worked in a team, link the GitHub accounts of both of you in the README.md.

2. Send us an email with the following information:
  - A link to your GitHub repository
  - Your firebase configuration and
  - Please create a guest user account in firebase for us which we can use to log in to your travel blog app. Send us the credentials (email + password) for this guest login.
  - If you worked in a team, both your names
  - If you did any bonus tasks, list them
  - Send it to Mary (mary@hamburgcodingschool.com) and Teresa (teresa@hamburgcodingschool.com)
