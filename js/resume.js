(function() {
	var resume = {
		zh: {
			title: '简 历',
			name: '侯 斐',
			role: 'php 开发工程师，linux 系统工程师，IT 主管',
			about_t: '简 介',
			about: [
				{k: 'proglang', v: 'javascript, php, python, bash, c, assembly', fa: 'fas fa-code', title: 'language'},
				{k: 'mail', v: 'job@xtod.net', fa: 'fas fa-envelope', link: 'mailto:job@xtod.net', title: 'email: '},
				{k: 'devenv', v: 'bash + screen + vim, fedora', fa: 'fas fa-desktop', title: 'devel env'},
				{k: 'site', v: 'https://xtod.net', fa: 'fas fa-link', link: 'https://xtod.net', title: 'website: '},
				//{k: 'loc', v: '远程，初创，杭州，上海', fa: 'fas fa-heart', title: 'would like'},
				//{k: 'itbooks', v: '编码-Petzold,浪潮之巅,黑客与画家,汇编语言-王爽', fa: 'fas fa-book', title: '最爱书籍'},
				{k: 'github', v: 'https://github.com/xtod', fa: 'fab fa-github', link: 'https://github.com/xtod', title: 'btc'},
				{k: 'books', v: '红楼梦，北方的空地，鲁迅，冯骥才', fa: 'fas fa-book', title: '最爱书籍', class: 'd-none'},
				{k: 'btc', v: '1K4PKpaH55iMhvgdpUwhMAh4acAUajd3Mg', fa: 'fab fa-bitcoin', title: 'btc'},
				{k: 'key', v: 'https://xtod.net/xtod.pub', fa: 'fas fa-key', link: 'https://xtod.net/xtod.pub'},
			],
			sn_t: '社交网络',
			exp_t: '工作经历',
			edu_t: '教育经历',
			intro: '擅长 Linux 系统工程，熟悉 Fedora, Debian, RedHat/CentOS, LFS 等发行版。目前兴趣在 web 开发，主技术栈为 php, symfony 4, twig, bootstrap 4, vue.js, mustache.js 及原生 javascript ，后端方向，可做全栈，可独立开发。具备团队组织协调能力。简练、果敢、沉着、细致、好学、求真。',
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
			skills_t: '技 能',
			skills: [
				'3 年 php 开发经验；熟悉 symfony 4, laravel, thinkphp 5 等框架；代码遵循 PSR-1, PSR-2, PSR-4 规范',
				'掌握 html, css, 熟悉 javascript ，熟悉 bootstrap, vue.js 等前端框架',
				'5 年 linux 运维经验， 精通 bash ，熟悉 httpd, nginx, NFS, samba, DHCP, DNS, FTP 等常用服务配置，了解负载均衡(lvs)',
				'AWS , GCP , Azure , Vultr , DigitalOcean , 阿里云等云平台维护使用经验',
				'熟悉虚拟化(docker, kvm, VirtualBox)，熟悉自动化运维(ansible)',
				'LCTT ( linux.cn 翻译组) 成员，为 linux.cn 贡献过多篇英文翻译',
				'当地田协会员，完成多次马拉松赛事'
			],
			exps: [
				{
					//com: '自由职业，2018.9-',
					//job: '自由职业'
				},
				{
					com: '创业，2016.5-至今，合伙人、程序员',
					job: '自主创业，从事软件外包，主营网站开发、小程序、公众号'
				},
				{
					com: '上海快鹿集团，2014.7-2015.11，运维工程师',
					job: '网络配置、服务器架设、服务安装和配置、优化；业务系统的管理与维护，性能监控、调优，故障诊断以及数据库维护与备份计划；内部测试环境搭建'
				},
				{
					com: '广州景心科技，2013.4-2014.6，技术经理',
					job: '招商银行上海信用卡中心驻场，负责招行机房管理系统的研发、测试、实施、服务器维护以及电子化流程部署'
				},
				{
					com: '中百仓储，2010.11-2013.3，技术部长',
					job: '各卖场路由器、交换机、收银系统、电子称、服务器、网络、桌面、门禁、考勤等安装调试及后期维护；ERP系统管理及维护，进销存数据分析，报表制作；员工信息化培训'
				},
				{
					com: '蓝星电脑，2006.11-2010.10，技术部长',
					job: '企业、零售软硬件维护，管理技术团队'
				}
			],
			edu: '自学。大专未毕业，非计算机专业，无培训经历',
			sns: [
				{name: 'xtod', link: 'https://github.com/xtod', fa: 'fab fa-github'},
				{name: 'xtod', link: 'https://stackoverflow.com/users/7714132', fa: 'fab fa-stack-overflow'},
				{name: 'xtod', link: 'https://webchat.freenode.net', fa: 'fas fa-hashtag'},
				{name: 'xtod', link: 'https://www.quora.com/profile/xtod', fa: 'fab fa-quora'},
				{name: 'ArcTod', link: 'https://twitter.com/arctod', fa: 'fab fa-twitter'},
				{name: 'ArcTod', link: 'https://www.facebook.com/ArcTod', fa: 'fab fa-facebook'},
				{name: 'dotcra', link: 'https://www.linkedin.com/in/dotcra/', fa: 'fab fa-linkedin'},
				//{name: 'dotcra', link: '#', fa: 'fab fa-weixin'},
			],
			po_t: '作 品',
			po: [
				{
					name: '茅箭区投资项目直报平台',
					date: '2018.03 - 2018.04',
					desc: [
						'集中管理全区 100 个重点投资项目，由全区各部门上报、查询及更新；设立锁定日期，进度考核，生成“未上报”、“数据雷同”等警告信息；生成统计数据，并提供报表导入导出功能',
						'用 php 开发，框架为 symfony 4 ，数据库 mariaDB，操作系统 Debian 9.4 ，服务器选用阿里云华东1机房及谷歌云(GCP)台湾机房',
						'前端采用 bootstrap 4 搭配原生 javascript ，并大量采用 ajax 以提高用户体验',
						'导入 xls 至数据库的功能在服务器端完成，由 PhpSpreadsheet 实现',
						'将页面 table 导出至 xls 在客户端完成，由 js-xlsx 实现',
						'用 git (updateInstead) 发布'
					],
					job: [
						'该项目由本人独立完成，职责包括但不限于：',
						'客户需求、方案定制、项目上线、组织培训',
						'本地搭建测试环境',
						'php 代码设计、编写、测试',
						'前端设计、编写、测试',
						'数据库设计',
						'服务器部署 (git) 与维护',
						'数据库备份方案',
						'项目后续维护',
					]
				},
				{
					name: '招商银行上海信用卡中心机房管理系统',
					date: '2013.04 - 2014.06',
					desc: [
						'实现机房设备电子化流程',
						'开发机房管理系统；为机位、服务器、存储、UPS、链路、板卡、跳线等设备配置二维码；设计录入、入库、上架、上电、施工单、查询、审核等电子化流程，实现数字可视化、机房设备管理规范化',
						'系统采用 jsp + tomcat 8'
					],
					job: [
						'本地搭建测试环境',
						'代码测试',
						'服务器部署与维护',
						'数据库备份方案',
						'项目实施',
						'电子化流程部署'
					]
				},
				{
					name: '个人网站',
					date: '2010.05 - 至今',
					desc: [
						'前期采用 wordpress ，2013 年切换成 drupal ，搭配 ctools(API), honeypot(反垃圾), imce(文件管理), metatag(SEO), pathauto(自定义url), token 等模块，实现完整的博客系统',
						'在默认主题 Bartik 基础上开发子主题',
						'操作系统 Debian ，数据库 mariaDB ，服务器选用 digitalocean 的 sfo2 机房及 vultr 东京机房，利用 CloudFlare CDN 进行加速'
					],
					job: [
						'该项目由本人独立完成，职责包括但不限于：',
						'本地搭建测试环境',
						'基于默认主题 Bartik 基础上开发(html, css)子主题',
						'用 composer 部署网站目录、模块安装',
						'撰写文章并发表，管理评论，SEO',
						'服务器维护，网站上传目录备份方案，数据库备份方案'
					]
				},
			],
			more_t : '更 多',
			more: [
				'崇尚命令行。bash + screen + vim 作 IDE ，cmus 听歌，用 ImageMagick 压缩图片，用 nmcli 管理网络，用 transmission-remote BT，pacmd 切换耳机音响，gsettings 配置系统，用 oathtool 生成 OTP 动态密码，irssi 上 irc ，只玩 nethack 和 myman ，chrome 装 cVim 扩展……',
				//'如果一件事要做3次以上，就会写一个函数/脚本，比如自签名证书，比如每隔半年安装最新的 Fedora ，然后通过脚本恢复所有设置。(为什么重装？ 不是可以用 dnf 升级么？因为我的系统仅有 1700+ packages ，用 dnf 升级就要 100 分钟。而重装 10 分钟，跑一遍脚本 25 分钟，一起只要 35 分钟。而且，重装才有“新“的感觉。)',
				'为了使用便捷，常用命令都要用函数封装，函数名一个字母，no more tab 。比如写一个函数 g() 来代替 git ，不带参数就是 git status ,  g c msg 则是 git add. ; git commit -m msg ; git push，如果没有 msg 就用 placeholder , 还可以加入一些机制来阻止 push 。再比如 alias v="command vim" ; alias vim="sudo vim" 。',
				'......'
			],
		},
	};
	
	//resume.en = Object.assign({}, resume.zh);	// not supported by ie
	resume.en = JSON.parse(JSON.stringify(resume.zh));
	resume.en.title = 'résumé';
	resume.en.name = 'Arc Tod';
	resume.en.role = 'php developer, linux administrator, IT supervisor';
	resume.en.about_t = 'about';
	resume.en.skills_t = 'skills';
	resume.en.sn_t = 'social network';
	resume.en.exp_t = 'experiences';
	resume.en.edu_t = 'education';
	resume.en.devenv_t = 'devel env: ';
	resume.en.proglang_t = 'language: ';
	resume.en.po_t = 'portfolio';
	//resume.en.about.loc.v= 'remote, startups, hangzhou, shanghai';
	//resume.en.edu = 'self-taught';
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
