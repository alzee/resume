(function() {
  // parses template ahead of time
  let tpl = document.getElementById('tpl').innerHTML;
  Mustache.parse(tpl);
  let yearAsAdmin = 2011;
  let yearAsDevOps = 2017;
  let yearAsPHPDev = 2015;
  let yearAsFullStack = 2018;
  let yearNow = new Date().getFullYear();

	let resume = {
		zh: {
			title: '简 历',
			name: 'Al Zee',
			role: 'DevOps & 全栈开发 ',
			about_t: '关 于',
			about: [
				{k: 'code', v: 'rust, go, php, python, typescript'},
				{k: 'envelope', v: 'job@alz.ee', link: 'mailto:job@alz.ee'},
				{k: 'desktop', v: 'fedora, i3wm, screen, bash, vim'},
				{k: 'phone', v: 'Kzg2IDEzMiAwNzI2IDIwMTE='},
				{k: 'link', v: 'https://alz.ee', link: 'https://alz.ee'},
				{k: 'rocketchat-brands', v: 'https://chat.alz.ee', link: 'https://chat.alz.ee'},
				{k: 'github', v: 'https://github.com/alzee', link: 'https://github.com/alzee'},
				{k: 'stack-overflow', v: 'https://stackoverflow.com/users/7714132/alzee', link: 'https://stackoverflow.com/users/7714132/alzee'},
				{k: 'upwork', v: 'https://www.upwork.com/freelancers/~01d68058abc4ec7e7e', link: 'https://www.upwork.com/freelancers/~01d68058abc4ec7e7e'},
				//{k: 'btc', v: '1K4PKpaH55iMhvgdpUwhMAh4acAUajd3Mg'},
				{t: 'IRC', v: 'alzee@libera.chat'},
				{k: 'key', v: 'https://alz.ee/pubkey', link: 'https://alz.ee/pubkey'},
				{k: 'bitcoin', v: '3AnpMLEdLXHa4fiTHGr6iWQrrPB2FRu56m'},
			],
			sn_t: '社交网络',
			intro: '擅长 *nix 系统，多年 DevOps 经验，熟悉全栈开发。',
			devenv_t: '开发环境: ',
			devenv: 'bash, screen, vim, Fedora',
			skills_t: '技 能',
			skills: [
                yearNow - yearAsAdmin + ' 年运维经验',
                yearNow - yearAsDevOps + ' 年 DevOps 经验',
                yearNow - yearAsPHPDev + ' 年 PHP 开发经验',
                yearNow - yearAsFullStack + ' 年全栈开发经验',
                '擅长 *nix 系统：Fedora, Debian, Ubuntu, RHEL/CentOS, FreeBSD, LFS...',
                '熟悉各项服务：httpd(Apache2), nginx, PostgreSQL, MySQL/MariaDB, Redis, nfs, WireGuard, Samba, dns, TrinityCore, FTP...',
                '常用库和框架：Symfony, Drupal, React, Angular, Django, Gin...',
                '常用语言：rust, go, php, python, typescript, bash, sql',
                '熟悉的云平台：AWS, GCP, Azure, Oracle, Vultr, DigitalOcean, Cloudflare, 阿里云',
                '虚拟化技术：KVM, VirtualBox, Docker',
                '常用工具：git, github, ansible, i3wm, screen, vim, npm, composer...',
                '翻译英文技术文档。前 LCTT 成员，为 linux.cn 贡献过多篇翻译',
			],
			po_t: '案 例',
			po: [
        '某再生资源信息服务平台',
        '某部战备器材库信息化管理系统',
        '某部民兵军事训练信息化管理系统',
        '某区人民法院内部信息平台',
        '某武警支队内部信息系统',
        '某区政府投资项目直报平台',
        '某银行信用卡中心机房管理系统',
      ],
		},
	};
	
	//resume.en = Object.assign({}, resume.zh);	// not supported by ie
	resume.en = JSON.parse(JSON.stringify(resume.zh));
	resume.en.title = 'résumé';
	resume.en.name = 'Al Zee';
	resume.en.role = 'DevOps Engineering & Full Stack Development';
	resume.en.intro= 'Self-motivated DevOps engineer with strong professional ethics and enthusiasm. Also experienced in Full-stack development.';
	resume.en.about_t = 'ABOUT';
	resume.en.skills_t = 'SKILLS';
	resume.en.sn_t = 'social network';
	resume.en.devenv_t = 'devel env: ';
	resume.en.proglang_t = 'language: ';
	resume.en.po_t = 'PORTFOLIO';
	//resume.en.about.loc.v= 'remote, startups, hangzhou, shanghai';
  resume.en.skills = [
    yearNow - yearAsAdmin + '+ years as SysAdmin',
    yearNow - yearAsDevOps + '+ years as DevOps',
    yearNow - yearAsPHPDev + '+ years as PHP Developer',
    yearNow - yearAsFullStack + '+ years as Full Stack Developer',
    'Linux: Fedora, Debian, RHEL/CentOS, LFS. And FreeBSD',
    'Services: httpd, nginx, mysql/mariadb, redis, nfs, samba, dns, ftp',
    'Frameworks: symfony, drupal, react, angular, django, gin',
    'Languages: rust, go, php, python, typescript, bash, sql',
    'Clouds: AWS, GCP, Azure, Oracle, Vultr, DigitalOcean, Cloudflare',
    'Virtualization: KVM, VirtualBox, Docker',
    'Tools: git, github, ansible, i3wm, screen, vim, npm, composer...',
    'Tech articles translation',
  ];

	let lang = (navigator.language || navigator.userLanguage).substr(0, 2);
	if (lang !== 'zh') lang = 'en';
	let en = document.getElementById('en');
	let zh = document.getElementById('zh');
	en.addEventListener('click', ch);
	zh.addEventListener('click', ch);

  let title = document.getElementById('title');
  let main = document.getElementById('main');
    
	ch(lang);

	function ch(){
		if (arguments[0] !== lang) {
			lang = this.innerText;
		}
		
		main.innerHTML = Mustache.render(tpl, resume[lang]);

		title.innerText = resume[lang].title;

		en.classList.remove('active');
		zh.classList.remove('active');
		document.getElementById(lang).classList.add('active');
	}
})();
