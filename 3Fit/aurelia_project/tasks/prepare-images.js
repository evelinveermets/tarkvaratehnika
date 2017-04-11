import gulp from 'gulp';
import merge from 'merge-stream';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';

export default function prepareImages() {
  const taskImages = gulp.src( 'src/img/*' ) //use the file path to your image folder (this is where I put mine)
    .pipe( changedInPlace( { firstPass: true } ) )
    .pipe( gulp.dest( `${project.platform.output}/img` ) );

  return taskImages;
}