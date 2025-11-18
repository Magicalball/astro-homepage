// 网站配置文件
export const siteConfig = {
	name: 'Magical_ball',
	fullName: 'Magical_ball(@Skyler Enchanter)',
	greeting: '你好，我是',
	subtitle: '一名普通的初级开发者，努力学习中...  Ciallo～(∠・ω< )',
	meta: {
		title: 'Magical_ball(@Skyler Enchanter)',
		description: 'Magical_ball 的个人主页',
		keywords: ['Magical_ball', '个人主页', '开发者', '博客'],
		url: 'https://magicalball.top/',
		image: 'https://magicalball.top/favicon.svg',
		author: 'Magical_ball',
		themeColor: '#ffffff',
	},
	email: 'hello@example.com',
	social: {
		github: {
			label: 'GitHub',
			url: 'https://github.com/Magicalball',
		},
		bilibili: {
			label: 'Bilibili',
			url: 'https://space.bilibili.com/433732913',
		},
	},
	links: {
		blog: {
			label: '博客',
			url: 'https://blog.magicalball.top/',
		},
		cloud: {
			label: '云盘',
			url: 'https://cloud.magicalball.top/',
		},
	},
	buttons: {
		primary: {
			text: '博客',
			href: '#blog',
		},
		secondary: {
			text: '了解更多',
			href: '#about',
		},
	},
	about: {
		title: '关于我',
		descriptions: [
			'我是一名普通的初级开发者，ACGN爱好者，音游玩家，喜欢研究技术，努力做喜欢的事情。',
			'"顾盼两岸松山近，笑谈千古事如烟"',
		],
	},
	skills: {
		title: 'Skills',
		items: [
			{
				name: 'Developer',
				description: 'JavaScript、React、HTML、WebRTC',
			},
			{
				name: 'DevOps',
				description: 'Docker、Nginx、CI/CD',
			},
			{
				name: 'Education',
				description: 'Shenyang University of Technology, software engineering',
			},
			{
				name: 'Hobby',
				description: 'ACGN、音游、阅读、羽毛球',
			},
		],
	},
	footer: {
		copyright: '© 2025 Made by Magical_ball',
	},
} as const;

