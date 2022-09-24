export let contents = {
	navigation: {
		logo_link: {
			label: 'Simister Allotments',
			href: '/',
			type: 'internal'
		},
		links: [
			{
				label: 'About Us',
				href: '#about',
				type: 'internal'
			},
			{
				label: 'Gallery',
				href: '#gallery',
				type: 'internal'
			},
			{
				label: 'Contact Us',
				href: '#contact',
				type: 'internal'
			}
		]
	},
	home: {
		centre: {
			title: 'Simister Allotments',
			subtitle:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi quaerat provident expedita! Aspernatur delectus distinctio ducimus quis expedita, ipsa rem magni, odio, laborum consequuntur cum eveniet quo quae. Beatae.'
		},
		cta: {
			text: 'Find Out More',
			icon: 'bi:arrow-down',
			href: '#contact'
		}
	},
	contact: {
		id: 'contact',
		text: {
			title: 'Contact Us Now',
			subtext:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quos atque dicta temporibus rerum voluptatem quisquam dolores officiis vero quas, culpa autem rem eligendi nihil? Cupiditate odit ab enim? Praesentium.'
		},
		alerts: {
			succeeded: {
				title: 'Success!',
				message: 'Successfully Submitted your form'
			},
			failed: {
				title: 'An Error Occurred',
				message: 'Could not successfully sumbit your form, pleasy Try again.'
			}
		},
		form: {
			fields: [
				{
					name: 'fullname',
					label: 'Full Name',
					placeholder: 'John Smith',
					required: true,
					type: 'text',
					validation: 'Must Contain at least 3 characters',
					valid: false,
					input: ''
				},
				{
					name: 'email',
					label: 'Email Address',
					placeholder: 'example@gmail.com',
					required: true,
					type: 'text',
					validation: 'Must Contain an address, @ and a domain',
					valid: false,
					input: ''
				},
				{
					name: 'message',
					label: 'Message',
					placeholder: 'Your Message Here...',
					required: true,
					type: 'textarea',
					validation: 'Must Contain at least 20 characters',
					valid: false,
					input: ''
				}
			],
			submit: {
				style: 'primary',
				text: 'Submit'
			}
		}
	},
	about: {
		id: 'about',
		faq: [
			{
				Id: '0',
				title: '1. What are the typical yearly costs for a plot?',
				content: 'lorem ipsum',
				open: true
			},
			{
				Id: '1',
				title: 'What size is a typical plot?',
				content: 'lorem ipsum2 lorme ipsum',
				open: false
			},
			{
				Id: '2',
				title: 'What size is a typical plot?',
				content: 'lorem ipsum2 lorme ipsum',
				open: false
			},
			{
				Id: '3',
				title: 'What size is a typical plot?',
				content: 'lorem ipsum2 lorme ipsum',
				open: false
			},
			{
				Id: '4',
				title: 'What size is a typical plot?',
				content: 'lorem ipsum2 lorme ipsum',
				open: false
			}
		],
		text: {
			title: 'abc',
			subtext: 'abc'
		}
	},
	gallery: {
		id: 'gallery',
		images: [
			{
				src: '/images/1.JPG',
				alt: 'Image of Entrance to the allotment.',
				width: '2',
				height: '1'
			},
			{
				src: '/images/2.JPG',
				alt: 'View of plot to the right of the gate.',
				width: '2',
				height: '1'
			},
			{
				src: '/images/3.JPG',
				alt: "Image of Raspberries on Someone's Plot.",
				width: '4',
				height: '2'
			},
			{
				src: '/images/4.JPG',
				alt: 'View of plot towards the middle left of the allotment.',
				width: '2',
				height: '1'
			},
			{
				src: '/images/5.JPG',
				alt: 'View of the middle left side of the allotment from the central road.',
				width: '2',
				height: '1'
			},
			{
				src: '/images/17.JPG',
				alt: "View of Flowers on someone's plot.",
				width: '2',
				height: '1'
			},
			{
				src: '/images/7.JPG',
				alt: 'View of another plot of the allotment.',
				width: '2',
				height: '1'
			},
			{
				src: '/images/8.JPG',
				alt: 'Another View of the allotment.',
				width: '2',
				height: '1'
			},
			{
				src: '/images/15.JPG',
				alt: 'Ariel Overview of the allotment',
				width: '2',
				height: '4'
			},{
				src: '/images/16.JPG',
				alt: 'Ariel Overview of the allotment',
				width: '2',
				height: '4'
			},{
				src: '/images/19.JPG',
				alt: 'Ariel Overview of the allotment',
				width: '2',
				height: '3'
			},
		]
	},
	footer: {
		links: [
			{
				label: 'Github',
				type: 'external',
				href: 'https://www.github.com/antonizyla'
			},
			{
				label: 'How we use cookies',
				type: 'internal',
				href: '/cookies'
			}
		],
		disclaimer: {
			text: 'Site Developed and Designed by Antoni Zyla',
		}
	}
};
