const gulp = require('gulp')
const gulpDeployFtp = require('gulp-deploy-ftp')
 
gulp.src('public/')
  .pipe(gulpDeployFtp({
    remotePath: '/tmp',
    host: 'localhost',
    port: 21,
    user: 'foo',
    pass: 'bar'
  })
  .pipe(gulp.dest('dest')))