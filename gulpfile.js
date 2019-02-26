var gulp = require("gulp");
var ts = require("gulp-typescript");

var tsProject = ts.createProject("./tsconfig.json");
gulp.task("tsc", done => {
  console.log(tsProject.config.include);
  gulp
    .src(tsProject.config.include)
    .pipe(tsProject())
    .pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
  done();
});

// gulp.task(
//   "default",
//   gulp.series(["tsc"], done => {
//     gulp.watch("./src/**/*.ts", ["tsc"]);
//     done();
//   })
// );
