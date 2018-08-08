(function() {
	var resume = {
		zh: {
			title: '简 历',
			name: '侯 斐',
			role: 'web 全栈工程师，linux 系统工程师',
			about_t: '关 于',
			about: [
				{k: 'proglang', v: 'javascript, php, python, bash', fa: 'fas fa-code', title: 'language'},
				{k: 'devenv', v: 'bash, screen, vim, fedora', fa: 'fas fa-desktop', title: 'devel env'},
				{k: 'loc', v: 'remote, startups, hangzhou, shanghai', fa: 'fas fa-heart', title: 'would like'},
				{k: 'site', v: 'https://xtod.net', fa: 'fas fa-link', link: 'https://xtod.net', title: 'website: '},
				{k: 'mail', v: 'job@xtod.net', fa: 'fas fa-envelope', link: 'mailto:job@xtod.net', title: 'email: '},
				{k: 'key', v: 'public key', fa: 'fas fa-key', link: 'https://xtod.net/xtod.pub'},
				{k: 'itbooks', v: '编码-Petzold,浪潮之巅,黑客与画家,汇编语言-王爽', fa: 'fas fa-book', title: '最爱书籍'},
				{k: 'books', v: '红楼梦，北方的空地，鲁迅，冯骥才', fa: 'fas fa-book', title: '最爱书籍'},
			],
			sn_t: '社交网络',
			exp_t: '工作经历',
			edu_t: '教育经历',
			intro: '简练、忠信、好学、求真。擅长 Linux 系统工程，目前兴趣在 web 开发。主技术栈为 php, symfony 4, twig, bootstrap 4, vue.js, mustache.js 及原生 javascript ，后端方向，可做全栈开发。具备团队组织协调能力。',
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
			skills_t: '技 能',
			skills: [
				'LCTT ( linux.cn 翻译组) 成员，为 linux.cn 贡献过多篇翻译',
				'当地田协会员，完成多次马拉松赛事；跑步结婚上头条',
				'熟悉 AWS , GCP , Azure , Vultr , DigitalOcean 等云平台',
				'git, composer, npm',
				'ansible, docker, kvm, ',
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
	
	resume.en = Object.assign({}, resume.zh);
	resume.en.title = 'résumé';
	resume.en.name = 'Arc Tod';
	resume.en.role = 'full-stack developer, linux administrator';
	resume.en.about_t = 'about';
	resume.en.skills_t = 'skills';
	resume.en.sn_t = 'social network';
	resume.en.exp_t = 'experiences';
	resume.en.edu_t = 'education';
	resume.en.devenv_t = '开发环境: ';
	resume.en.proglang_t = '语言： ';
	resume.en.location_t = '工作期望： ';
	resume.en.location = '远程，初创，杭州，上海';
	resume.en.site_t = '网站： ';
	resume.en.mail_t = '邮箱： ';
	resume.en.exps = [
				{
					com: 'google, 2014-2016, ceo',
					job: '我是ceo'
				},
				{
					com: 'facebook, 2010-2013, ceo',
					job: '我还是ceo.'
				}
			];
	resume.en.edu = '自学';

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
