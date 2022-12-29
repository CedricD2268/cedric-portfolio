import Mock from "../mock";

const database = {
  information: {
    name: 'Cedric Douillard',
    aboutContent: "I am an all around web developer with good knowledge about creating an interactive and responsive application on the web.",
    age: 25,
    phone: '',
    nationality: 'Haitian',
    language: 'English, Creole',
    email: '',
    address: '1429 East 86th Brooklyn New York',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: 'https://github.com'
    },
    brandImage: '/cedric-portfolio/images/brand-image.jpg',
    aboutImage: '/cedric-portfolio/images/about-image.jpg',
    aboutImageLg: '/cedric-portfolio/images/about-image.jpg',
    cvfile: '/cedric-portfolio/files/resume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 90
    },
    {
      title: "MJML HtmlEmail Framework",
      value: 65
    }
      ,
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 80
    },
    {
      title: "jQuery",
      value: 80
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Affinity Designer",
      value: 60
    },
    {
      title: "PostgreSQL",
      value: 80
    },
    {
      title: "MongoDb",
      value: 80

    },
    {
      title: "NodeJs",
      value: 75
    },

    {
      title: "Python",
      value: 75
    },
    {
      title: "DigitalOcean Services",
      value: 70
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Home Page",
      subtitle: ["Easy to read.", 'High Quality block images selected by the publisher.','Seperated each topics into navigation.' ],
      imageUrl: "/cedric-portfolio/images/portfolio-image-1.png",
      largeImageUrl: ["/cedric-portfolio/images/portfolio-image-1.png"],
      url: 'https://njanchor.com/'
    },
    {
      id: 2,
      title: "Explore Publishers",
      subtitle: ["Follow publishers that relates to you.", "Followed publishers will be easy to access on the sidebar."],
      imageUrl: "/cedric-portfolio/images/portfolio-image-2.png",
      largeImageUrl: [
        "/cedric-portfolio/images/portfolio-image-2.png"
      ],
url: 'https://njanchor.com/'    },
    {
      id: 3,
      title: "Article",
      subtitle: [
          "Read or listen to written article.",
          'Ability to share article.',
          "Ability to add article to your own created collection.",
          "Ability to like article.",
          "Ability to comment and like comments."
      ],
      imageUrl: "/cedric-portfolio/images/portfolio-image-3.png",
      largeImageUrl: [
        "/cedric-portfolio/images/portfolio-image-3.png"
      ],
url: 'https://njanchor.com/'    },
    {
      id: 4,
      title: "Settings",
      subtitle: [
          "Ability to upload own avatar.",
          'Ability to change name or username.',
          'Ability to change the way you sign in.',
          'Ability to delete account.'
      ],
      imageUrl: "/cedric-portfolio/images/portfolio-image-4.png",
      largeImageUrl: [
        "/cedric-portfolio/images/portfolio-image-4.png"
      ],
url: 'https://njanchor.com/'    },
    {
      id: 5,
      title: "Settings / Password",
      subtitle: ["Ability to change password.",
        'HtmlEmail is used to send reset password link.'],
      imageUrl: "/cedric-portfolio/images/portfolio-image-5.png",
      largeImageUrl: ["/cedric-portfolio/images/portfolio-image-5.png"],
url: 'https://njanchor.com/'    },
    {
      id: 6,
      title: "Settings / Customize",
      subtitle: [
          "Ability to change weather.",
          "Ability to change topics in the home page."
      ],
      imageUrl: "/cedric-portfolio/images/portfolio-image-6.png",
      largeImageUrl: ["/cedric-portfolio/images/portfolio-image-6.png"],
      url: 'https://njanchor.com/'
    },
    {
      id: 7,
      title: "Studio",
      subtitle: [
          "Published & Drafts articles are all save in your studio.", "Ability to see ho many people are following you."],
      imageUrl: "/cedric-portfolio/images/portfolio-image-7.png",
      largeImageUrl: ["/cedric-portfolio/images/portfolio-image-7.png"],
url: 'https://njanchor.com/'    },
    {
      id: 8,
      title: "Studio / Published Info",
      subtitle:["Visualize how many users are viewing., commenting & liking your articles."],
      imageUrl: "/cedric-portfolio/images/portfolio-image-8.png",
      largeImageUrl: ["/cedric-portfolio/images/portfolio-image-8.png"]
    },
    {
      id: 9,
      title: "Studio / Editor",
      subtitle: [ "Ability to select own images (API filter out inappropriate images upon submit).",
        "Autosave implemented when typing.",
      ],
      imageUrl: "/cedric-portfolio/images/portfolio-image-9.png",
      largeImageUrl: ["/cedric-portfolio/images/portfolio-image-9.png"],
      url: 'https://njanchor.com/'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2016 - 2019",
        position: "IT Specialist Intern",
        company: "New York City Department of Education",
        details: [
            "Fixed & Manage computer systems, relevant operating systems and software. ",
            "Provided on-site or remote support for school staff, ensuring that everyone have the technology they need to complete their work.",
            "Efficient troubleshooting abilities",
            "Anticipate and report the cost of replacing or updating computer systems or software"
        ]
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "Expected 2023",
        graduation: "Bachelor of Technology",
        university: "New York City College Of Technology",
        details: [
            "Studied Data Structures",
            "Learn and work on Database Management Systems.",
            "Learn Application Development with Database"
        ]
      },
      {
        id: 2,
        year: "2018",
        graduation: "Associate in Applied Science",
        university: "New York City College Of Technology",
        details: [
            "Learn Programming Fundamentals",
            "Learn UI/UX to create user friendly websites"
        ]
      },
      {
        id: 3,
        year: "2015",
        graduation: "High School Graduation",
        university: "Midwood High School",
        details: [
            "Participated in First Robotics Competition."
        ]
      }
    ]
  },
  blogs: [
    // {
    //   id: 1,
    //   title: 'TEST',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/markdown-html-supported-blog.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
  ],
  contactInfo: {
    phoneNumbers: ['929-372-5015'],
    emailAddress: ['cedricdouillard08@outlook.com'],
    address: "1429 East 86th Street, Brooklyn, NY 11236, United States"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});