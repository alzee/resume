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
			name: '侯斐 (Al Zee)',
			role: 'DevOps & 全栈开发 ',
			about_t: '关 于',
			about: [
				{k: 'code', v: 'rust, go, php, python, typescript, bash'},
				{k: 'envelope', v: 'job@alz.ee', link: 'mailto:job@alz.ee'},
				// {k: 'desktop', v: 'fedora, i3wm, screen, bash, vim'},
				{k: 'phone', v: 'Kzg2IDEzMiAwNzI2IDIwMTE='},
				{k: 'link', v: 'https://alz.ee', link: 'https://alz.ee'},
				{k: 'rocketchat-brands', v: 'https://alz.ee/chat', link: 'https://alz.ee/chat'},
				{k: 'github', v: 'https://alz.ee/github', link: 'https://alz.ee/github'},
				{k: 'stack-overflow', v: 'https://alz.ee/stackoverflow', link: 'https://alz.ee/stackoverflow'},
				{k: 'upwork', v: 'https://alz.ee/upwork', link: 'https://alz.ee/upwork'},
				//{k: 'btc', v: '1K4PKpaH55iMhvgdpUwhMAh4acAUajd3Mg'},
				{k: 'libera-chat', v: 'ircs://irc.libera.chat:6697/#alzee', link: 'https://web.libera.chat/#alzee'},
				{k: 'key', v: 'https://alz.ee/pubkey', link: 'https://alz.ee/pubkey'},
				// {k: 'bitcoin', v: '3AnpMLEdLXHa4fiTHGr6iWQrrPB2FRu56m'},
			],
			sn_t: '社交网络',
			exp_t: '工作经历',
			intro: '擅长 *nix 系统，多年 DevOps 经验，熟悉全栈开发。',
			devenv_t: '开发环境: ',
			devenv: 'bash, screen, vim, Fedora',
			capable_t: '我能为您',
			capable: [
        '开发：APP、小程序、个人网站、企业官网、业务系统、桌面工具...',
        '部署：网页服务器、邮件服务器、数据库、共享、代理、反向代理、VPN、缓存、队列、负载均衡、自动化、CI/CD...',
        '提供：Linux 系统支持、IT 解决方案',
      ],
			skills_t: '技 能',
			skills: [
        yearNow - yearAsAdmin + ' 年运维经验',
        yearNow - yearAsDevOps + ' 年 DevOps 经验',
        yearNow - yearAsPHPDev + ' 年 PHP 开发经验',
        yearNow - yearAsFullStack + ' 年全栈开发经验',
        '擅长 *nix 系统：Debian, Fedora, Ubuntu, RHEL/Derivatives, FreeBSD, LFS...',
        '熟悉各项服务：httpd(Apache2), nginx, PostgreSQL, MySQL/MariaDB, Redis, RabbitMQ, NFS, WireGuard, SMTP, SAMBA, DNS, TrinityCore, FTP...',
        '常用库和框架：Symfony, Drupal, React, Angular, Tauri, React Native, Flutter, Ionic, Django, Gin...',
        '常用语言：rust, go, php, python, typescript, bash, sql',
        '熟悉的云平台：AWS, GCP, Azure, Oracle, Vultr, DigitalOcean, Cloudflare, 阿里云',
        '虚拟化技术：KVM, VirtualBox, Docker',
        '英文：为LCTT(linux.cn翻译组) 贡献过多篇Linux相关英文翻译',
			],
			po_t: '案 例',
			exps: [
				{
					com: '创业，2016.5-至今，合伙人、程序员',
					job: [
            '软件外包',
            '系统定制开发、APP、小程序',
            '服务器运维',
            'IT解决方案'
          ]
				},
				{
					com: '上海快鹿集团，2014.7-2015.11，运维开发',
					job: [
            '网络、系统配置',
            '信息安全管理、人员管理',
            '服务器安装、部署、配置、优化及运维',
            '业务系统的管理与运维',
            '数据库维护、安全策略、性能优化',
            '系统监控、调优',
            '故障诊断、排除',
            '员工培训'
          ]
				},
				{
					com: '广州景心科技，2013.4-2014.6，运维开发',
					job: [
            '招商银行上海信用卡中心驻场',
            '机房管理系统的研发、测试、实施、服务器维护',
            '及电子化流程部署'
          ]
				},
				{
					com: '中百仓储，2010.11-2013.3，技术部长',
					job: [
            '计算机设备管理制度各卖场路由器',
            '交换机、系统、电子称、服务器、网络、桌面、门禁、考勤等安装调试及运维',
            'ERP系统管理及维护',
            '进销存数据分析，报表制作',
            '员工信息化培训'
          ]
				},
			],
			po: [
        '某银行电子印章系统',
        '某再生资源信息服务平台',
        '某部战备器材库信息化管理系统',
        '某部民兵军事训练信息化管理系统',
        '某区人民法院内部信息平台',
        '某武警支队内部信息系统',
        '某区政府投资项目直报平台',
        '某银行信用卡中心机房信息管理系统（参与）',
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
	resume.en.exp_t = 'experiences';
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
    // 'Tech articles translation',
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
