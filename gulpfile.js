"use strict"

const gulp = require("gulp"),
babel = require("gulp-babel"),
uglify = require("gulp-uglify"),
concat = require("gulp-concat"),
shell = require("gulp-shell"),
plumber = require("gulp-plumber"),
iife = require("gulp-iife"),
browserSync = require("browser-sync").create(),

project = {
   src: ["./src/*.js"],
	merge: "dbd.min.js",
	dest: "./dist/",
	port: 3000
},

serve = shell.task("jekyll serve")


function scripts() {
   return gulp.src(project.src)
   .pipe(plumber())
   .pipe(concat(project.merge))
   .pipe(babel({presets: ["env"]}))
	.pipe(iife({useStrict: false}))
	.pipe(uglify({compress: {properties: false}, output: {comments: "/^!/"}}))
	.pipe(gulp.dest(project.dest))
}

function watch(done) {
	gulp.watch(project.src, scripts)
	done()
}

function sync(done) {
   browserSync.init({
      server: "./_site/",
		open: false,
		ghostMode: false
   })
	browserSync.watch(["./_site/*"]).on("change", browserSync.reload)
	done()
}

exports.scripts = scripts
exports.watch = watch
exports.default = gulp.series(scripts, watch, sync, serve)
