(function() {
	var resume = {
		en: {
			title: 'résumé',
			name: 'Arc Tod',
			role: 'full-stack developer, linux administrator',
			about_t: 'about',
			about: [
				{k: 'proglang', v: 'javascript, php, python, bash', fa: 'fas fa-code', title: 'language'},
				{k: 'devenv', v: 'bash, screen, vim, fedora', fa: 'fas fa-desktop', title: 'devel env'},
				{k: 'loc', v: 'remote, startups, hangzhou, shanghai', fa: 'fas fa-heart', title: 'would like'},
				{k: 'site', v: 'https://xtod.net', fa: 'fas fa-link', link: 'https://xtod.net', title: 'website: '},
				{k: 'mail', v: 'job@xtod.net', fa: 'fas fa-envelope', link: 'mailto:job@xtod.net', title: 'email: '},
				{k: 'key', v: 'public key', fa: 'fas fa-key', link: 'https://xtod.net/xtod.pub'},
			],
			sn_t: 'social network',
			exp_t: 'experiences',
			edu_t: 'education',
			intro: '简练、忠信、好学、求真。擅长 Linux 系统工程，目前兴趣在 web 开发。主要技术栈为 php, symfony 4, twig, bootstrap 4, vue.js, mustache.js 及原生 javascript ，后端方向，可做全栈开发。具备团队组织协调能力。',
			devenv_t: 'devel env: ',
			devenv: 'bash, screen, vim, Fedora',
			proglang_t: 'language: ',
			proglang: [
				{name: 'javascript', percent: '60%'},
				{name: 'php', percent: '70%'},
				{name: 'python', percent: '40%'},
				{name: 'bash', percent: '85%'},
				{name: 'vue.js', percent: '60%'},
				{name: 'symfony', percent: '60%'},
				{name: 'bootstrap', percent: '85%'},
				{name: 'sql', percent: '60%'},
			],
			skills_t: 'skills',
			skills: [
				'LCTT ( linux.cn 翻译组) 成员，为 linux.cn 贡献过多篇翻译',
				'本地田协会员，完成多次马拉松赛事',
				'熟悉 AWS , GCP , Azure , Vultr , DigitalOcean 等云平台',
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
			edu: 'self-taught',
			sns: [
				{name: 'github', link: 'https://github.com/xtod', fa: 'fab fa-github'},
				{name: 'stack overflow', link: 'https://stackoverflow.com/users/7714132', fa: 'fab fa-stack-overflow'},
				{name: 'xtod@freenode', link: '#'},
				{name: 'twitter', link: 'https://twitter.com/arctod', fa: 'fab fa-twitter'},
				{name: 'quora', link: 'https://www.quora.com/profile/arctod', fa: 'fab fa-quora'},
				{name: 'linkedin', link: 'https://www.linkedin.com/in/dotcra/', fa: 'fab fa-linkedin'},
				{name: 'dotcra', link: '#', fa: 'fab fa-weixin'},
			],
		},
	};
	
	resume.zh = Object.assign({}, resume.en);
	resume.zh.title = '简 历';
	resume.zh.name = '侯 斐';
	resume.zh.role = 'web 全栈工程师，linux 系统工程师';
	resume.zh.about_t = '关 于';
	resume.zh.skills_t = '技 能';
	resume.zh.sn_t = '社交网络';
	resume.zh.exp_t = '工作经历';
	resume.zh.edu_t = '教育经历';
	resume.zh.intro = '自幼聪敏好学，据《旧唐书》记载，他六岁即能写文章，文笔流畅，被赞为“神童”。九岁时，读颜师古注《汉书》，作《指瑕》十卷以纠正其错。十六岁时，应幽素科试及第，授职朝散郎。';
	resume.zh.devenv_t = '开发环境: ';
	resume.zh.proglang_t = '语言： ';
	resume.zh.location_t = '工作期望： ';
	resume.zh.location = '远程，初创，杭州，上海';
	resume.zh.site_t = '网站： ';
	resume.zh.mail_t = '邮箱： ';
	resume.zh.skills = [
				'技能 1',
				'技能 2',
				'技能 3',
				'技能 4',
				'技能 5',
				'技能 6',
				'技能 7', 
				'技能 8', 
				'技能 9'
			];
	resume.zh.exps = [
				{
					com: 'google, 2014-2016, ceo',
					job: '我是ceo'
				},
				{
					com: 'facebook, 2010-2013, ceo',
					job: '我还是ceo.'
				}
			];
	resume.zh.edu = '自学';

	var lang = (navigator.language || navigator.userLanguage).substr(0, 2);
	if (lang !== 'zh') lang = 'en';
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
		
		Mustache.parse(tpl.innerHTML);

		var main = document.getElementById('main');
		
		main.innerHTML = Mustache.render(tpl.innerHTML, resume[lang]);

		var title = document.getElementById('title');
		title.innerText = resume[lang].title;

		en.classList.remove('active');
		zh.classList.remove('active');
		document.getElementById(lang).classList.add('active');
	}
})();
