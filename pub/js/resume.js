(function() {
    // parses template ahead of time
    var tpl = document.getElementById('tpl').innerHTML;
    Mustache.parse(tpl);

	var resume = {
		zh: {
			title: '简 历',
			name: 'Al Zee',
			role: 'DevOps & 全栈开发 ',
			about_t: '简 介',
			about: [
				{k: 'code', v: 'javascript, php, python, bash, c, assembly'},
				{k: 'envelope', v: 'job@alz.ee', link: 'mailto:job@alz.ee'},
				{k: 'desktop', v: 'fedora, i3wm, screen, bash, vim'},
				{k: 'phone', v: 'Kzg2IDEzMiAwNzI2IDIwMTE='},
				{k: 'link', v: 'https://alz.ee', link: 'https://alz.ee'},
				{k: 'rocketchat-brands', v: 'https://chat.alz.ee', link: 'https://chat.alz.ee'},
				{k: 'github', v: 'https://github.com/alzee', link: 'https://github.com/alzee'},
				{k: 'stack-overflow', v: 'https://stackoverflow.com/users/7714132/alzee', link: 'https://stackoverflow.com/users/7714132/alzee'},
				{k: 'upwork', v: 'https://www.upwork.com/freelancers/~01d68058abc4ec7e7e', link: 'https://www.upwork.com/freelancers/~01d68058abc4ec7e7e'},
				//{k: 'btc', v: '1K4PKpaH55iMhvgdpUwhMAh4acAUajd3Mg'},
				{t: 'IRC', v: 'z14@libera.chat'},
				{k: 'key', v: 'https://alz.ee/pubkey', link: 'https://alz.ee/pubkey'},
				{k: 'bitcoin', v: '3AnpMLEdLXHa4fiTHGr6iWQrrPB2FRu56m'},
			],
			sn_t: '社交网络',
			exp_t: '工作经历',
			edu_t: '教育经历',
			intro: '擅长 *nix 系统，多年 DevOps 经验，熟悉全栈开发。',
			devenv_t: '开发环境: ',
			devenv: 'bash, screen, vim, Fedora',
			proglang_t: '语言： ',
			proglang: [
				{name: 'javascript', percent: '60%'},
				{name: 'php', percent: '80%'},
				{name: 'python', percent: '40%'},
				{name: 'bash', percent: '85%'},
				{name: 'drupal', percent: '70%'},
				{name: 'symfony', percent: '60%'},
				{name: 'bootstrap', percent: '90%'},
				{name: 'sql', percent: '55%'},
			],
			skills_t: '技 能',
			skills: [
                '8+ years as SysAdmin',
                '4+ years as DevOps',
                '5+ years as PHP Developer',
                '3+ years as Full Stack Developer',
                'Linux: Fedora, Debian, RHEL/CentOS, LFS. And FreeBSD',
                'Services: httpd, nginx, mysql/mariadb, redis, nfs, samba, dns, ftp',
                'Frameworks: symfony, drupal, angular, bootstrap',
                'Languages: php, bash, python, javascript, typescript, rust, css, html',
                'Clouds: AWS, GCP, Azure, Vultr, DigitalOcean, Cloudflare',
                'Virtualization: KVM, VirtualBox, Docker',
                'Tools: git, github, ansible, i3wm, screen, vim, npm, composer and more',
				'LCTT ( linux.cn 翻译组) 成员，为 linux.cn 贡献过多篇英文翻译',
                '马拉松 & 环青海湖骑行',
			],
			exps: [
				{
					com: '创业，2016.5-至今，合伙人、程序员',
					job: '软件外包，系统开发、APP'
				},
				{
					com: '上海快鹿集团，2014.7-2015.11，运维工程师',
					job: '网络配置、服务器架设、服务安装和配置、优化；业务系统的管理与维护，性能监控、调优，故障诊断以及数据库维护与备份计划；内部测试环境搭建'
				},
				{
					com: '广州景心科技，2013.4-2014.6，项目经理',
					job: '招商银行上海信用卡中心驻场，负责招行机房管理系统的研发、测试、实施、服务器维护以及电子化流程部署'
				},
				{
					com: '中百仓储，2010.11-2013.3，技术部长',
					job: '各卖场路由器、交换机、收银系统、电子称、服务器、网络、桌面、门禁、考勤等安装调试及后期维护；ERP系统管理及维护，进销存数据分析，报表制作；员工信息化培训'
				},
				// {
				// 	com: '蓝星电脑，2006.11-2010.10，技术支持',
				// 	job: '软硬件、网络、弱电项目销售、安装与维护'
				// }
			],
			edu: '自学。大专肆业，非计算机专业，无培训经历',
			sns: [
				{name: 'alzee', link: 'https://github.com/alzee', fa: 'fab fa-github'},
				{name: 'alzee', link: 'https://stackoverflow.com/users/7714132', fa: 'fab fa-stack-overflow'},
				{name: 'alzee', link: 'https://webchat.freenode.net', fa: 'fas fa-hashtag'},
				{name: 'Arc-Zee', link: 'https://www.quora.com/profile/Arc-Zee', fa: 'fab fa-quora'},
				{name: 'ArcTod', link: 'https://twitter.com/arctod', fa: 'fab fa-twitter'},
				{name: 'ArcTod', link: 'https://www.facebook.com/ArcTod', fa: 'fab fa-facebook'},
				{name: 'ArcZee', link: 'https://www.linkedin.com/in/alzee/', fa: 'fab fa-linkedin'},
				//{name: 'dotcra', link: '#', fa: 'fab fa-weixin'},
			],
			po_t: '作 品',
			po: [
                {
					name: '某人民法院内网网站',
					date: '2020.07 - 2020.08',
					desc: [
                        '全国法院系统内网网站',
                        '内网环境，IE8/9 使用较普遍，须兼容',
                        'Drupal 8.4 就已抛弃 IE9/10，故采用 8.3.9 。 模块 ctools, entity, token, pathauto, easy_breadcrumb, login_redirect_per_role, permissions_by_term, video',
                        '另自建模块将账号显示替换成姓名',
                        '使用 bootstrap3, jquery1, slick-carousel',
                        'indexOf, filter 等 IE8 不支持的语法，用 polyfill 填充',
                        'IE8 视频播放使用 html5media',
                        '用 hook 修改 Drupal 后台表单行为',
						'服务器为内部机房联想万全 R680G7，双硬盘，配置 RAID1，安装 Debian10, httpd, php7.3, MariaDB'
					],
					job: [
						'独立完成，职责包括但不限于：',
						'客户需求、方案定制、项目上线、组织培训',
						'技术架构、设计、代码、测试',
						'Drupal 主题设计、代码、测试',
						'服务器部署，备份方案',
						'项目后续维护',
					]
				},
				{
					name: '某政府投资项目直报平台',
					date: '2018.03 - 2018.04',
					desc: [
						'集中管理全区 100 个重点投资项目，由全区各部门上报、查询及更新；设立锁定日期，进度考核，生成“未上报”、“数据雷同”等警告信息；生成统计数据，并提供报表导入导出功能',
						'用 php 开发，框架为 symfony 4 ，数据库 MariaDB，操作系统 Debian 9.4 ，服务器选用阿里云华东1机房及谷歌云(GCP)台湾机房',
						'前端 bootstrap 4 ，原生 javascript ，采用 ajax 以提高用户体验',
						'导入 xls 至数据库的功能在服务器端完成，由 PhpSpreadsheet 实现',
						'将页面 table 导出至 xls 在客户端完成，由 js-xlsx 实现',
						'用 git (Push to deploy) 发布'
					],
					job: [
						'独立完成，职责包括但不限于：',
						'客户需求、方案定制、项目上线、组织培训',
						'php 代码、测试',
						'前端设计、代码、测试',
						'数据库设计',
						'服务器部署，备份方案',
						'项目后续维护',
					]
				},
				{
					name: '某银行信用卡中心机房管理系统',
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
						'操作系统 Debian ，数据库 MariaDB ，服务器选用 digitalocean 的 sfo2 机房及 vultr 东京机房，利用 CloudFlare CDN 进行加速'
					],
					job: [
						'独立完成，职责包括但不限于：',
						'本地搭建测试环境',
						'基于默认主题 Bartik 基础上开发(html, css)子主题',
						'用 composer 部署网站目录、模块安装',
						'撰写文章并发表，管理评论，SEO',
						'服务器维护，网站上传目录备份方案，数据库备份方案'
					]
				},
			],
			fun_t : '有趣的',
			fun: [
                '春节在人迹罕至的青海湖骑行一圈，去之前不会骑自行车',
                '跑步结婚上头条',
                '完成一次全程马拉松；完成一次半程马拉松；完成一次山地越野赛',
                '戒烟；戒酒',
                '用盗来的 QQ 币给自己买一套警服 QQ 秀，然后留言“请及时修改密码”',
                '魔兽世界 TBC 时期一区罗宁人称术神；分享宏成为 NGA 热帖',
				'魔兽世界怀旧服血色无冰箱一波流, b站ID: alz14',
                '崇尚命令行。bash + screen + vim 作 IDE ，cmus 听歌，用 ImageMagick 压缩图片，用 nmcli 管理网络，用 transmission-remote BT，pacmd 切换耳机音响，gsettings 配置系统，用 oathtool 生成 OTP 动态密码，irssi 上 irc ，只玩 nethack 和 myman ，chrome 装 cVim 扩展，用 i3 替代 gnome	……',
                '如果一件事要做3次以上，一定要写一个函数/脚本，比如自签名证书，比如用 ssh tunnel 翻墙，比如改 cloudflare 的记录，比如每隔半年安装最新的 Fedora ，然后通过脚本恢复所有设置。(为什么重装？ 不是可以用 dnf 升级么？因为我的系统仅有 1700+ packages ，用 dnf 升级就要 100 分钟。而重装 10 分钟，跑一遍脚本 25 分钟，一起只要 35 分钟。而且，重装才有“新“的感觉。)',
                '为了使用便捷，常用命令都要用函数封装，函数名一个字母，no more tab 。比如写一个函数 g() 来代替 git ，不带参数就是 git status , g c msg 则是 git add. ; git commit -m msg ; git push，如果没有 msg 就用 placeholder , 还可以加入一些机制来阻止 push 。再比如 alias v="command vim" ; alias vim="sudo vim" 。'

			],
			more_t : '更 多',
			more: [
			],
		},
	};
	
	//resume.en = Object.assign({}, resume.zh);	// not supported by ie
	resume.en = JSON.parse(JSON.stringify(resume.zh));
	resume.en.title = 'résumé';
	resume.en.name = 'Al Zee';
	resume.en.role = 'DevOps Engineering & Full Stack Development';
	resume.en.intro= 'Self-motivated DevOps engineer with strong professional ethics and enthusiasm. Also experienced in Full-stack development.';
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
	resume.en.fun_t = 'fun';
	resume.en.more_t = 'more';

	var lang = (navigator.language || navigator.userLanguage).substr(0, 2);
	if (lang !== 'zh') lang = 'en';
	var en = document.getElementById('en');
	var zh = document.getElementById('zh');
	en.addEventListener('click', ch);
	zh.addEventListener('click', ch);

    var title = document.getElementById('title');
    var main = document.getElementById('main');
    
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
