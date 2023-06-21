# 3d_portfolio
 
based on tutorial: https://www.youtube.com/watch?v=0fYi8SGA20k

npm create vite@latest ./ -- --template react

Learning:
  ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
  React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
  TailwindCSS - a popular utility-first CSS styling framework
  Framer Motion - the most popular library used to bring your React website to life with animations You'll also learn how to:
  Load, create and customize stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.
  Make your code reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices
  Implement sending emails through a form on the website
  Ensure responsiveness across all devices and improve your site's performance using Suspense and Preload.


tech used:
react
3js
react fiber
tailwind

terminology:
hoc = higher order components

deploy to github:
  change "dist" folder to "build"
  or consider adding to vite.config.js:
    build: {
      outDir: '../dist'
    }
  actually, I have this setup on juncho154930.github.io/ repo, so after build, move it into that repo project build and then run `npm run deploy`
  also, under juncho154930.github.io repo, I removed "predeploy": "npm run build" from package.json so it doesn't rewrite the build folder
  complicated, I know but its another one thing to change for TODO until I figure out where I want to host react pages. I'm considering putting it on my wordpress site junhyukcho.com

todo {
  clean up // TODO
  Contact.jsx
    // TODO emailjs.com signup https://www.youtube.com/watch?v=0fYi8SGA20k 2:40:00 timestamp
}