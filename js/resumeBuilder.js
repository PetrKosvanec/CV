/*
My code to build the resume.
 */

var skills = ["HTML", "CSS", "JavaScript", "jQuery", "SQL", "Python"];
var bio = {
	"name": "Petr Košvanec",
	"role": "Tester",
	"contacts": {
	  "mobile":   "+420 722 803 636",
	  "email":   "kosvanec@gmail.com",
	  "location": "Nymburk",
	  "facebook": "www.facebook.com/petr.kosvanec.16",
	  "github":   "PetrKosvanec"
	},
	"pictureURL": 'images/me_2.jpg',
	"welcomemessage": "Welcome!",
	"skills": skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedGitHub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);

$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedPic);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill;
	for (i = 0; i < bio.skills.length; i++) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}


var work = {
	"jobs": [{
		"employer": "Tesco Stores",
		"title": "Shop Assistant, produce",
		"dates": "Nov 2015 – Nov 2016",
		"location": "Poděbrady, CZ",		
		"description": "Stocking, making display decisions, price tagging, discounting, and removing perished items. For the tasks I used PDU / PDA."
	}, {
		"employer": "Kaufland",
		"title": "Shop Assistant, beverages",
		"dates": "Jun 2015 – Oct 2015",
		"location": "Nymburk, CZ",		
		"description": "Stocking, making display decisions, price tagging. For the tasks I used PDU / PDA."
	}, {
		"employer": "Randalls Food Market",
		"title": "Shop Assistant, produce",
		"dates": "Mar 2015 – Jun 2015",
		"location": "Austin, TX",		
		"description": "Stocking produce, customer service."
	}, {
		"employer": "Sharon Smith Properties",
		"title": "Rentals Coordinator",
		"dates": "Mar 2014 – Jun 2015",
		"location": "Austin, TX",		
		"description": "Customer service, bookkeeping, accounting, janitorial works, repairs, marketing on & dealing w. booking websites - all aspects of short-term and long-term rentals in six houses and sixteen rental units."
	}, {
		"employer": "Technical secondary & vocational school, Nymburk / SOŠ a SOU Nymburk",
		"title": "Teacher",
		"dates": "Aug 2008 – Feb 2014",
		"location": "Nymburk, CZ",
		"description": "Teaching ESL (English as a second language), ICT, and programming in C language."
	}, {
		"employer": "GMB",
		"title": "Network Administrator / Budgeter",
		"dates": "2005 – 2008",
		"location": "Prague, CZ",
		"description": "(1) Budgeted and following approval provisioned for and performed substantial upgrade of the employer's modem – switch – windows_home network onto modem – server_w_windows_server&exchange – switches – windows_profes., including remote access to the server; after I had setup the server (and the workstations anew) I was administering the network and supporting the users for over two years. (2) Budgeted commercial kitchens for colleagues, in some cases sold them."
	}, {
		"employer": "Macron Software",
		"title": "International Licensing Manager",
		"dates": "2001 – 2005",
		"location": "Prague, CZ",
		"description": "Licensing of Dorling Kindersley (Pearson) education / entertainment CD‑ROMs for localization into other languages worldwide, customer support, sales of localization services. Meeting leads and clients during fairs, administered hundreds of contracts. Spotted business development opportunities, and profitably fulfilled customers' needs. Worked with leads, clients, software developers, managers, and owners of the intellectual property."
	}, {
		"employer": "Group 4 Securitas, division Security Systems",
		"title": "Procurement Manager",
		"dates": "1997 – 2001",
		"location": "Prague, CZ",
		"description": "I was responsible mainly for purchase and on time delivery of security components. - Issued orders per requests of project managers, - Oversaw and was responsible for deliveries and clearance through customs, - Entered data, collaborated on filling databases of purchase module of SAP R3 (ERP SW). Worked with vendors, finance, project, and engineering dpts., with network administrator and managers, with software implementators, and customers."
	}]
};

if (work.jobs.length > 0) {

	function displayWork() {

		for (i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedJobDescript = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedEmployer + formattedJobTitle);
			$(".work-entry:last").append(formattedJobDates);
			$(".work-entry:last").append(formattedJobLocation);
			$(".work-entry:last").append(formattedJobDescript);
			}
	}

	displayWork();

}


var projects = {
	"projects": [{
		"title": "MiloviceFree, o.s.",
		"dates": "Sep 2004 – Jul 2006",
		"description": "In 2004 we founded this non-profit. In order to advance member's information technology training and research. Through building linux-servers based wireless metro area network for Milovice, Nymburk county, Czech."
	}]
};

if (projects.projects.length > 0) {

	projects.display = function() {
		
		for (i=0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjTit = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjDescr = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjTit);
			$(".project-entry:last").append(formattedProjDates);
			$(".project-entry:last").append(formattedProjDescr);
		}
	}

	projects.display();
}


var education = {
	"schools": [ {
		"name": "Anglo-American University",
		"degree": "BA",		
		"location": "Prague, CZ",
		"date": 2011,
		"major": "Business Administration",
		"url": "http://www.aauni.edu/"
	}],
	"onlineCourses": [{
		"name": "Introduction to Computer Science and Programming Using Python",
		"school": "MITx",
		"date": 2015,
		"url": "http://www.edx.org"
	}, {
		"name": "Introduction to Computational Thinking and Data Science",
		"school": "MITx",
		"date": 2016,
		"url": "http://www.edx.org"
	}, {
		"name": "Javascript Basics",
		"school": "Udacity",
		"date": 2017,
		"url": "http://www.udacity.com/"
	}, {
		"name": " DEV208x Introduction to jQuery",
		"school": "Microsoftx",
		"date": 2017,
		"url": "http://www.edx.org/"
	}]
};

if (education.schools.length > 0 || education.onlineCourses.length > 0)  {

	education.display = function() {

		for (i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			}

		if (education.onlineCourses.length > 0) {

			$("#education").append(HTMLonlineClasses);

			for (i=0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].name);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
			
		}
	}

	education.display();
}


/*
$("#main").append(internationalizeButton);
function inName(name) {
	// n[0] - first name,	n[1] - surname
	var n = name.trim().split(" ");
	return n[0].charAt(0).toUpperCase() + n[0].slice(1).toLowerCase() + " " + n[1].toUpperCase();
}
*/


$("#mapDiv").append(googleMap);


$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").append(formattedGitHub);


/*{
		"name": "Gymnázium Nymburk",
		"location": "Nymburk, CZ",/*
		"date": 1982,
		"degree": "",
		"major": ["GeneralEd", "Sciences"],
		"url": "https://www.gym-nymburk.cz"
	},*/