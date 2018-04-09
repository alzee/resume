var me = {
	en: {
		title: 'resume',
		name: 'dot craft',
		role: 'full-stack developer, linux administrator',
		about_t: 'about',
		skills_t: 'skills',
		sn_t: 'social network',
		exp_t: 'experiences',
		edu_t: 'education',
		intro: 'i am hahaha',
		devenv_t: 'devel env: ',
		devenv: 'vim + bash, Fedora 27',
		proglang_t: 'language: ',
		proglang: [
			{name: 'javascript', percent: '60%'},
			{name: 'php', percent: '70%'},
			{name: 'python', percent: '40%'},
			{name: 'bash', percent: '80%'},
		],
		location_t: 'would like: ',
		location: 'remote, startups, hangzhou, shanghai',
		site_t: 'website: ',
		site: 'https://dotcra.com',
		mail_t: 'email: ',
		mail: 'job@dotcra.com',
		skills: [
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
		exps: [
			{
				com: 'google, 2014-2016, ceo',
				job: 'i am goddamn ceo'
			},
			{
				com: 'facebook, 2010-2013, ceo',
				job: 'i am goddamn ceo. Again'
			}
		],
		edu: 'self-taught'
	},
	zh: {
		title: '简 历',
		name: '侯 斐',
		role: 'web 全栈工程师，linux 系统工程师',
		about_t: '关 于',
		skills_t: '技 能',
		sn_t: '社交网络',
		exp_t: '工作经历',
		edu_t: '教育经历',
		intro: '自幼聪敏好学，据《旧唐书》记载，他六岁即能写文章，文笔流畅，被赞为“神童”。九岁时，读颜师古注《汉书》，作《指瑕》十卷以纠正其错。十六岁时，应幽素科试及第，授职朝散郎。',
		devenv_t: '开发环境: ',
		devenv: 'vim + bash, Fedora 27',
		proglang_t: '语言： ',
		proglang: [
			{name: 'javascript', percent: '60%'},
			{name: 'php', percent: '70%'},
			{name: 'python', percent: '40%'},
			{name: 'bash', percent: '80%'},
		],
		location_t: '工作期望： ',
		location: '远程，初创，杭州，上海',
		site_t: '网站： ',
		site: 'https://dotcra.com',
		mail_t: '邮箱： ',
		mail: 'job@dotcra.com',
		skills: [
			'技能 1',
			'技能 2',
			'技能 3',
			'技能 4',
			'技能 5',
			'技能 6',
			'技能 7', 
			'技能 8', 
			'技能 9'
		],
		exps: [
			{
				com: 'google, 2014-2016, ceo',
				job: '我是ceo'
			},
			{
				com: 'facebook, 2010-2013, ceo',
				job: '我还是ceo.'
			}
		],
		edu: '自学'
	}
};

var lang = 'zh';
var en = document.getElementById('en');
var zh = document.getElementById('zh');
en.addEventListener('click', ch);
zh.addEventListener('click', ch);

ch(lang);

function ch(){
	if (arguments[0] !== lang) {
		lang = this.innerText;
	}
	var tpl = document.getElementById('tpl');
	
	var main = document.getElementById('main');
	main.innerHTML = Mustache.render(tpl.innerHTML, me[lang]);
	
	var title = document.getElementById('title');
	title.innerText = me[lang].title;
	
	en.classList.remove('active');
	zh.classList.remove('active');
	document.getElementById(lang).classList.add('active');
}
