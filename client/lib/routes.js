if (Meteor.isClient) {
	// code that checks for login and log out
	Accounts.onLogin(function() {
		FlowRouter.go('recipe-book');
	});
	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
};
// when a route is being entered
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home')
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		// if statement
		if(Meteor.userId()) {
			FlowRouter.go('recipe-book')
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

// new route passing the ID of recipe on url
FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});