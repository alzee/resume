var dot = {
	'title': {
		'en': 'resume',
		'zh': '简 历'
	},
	'name': {
		'en': 'dot craft',
		'zh': '侯 斐'
	},
	'role': {
		'en': 'full-stack developer, linux administrator',
		'zh': 'web 全栈工程师, linux 系统工程师'
	},
	'about_t': {
		'en': 'about',
		'zh': '关于我'
	},
	'skills_t': {
		'en': 'skills',
		'zh': '技 能'
	},
	'sn_t': {
		'en': 'social network',
		'zh': '社交网络'
	},
	'exp_t': {
		'en': 'experiences',
		'zh': '工作经历'
	},
	'edu_t': {
		'en': 'education',
		'zh': '教育经历'
	},
	'intro': {
		'en': '',
		'zh': '自幼聪敏好学，据《旧唐书》记载，他六岁即能写文章，文笔流畅，被赞为“神童”。九岁时，读颜师古注《汉书》，作《指瑕》十卷以纠正其错。十六岁时，应幽素科试及第，授职朝散郎。'
	},
	'devenv_t': {
		'en': 'development environment: ',
		'zh': '开发环境： '
	},
	'devenv': 'vim + bash, Fedora 27',
	'proglang_t': {
		'en': 'language: ',
		'zh': '语 言： '
	},
	'proglang': 'javascript, php, python, bash',
	'location': {
		'en': '',
		'zh': '期望工作地： 远程、杭州、上海、十堰'
	},
	'site_t': {
		'en': 'website: ',
		'zh': '网 站： '
	},
	'site': 'https://dotcra.com',
	'mail_t': {
		'en': 'email: ',
		'zh': '邮 箱： '
	},
	'mail': 'job@dotcra.com',
	'skill1': {
		'en': 'abc',
		'zh': '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。'
	},
	'skill2': {
		'en': 'abc',
		'zh': '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。'
	},
	'skill3': {
		'en': 'skill 3',
		'zh': '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。'
	},
	'skill4': {
		'en': 'skill 3',
		'zh': '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。'
	},
	'skill5': {
		'en': 'skill 3',
		'zh': '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。'
	},
	'skill6': {
		'en': 'skill 3',
		'zh': '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。'
	},
	'skill7': {
		'en': 'skill 3',
		'zh': '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。'
	},
	'skill8': {
		'en': 'skill 3',
		'zh': '熟悉亚马逊 aws ，google cloud，Microsoft Azure'
	},
	'exp1_t': {
		'en': '',
		'zh': '游览巴蜀山川景物'
	},
	'exp1': {
		'en': '',
		'zh': '历时三年游览巴蜀山川景物，创作了大量诗文。'
	},
	'exp2_t': {
		'en': '',
		'zh': '虢州参军'
	},
	'exp2': {
		'en': '',
		'zh': '在参军任上，因私杀官奴二次被贬。'
	},
	'edu': {
		'en': 'self-taught',
		'zh': '自学'
	}
};

for (var i in dot) {
	var t = document.getElementById(i);
	if (t) {
		if (typeof dot[i] === 'string') {
			t.innerText = dot[i];
		}
		else{
			t.innerText = dot[i].zh;
		}
	}
}
