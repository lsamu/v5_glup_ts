var gulp = require("gulp");
var ts = require("gulp-typescript");
var babel = require("gulp-babel");

var tsProject = ts.createProject("./tsconfig.json");
gulp.task("tsc", done => {
  gulp
    .src(tsProject.config.include)
    .pipe(tsProject())
    .pipe(babel({
      babelrc: false,
      plugins: ['transform-es2015-modules-commonjs']
    }))
    .pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
  done();
});

// gulp.task(
//   "default",
//   gulp.series("tsc", done => {
//     gulp.watch(
//       "./src/**/*/ts",
//       gulp.series("tsc")
//     );
//     done();
//   })
// );
// gulp.task("default", ["tsc"], done => {
//   gulp.watch("./src/**/*.ts", ["tsc"]);
//   done();
// });
