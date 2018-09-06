(function() {
	var resume = {
		zh: {
			title: '简 历',
			name: '侯 斐',
			role: 'web 全栈工程师，linux 系统工程师',
			about_t: '简 介',
			about: [
				{k: 'proglang', v: 'javascript, php, python, bash', fa: 'fas fa-code', title: 'language'},
				{k: 'devenv', v: 'bash + screen + vim, fedora', fa: 'fas fa-desktop', link: 'https://xtod.net/journal/352', title: 'devel env'},
				{k: 'loc', v: '远程，初创，杭州，上海', fa: 'fas fa-heart', title: 'would like'},
				{k: 'site', v: 'https://xtod.net', fa: 'fas fa-link', link: 'https://xtod.net', title: 'website: '},
				{k: 'mail', v: 'job@xtod.net', fa: 'fas fa-envelope', link: 'mailto:job@xtod.net', title: 'email: '},
				{k: 'key', v: 'https://xtod.net/xtod.pub', fa: 'fas fa-key', link: 'https://xtod.net/xtod.pub'},
				{k: 'itbooks', v: '编码-Petzold,浪潮之巅,黑客与画家,汇编语言-王爽', fa: 'fas fa-book', title: '最爱书籍'},
				{k: 'books', v: '红楼梦，北方的空地，鲁迅，冯骥才', fa: 'fas fa-book', title: '最爱书籍', class: 'd-none'},
				{k: 'btc', v: '1K4PKpaH55iMhvgdpUwhMAh4acAUajd3Mg', fa: 'fab fa-bitcoin', title: 'btc'},
			],
			sn_t: '社交网络',
			exp_t: '工作经历',
			edu_t: '教育经历',
			intro: '简练、忠信、好学、求真。具备团队组织协调能力。擅长 Linux 系统工程，精通 Fedora, Debian, RedHat/CentOS, LFS 等发行版。目前兴趣在 web 开发，主技术栈为 php, symfony 4, twig, bootstrap 4, vue.js, mustache.js 及原生 javascript ，后端方向，可做全栈，可独立开发。',
			devenv_t: '开发环境: ',
			devenv: 'bash, screen, vim, Fedora',
			proglang_t: '语言： ',
			proglang: [
				{name: 'javascript', percent: '60%'},
				{name: 'php', percent: '80%'},
				{name: 'python', percent: '40%'},
				{name: 'bash', percent: '85%'},
				{name: 'vue.js', percent: '70%'},
				{name: 'symfony', percent: '60%'},
				{name: 'bootstrap', percent: '90%'},
				{name: 'sql', percent: '55%'},
			],
			skills_t: '介 绍',
			skills: [
				'精通 LAMP 。PHP 代码遵循 PSR-1, PSR-2, PSR-4 规范',
				'精通 bootstrap, vue.js 等前端框架',
				'熟悉自动化运维(ansible), 虚拟化(kvm, docker)',
				'AWS , GCP , Azure , Vultr , DigitalOcean , 阿里云等云平台维护经验',
				'git, composer, npm...',
				'LCTT ( linux.cn 翻译组) 成员，为 linux.cn 贡献过多篇翻译',
				'当地田协会员，完成多次马拉松赛事；跑步结婚上头条',
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
			edu: '自学',
			sns: [
				{name: 'github', link: 'https://github.com/xtod', fa: 'fab fa-github'},
				{name: 'stack overflow', link: 'https://stackoverflow.com/users/7714132', fa: 'fab fa-stack-overflow'},
				{name: 'xtod@freenode', link: '#'},
				{name: 'twitter', link: 'https://twitter.com/arctod', fa: 'fab fa-twitter'},
				{name: 'facebook', link: 'https://www.facebook.com/ArcTod', fa: 'fab fa-facebook'},
				{name: 'quora', link: 'https://www.quora.com/profile/arctod', fa: 'fab fa-quora'},
				{name: 'linkedin', link: 'https://www.linkedin.com/in/dotcra/', fa: 'fab fa-linkedin'},
				//{name: 'dotcra', link: '#', fa: 'fab fa-weixin'},
			],
			more_t : '更 多',
			more: [
				'崇尚命令行。用 bash + screen + vim 作 IDE ，用 nvlc 听歌，用 ImageMagick 压缩图片，用 nmcli 管理网络，用 transmission-remote BT，用 pacmd 切换耳机音响，用 gsettings 设置系统，用 oathtool 生成 OTP 动态密码，用 irssi 上 irc ，只玩 nethack 和 myman ，chrome 装 cVim 扩展……除 gimp, chrome, eog, evince, virtualbox, wireshark 以外，all in CLI 。',
				'崇尚简洁。简洁大方、引导性强的网站才是好网站。',
				'如果一件事要做3次以上，就会写一个函数/脚本，比如自签名证书，比如每隔半年安装最新的 Fedora ，然后通过脚本恢复所有设置。(为什么重装？ 不是可以用 dnf 升级么？因为我的系统仅有 1700+ packages ，用 dnf 升级就要 100 分钟。而重装 10 分钟，跑一遍脚本 25 分钟，一起只要 35 分钟。而且，重装才有“新“的感觉。)',
				'常用命令都要用函数封装，函数名一个字母，no more tab 。比如写一个函数 g() 来代替 git ，不带参数就是 git status ,  g c msg 则是 git add. ; git commit -m msg ; git push，如果没有 msg 就用 placeholder , 还可以加入一些机制来阻止 push 。再比如 alias v="command vim" ; alias vim="sudo vim" 。',
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
	resume.en.devenv_t = 'devel env: ';
	resume.en.proglang_t = 'language: ';
	//resume.en.about.loc.v= 'remote, startups, hangzhou, shanghai';
	resume.en.edu = 'self-taught';
	resume.en.more_t = 'more';

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
