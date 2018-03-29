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
		'zh': '边招工边开工，边建设边发展。为了克服用工荒困境，调整思路，招聘部分普工从基础操作开始培训。目前已解决一线工人近30人，承接东风德纳车桥盆角齿加工月产15000件、哈弗汽车发动机皮带轮月产12000件及部分产品的打样试制任务。'
	},
	'devenv_t': {
		'en': 'development environment: ',
		'zh': '开发环境： '
	},
	'devenv': 'vim & bash on Fedora 27',
	'location': {
		'en': '',
		'zh': '期望工作地： 远程、杭州、上海、十堰'
	},
	'site_t': {
		'en': 'website: ',
		'zh': '网 站： '
	},
	'mail_t': {
		'en': 'email: ',
		'zh': '邮 箱： '
	},
	'skills': {
		'en': '',
		'zh': '1、随着机器开动率提高，订单增加，流动资金压力增大。 2、产业工人严重短缺，招工不足。 3、原有从5D智造谷经停的园区通勤班车近日更改通行线路，不经停5D智造谷，导致部分员工上下班很不方便，部分已入职员工因为通勤不便有意离职，如此将进一步加剧用工荒局面。 4、办公场地、员工住宿空间日显紧张，请园区加快办公楼及住宿场所的建设。'
	},
	'exp': {
		'en': '',
		'zh': '边招工边开工，边建设边发展。为了克服用工荒困境，调整思路，招聘部分普工从基础操作开始培训。目前已解决一线工人近30人，承接东风德纳车桥盆角齿加工月产15000件、哈弗汽车发动机皮带轮月产12000件及部分产品的打样试制任务。'
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
