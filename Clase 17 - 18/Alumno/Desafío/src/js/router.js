import crossroads from 'crossroads';
import homeController from './controllers/homeController';
import peopleController from './controllers/peopleController';
import localstorageController from './controllers/localstorageController';
import contactController from './controllers/contactController';

function router() {
  crossroads.addRoute('', function() {
    $('#root').load('./partials/home.html', homeController);
  });

  crossroads.addRoute('#/contact', function() {
    $('#root').load('./partials/contact.html', contactController);
  });

  crossroads.addRoute('#/people', function() {
    $('#root').load('./partials/people.html', peopleController);
  });

  crossroads.addRoute('#/local-storage', function() {
    $('#root').load('./partials/local-storage.html', localstorageController);
  });

  $(window).on('hashchange', function() {
    crossroads.parse(window.location.hash);
  });

  crossroads.parse(window.location.hash);
}

export default router;
