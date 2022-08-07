# Boolgram

### Details

Please build a small replica of the homepage of Instagram web using React which consumes a set of endpoints provided by us. Please note, the language of the application in the video is set to Italian - feel free to use either Italian or English.

https://user-images.githubusercontent.com/13719921/146746846-fe2e561f-eb6f-46b0-9919-54ad6c01b56e.mp4

### Submission

1. Please fork this repository
2. Please extend this README or add another document that details your project
3. Please email `edward@boolean.co.uk` with a link to your repository

Take the time you need to make something you're proud of but as we're hiring ASAP we'd love to have it back within a week if possible.

### Evaluation

What we will evaluate is

- how you use React
- how you design the layout thinking about the reusability of components
- how you deal with async calls.

### Instructions

We divide the exercise into steps

#### Step 1

Replicate the UI using a hierarchy of components that you find correct for this case. No need to over complicate or over structure.

#### Step 2

Populate the stories section (the one on top with rounded images) making an async call to https://flynn.boolean.careers/exercises/api/boolgram/profiles. No clicks or actions are needed, just display the images

#### Step 3

Populate the feed with content making an async call to this endpoint https://flynn.boolean.careers/exercises/api/boolgram/posts

#### Further

Implement a skeleton screen loading, as you see in the video.

### Project

I initialised this repo using the standard create-react-app package.

You can run the development server using:

```bash
npm install
npm start
```

The project is rendered as a single page application. I used TailwindCSS for the main styling, opting to split the app into four distinct sections - navbar, stories, posts, and sidebar. This structure is also reflected in the folders.

I built the page to be responsive, as the structure of the components shift to look presentable on different devices/screen sizes. This can be seen in the widths of the main components and but also for example the number of stories rendered at various breakpoints.

The data is pulled in using react-query, which is a library that allows you to fetch data from a remote API. I chose RQ because it allows you easily manage loading state, an important part of this task given the skeleton components necessary to render while we are waiting for user/post data. On screen components will dynamically change as the data fetched from the API updates.

TypeScript was used to define the shape of the data being fetched from the API, ensuring type-safety throughout the appliation as components handle that data.

The app is mostly non-interactive for now, aside from the comments sections on posts, which the user can toggle to view the rest of the comments or limit them accordingly.
