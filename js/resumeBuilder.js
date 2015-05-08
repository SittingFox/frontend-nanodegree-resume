var bio = {
	"name": "Ash Ketchum",
	"role": "Pokémon Trainer",
	"contacts": {
		"mobile": "(150) 151-1000",
		"email": "aketchum@émail.com",
		"github": "MAshter",
		"twitter": "@GottaKetchumAll",
		"location": "Setagaya, Tokyo"
	},
	"welcomeMessage": "Welcome to my page!",
	"skills": ["training", "hardworking", "surviving Thundershocks"],
	"biopic": "http://placekitten.com/g/150/150",
	"display": function () {
		var header = $('#header');
		prependItem(header, HTMLheaderRole, this.role);
		prependItem(header, HTMLheaderName, this.name);
		
		var topContacts = $('#topContacts');
		appendItem(topContacts, HTMLmobile, this.contacts.mobile);
		appendItem(topContacts, HTMLemail, this.contacts.email);
		appendItem(topContacts, HTMLgithub, this.contacts.github);
		appendItem(topContacts, HTMLtwitter, this.contacts.twitter);
		appendItem(topContacts, HTMLlocation, this.contacts.location);
		
		appendItem(header, HTMLbioPic, this.biopic);
		appendItem(header, HTMLwelcomeMsg, this.welcomeMessage);
		
		appendItem(header, HTMLskillsStart, '');
		appendArray(header, HTMLskills, this.skills);
	}
};

var education = {
	"schools": [
		{
			"name": "Pokémon Technical Institute",
			"location": "Setagaya, Tokyo",
			"degree": "none",
			"majors": ["training"],
			"dates": 1997,
			"url": "http://bulbapedia.bulbagarden.net"
		}
	],
	"onlineCourses": [
		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "http://udacity.com"
		}
	],
	"display": function() {
		var educationArea = $('#education');
		
		appendItem(educationArea, HTMLschoolStart, '');
		
		for (var i = 0; i < this.schools.length; i++) {
			var school = this.schools[i];
			
			appendItem(educationArea, HTMLschoolName, school.name);
			appendItem(educationArea, HTMLschoolDegree, school.degree);
			appendItem(educationArea, HTMLschoolDates, school.dates);
			appendItem(educationArea, HTMLschoolLocation, school.location);
			appendArray(educationArea, HTMLschoolMajor, school.majors);
		}
		
		appendItem(educationArea, HTMLonlineClasses, '');
				
		for (var i = 0; i < this.onlineCourses.length; i++) {
			var course = this.onlineCourses[i];
			
			appendItem(educationArea, HTMLonlineTitle, course.title);
			appendItem(educationArea, HTMLonlineSchool, course.school);
			appendItem(educationArea, HTMLonlineDates, course.date);
			appendItem(educationArea, HTMLonlineURL, course.url);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Self-employed",
			"title": "Pokémon Trainer",
			"location": "Tokyo, Japan,",
			"dates": "1997-present",
			"description": "Traveling around the world, collecting and training Pokémon."
		}
	],
	"display": function () {
		var workArea = $('#workExperience');
		
		appendItem(workArea, HTMLworkStart, '');
		
		for (var i = 0; i < this.jobs.length; i++ ) {
			var job = this.jobs[i];
			
			appendItem(workArea, HTMLworkEmployer, job.employer);
			appendItem(workArea, HTMLworkTitle, job.title);
			appendItem(workArea, HTMLworkDates, job.dates);
			appendItem(workArea, HTMLworkLocation, job.location);
			appendItem(workArea, HTMLworkDescription, job.description);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "PokéDex",
			"dates": "1997-present",
			"description": "An index on the many different Pokémon.",
			"images": [
				"http://placekitten.com/g/200/250",
				"http://placekitten.com/g/200/250"
			]
		}
	],
	"display": function () {
		var projectArea = $('#projects');
		
		appendItem(projectArea, HTMLprojectStart, '');
		
		for (var i = 0; i < this.projects.length; i++ ) {
			var project = this.projects[i];
			
			appendItem(projectArea, HTMLprojectTitle, project.title);
			appendItem(projectArea, HTMLprojectDates, project.dates);
			appendItem(projectArea, HTMLprojectDescription, project.description);
			appendArray(projectArea, HTMLprojectImage, project.images);
		}
	}
}

var appendItem = function (element, helper, item) {
	var formattedItem = helper.replace("%data%", item);
	element.append(formattedItem);
}

var appendArray = function (element, helper, items) {
	for (var i = 0; i < items.length; i++) {
		appendItem(element, helper, items[i]);
	}
}

var prependItem = function (element, helper, item) {
	var formattedItem = helper.replace("%data%", item);
	element.prepend(formattedItem);
}


bio.display();
work.display();
education.display();
projects.display();
