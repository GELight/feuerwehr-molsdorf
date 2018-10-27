import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('association');
  this.route('operation', function() {
    this.route('timetable');
    this.route('technology');
    this.route('members');
  });
  this.route('youth', function() {
    this.route('department', function() {
      this.route('education');
      this.route('timeline');
      this.route('freetime');
    });
    this.route('child-fire-brigade', function() {
      this.route('education');
      this.route('timeline');
      this.route('freetime');
    });
  });
  this.route('honor');
  this.route('imprint');
  this.route('disclaimer');
  this.route('dataprotection');
  this.route('competition');
  this.route('statute');
});

export default Router;
