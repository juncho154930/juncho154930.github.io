# 3d_portfolio

tech used:
react
threejs
react fiber
tailwind
emailjs

deploy to github:
based on tutorial: https://www.youtube.com/watch?v=0fYi8SGA20k
change "dist" folder to "build"
or consider adding to vite.config.js:
build: {
outDir: '../dist'
}
actually, I have this setup on juncho154930.github.io/ repo, so after build, move it into that repo project build and then run `npm run deploy`
also, under juncho154930.github.io repo, I removed "predeploy": "npm run build" from package.json so it doesn't rewrite the build folder
complicated, I know but its another one thing to change for TODO until I figure out where I want to host react pages. I'm considering putting it on my wordpress site junhyukcho.com

Clean up TODO
