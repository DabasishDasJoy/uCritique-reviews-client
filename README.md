<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://i.ibb.co/PtR21RC/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Code Crate</h3>

  <p align="center">
    An Application for qulaified education.
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    <!-- ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://i.ibb.co/xg2y7js/screenshot-2022-10-27-202333.png"/>

The project is build based on educational purposes. In this era of digital world everything is centered in the binary digits. So education is also now became more available and quilified through these binary numbers. Now a days anyone can get a quilified proper education from a reputed wise person from anywhere in the world. This application also can take part of these great revolution.

## Features

- Any user can visit the website as guest.
- To purchace any course user must have an account.
- Account can be created in three ways GitHub, Google and Email.
- Only logged in user can acces the full website.
- Guest user can download the details as pdf also.
- User can choose and purchase course on demand.
- A dedicated blog section is to know updated technology.
- User can view location of the office on live map.
- User can update profile any time including password.
- Authentication is get by using firebase.
- Also own build server is running for data.
- Further common questions can be found in frequently ask questions section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- REACT
- TAILWIND CSS
- DAISY UI
- MERAKI UI
- REACT ROUTER

## Packages, library other technology used

- React-hook-form
- React-icons
- React-leaflet
- React-loader
- React-to-pdf
- daisy UI
- Firebase Authentication
- Vercel
- GitHub
- Facebook

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run this project locally you need to first install it. Then run it. You can use yarn npm whatever you want.

### Prerequisites

Before get into run the project first make sure you have:

- javascript enabled browser
- node js
  ```sh
  download and install from the website
  ```
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/dabasishDasJoy/code-crate.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Enter your API in `firebase.config.init.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```
   or

## API Reference

#### Get all courses

```http
  GET https://code-crate-server.vercel.app/courses
```

| Parameter | Type | Description                             |
| :-------- | :--- | :-------------------------------------- |
| `none`    | `=`  | Fetch all the topics of the application |

#### Get a specific course

```http
  GET https://code-crate-server.vercel.app/course/${courseId}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of course to fetch |

### Deploy

1. ```sh
      yarn start
   ```
   or
   ```sh
   npm start
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

- This project can be used in online learning or e-learning platform.
- Since the project is most of the dynamic so anyone can user their own data.
- Also there is a dedicated blog section which will help to get updated with modern technolody.
- Also map is used to find the location easily.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create react app
- [x] Routing by react rouder dom
- [x] For design used tailwind and daisy ui component library
- [x] React-form-hook to control form data.
- [x] Different packages used to built the website like react-to-pdf to download pdf.
- [x] Built API for fetching data and display dynamically.
  - [x] Used express js for building API
  - [x] Nodemon to run the server
  - [x] Vercel to deploy the server
- [x] Firebase for authenticate user.
- [x] Make user login or register.
- [x] Halt unauthenticated user to private routes.
- [x] Used three types of authentication system GitHub, Google, and Email.
- [x] Deploy the website in firebase.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Website Link

Website Link: [https://code-crate.web.app/](https://code-crate.web.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

The resourses helped me out to built this website

- [React Router DOM](https://react-router-dom.com)
- [React JS](https://www.reactjs.org)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
