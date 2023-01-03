# Full-Stack React Blogging Website

This full-stack application utilizes React, Node.js, and MongoDB along with a variety of packages and services such as React Router, Express, Axios, and Firebase Auth to create a fully functional blogging website. This website allows users to view various different articles, log in to upvote and comment on those articles, and is complete with a home and an about page.

This application is ready to be hosted on a service such as Google Cloud. However, since hosting is not free, **this project is currently offline**. Please see screenshots and documentation of the finished product below.

A demo of this project can be found here: https://tegh25.github.io/React-Blogging-Website/

The above link is hosted by GitHub Pages which cannot support the backend for this project. As a result, some functionality such as upvoting and commenting is not available.

Documentation in progress...

## The Blog

This blogging website features a home page, an about page, three articles, and the ability to create an account and login. All of these are accessed using the navigation bar at the top of the website.

<img src="https://user-images.githubusercontent.com/48258080/210302507-8500d512-9860-48d1-84b5-ed68ef74bbec.png" width="600" height="325">

Clicking the login button in the top right allows you to access the login and create account pages, or logout if you are already logged in.

<img src="https://user-images.githubusercontent.com/48258080/210302676-7c5c078a-f3b4-42e9-a5e8-a7a0f9055317.png" width="600" height="375">
<img src="https://user-images.githubusercontent.com/48258080/210302686-1d016ffa-e15a-4bb6-8534-d0ce3bb1c6a6.png" width="600" height="360">

A list of all the articles can be accessed on the articles page.

<img src="https://user-images.githubusercontent.com/48258080/210302825-4e8af78e-b9b8-494f-8bff-515385bf8d6e.png" width="600" height="325">

By clicking on one of the three articles, the full article will appear as well as the ability to upvote and comment on the article if you are logged in.

<img src="https://user-images.githubusercontent.com/48258080/210302971-f3de3caf-f204-48eb-b09e-8f0a0061cf28.png" width="600" height="325">
<img src="https://user-images.githubusercontent.com/48258080/210303011-f8b51685-9535-4c5b-bc0f-f9135ab99fb9.png" width="600" height="360">

## How it Works

This app was created utilizing React for the frontend and the Express framework for a Node.js backend. Axios was used to handle requests between the frontend and backend. 

<img src="https://user-images.githubusercontent.com/48258080/210306514-15cc8e65-0d1e-40d5-8916-d196bf8600ac.png" width="600" height="325">

The number of upvotes and the comments on each article are stored on a MongoDB database.

<img src="https://user-images.githubusercontent.com/48258080/210306133-e63a20cf-7688-49cc-ba8a-7de9e42e8862.png" width="600" height="325">

This app use Firebase Auth for its login and authentication features and was prepared to be released on Google Cloud.

<img src="https://user-images.githubusercontent.com/48258080/210306273-2923cb05-2f38-4bcd-af9b-a0cf51a913de.png" width="600" height="325">

*Currently, I am happy with how this project turned out and I do not have any plans to build on it.*
