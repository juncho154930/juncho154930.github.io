# 10k Aparte.

### 10K Apart Contest - Spanish Translation Website.

This is my [10k Apart](https://a-k-apart.com/) contest submission. It's basically a freestyle translation into Spanish of the 10k website with a different User interface layout and Design.

The project's been built using HTML5 + LESS + Vanilla JS and the generated distributable files are handled by [Gulp](http://gulpjs.com/) which takes care of some useful tasks :

- Injects the external CSS and JS code into the HTML file in order to avoid extra HTTP requests.
- Minifies all the generated code.
- Compress the output using **gzip**.

### Total Transferred Data Size: **5.1KB (5,070 bytes)**<br /> Live URL Project : [alterebro.github.io/10k](http://alterebro.github.io/10k)


#### Distributable generated files :

- `index.html` : main file. Depending on the server configuration, content is automatically gzipped so this file will be alright, otherwise the next two files are also provided.
- `index.html.gz` : the same index file already gzipped. Some servers like *nginx* serve the pre-compressed `.gz` version of a file if it is present on the file system.
- `index.php` PHP index file that just takes the the index.html data and compress it using the gzip output buffer just in case the server allows PHP scripting.


#### Some tricks used to reduce size :

- Some links have been shortened using the `goo.gl` service
- Links to external pages are protocol-less (`//link...`)
- Using one-character `class` names and `id`'s
- Replace and convert `strong` to `b` tags
- Use SVG graphics as data-urls to reduce HTTP Requests
- Optimize the SVG's output using **[SVGO](https://github.com/svg/svgo)**
- Remove redundant `role` attributes

---

#### Development

- Clone the GitHub repository

```sh
$ git clone https://github.com/alterebro/10k.git
$ cd 10k-aparte/
```

- Install dependencies

```sh
$ npm install
```

- Build the project:

```sh
# fire default gulp task
$ gulp
```

- Start a test development local server ( **PHP** ) :

```sh
$ php -S localhost:8000 -t dist/
# use instead localhost : 0.0.0.0 or local IP (i.e) 192.168.1.134
# dist/ : relative folder to be served
```
