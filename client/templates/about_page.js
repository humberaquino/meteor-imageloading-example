Template.aboutPage.rendered = function() {
	$("#kitty").one('load', function() {
		Session.set('kittyLoaded', true);
	});
};


Template.aboutPage.helpers({
	'kittyLoaded': function() {
		return Session.get('kittyLoaded');
	}
});
