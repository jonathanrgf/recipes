Recipes = new Meteor.Collection('recipes');

// rules for whos allowd to insert into recipes "if user id exist"
Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Recipes.attachSchema( RecipeSchema );
