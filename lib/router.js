Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});



Router.route('/', {
	name: 'homePage'
});

Router.route('/about', {
	name: 'aboutPage',
	waitOn: function() {
		return false;		
	}
});
