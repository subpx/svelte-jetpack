const path = require('path');
const gulp = require('gulp');
const yargs = require('yargs');
const template = require('gulp-template');
const rename = require('gulp-rename');
const gulpUtil = require('gulp-util');

const root = 'src';

gulp.task('component', component);

function component() {
  if(!yargs.argv.name) {
    throw new gulpUtil.PluginError({
      plugin: 'component',
      message: 'name is empty.'
    });
  }

  const templatePath = resolveToTemplate();
  const componentName = sentenceCase(yargs.argv.name);
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, componentName);

  return gulp.src(templatePath)
    .pipe(template({
      name: componentName
    }))
    .pipe(rename((renamePath) => {
      renamePath.basename = renamePath.basename.replace('Temp', componentName);
    }))
    .pipe(gulp.dest(destPath));
}

function resolveToComponents(glob) {
  return path.join(root, 'modules', glob || '');
}

function resolveToTemplate() {
  return path.join(__dirname, 'generator', 'component/**/*.**');
}

function sentenceCase(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
