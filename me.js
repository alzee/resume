var me = {
	'en': {
		'title': 'resume',
		'name': 'dot craft',
		'role': 'full-stack developer, linux administrator',
		'about_t': 'about',
		'skills_t': 'skills',
		'sn_t': 'social network',
		'exp_t': 'experiences',
		'edu_t': 'education',
		'intro': 'i am hahaha',
		'devenv_t': 'devel env: ',
		'devenv': 'vim + bash, Fedora 27',
		'proglang_t': 'language: ',
		'proglang': ['javascript, php, python, bash'],
		'proglang': [
			{'name': 'javascript', 'percent': '60%'},
			{'name': 'php', 'percent': '70%'},
			{'name': 'python', 'percent': '40%'},
			{'name': 'bash', 'percent': '80%'},
		],
		'location_t': 'would like: ',
		'location': 'remote, startups, hangzhou, shanghai',
		'site_t': 'website: ',
		'site': 'https://dotcra.com',
		'mail_t': 'email: ',
		'mail': 'job@dotcra.com',
		'skills': [
			'skill 1',
			'skill 2',
			'skill 3',
			'skill 4',
			'skill 5',
			'skill 6',
			'skill 7', 
			'skill 8', 
			'skill 9'
		],
		'exps': [
			{
				'com': 'google ceo',
				'job': 'i am goddamn ceo'
			},
			{
				'com': 'facebook ceo',
				'job': 'i am goddamn ceo. Again'
			}
		],
		'edu': 'self-taught'
	},
	'zh': {
	}
};

var main = document.getElementById('main');
var t = Mustache.render(main.innerHTML, me.en);
main.innerHTML = t;

var title = document.getElementById('title');
title.innerText = Mustache.render(title.innerText, me.en);
