// gitprofile.config.js

const config = {
  github: {
    username: 'shotgn16', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    Linkedin: 'jackbarnard24',
    Email: 'Jack.Barnard19@Outlook.com',
    Stackoverflow: 'Shotgn16', // example: '1/jeff-atwood'
    phone: '+44 7460388335',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1fiKLycvuS9hlTIQxb9Y8SZzxShKRIxcf/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'C#',
    'MySQL',
    'Azure',
    'MVC',
  ],
  experiences: [
    {
      company: 'D13 Solutions',
      position: 'Customer Support Representative',
      from: 'May 2021',
      to: 'July 2023',
      companyLink: 'www.d13solutions.co.uk',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'South Gloucestershire College, Filton',
      degree: 'BCS L4 Software Developer',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Gloucester College',
      degree: 'Higher National Certificate - Computing',
      from: '2020',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Payment Gateway',
      description:
        'Implement a mediator to handle payment and user information between two third-party systems',
      imageUrl: 'https://www.myq-solution.com/themes/myq/img/vector/logo-myq.svg?v=230206142735',
      link: 'https://github.com/shotgn16/PaymentGateway',
    },
    {
      title: 'Study Central',
      description:
        'An ASP.NET Core (Razor Page) web app, designed to provide a collection of tools for christians on the go.',
      imageUrl: 'https://i.imgur.com/YEEwPWK.png',
      link: 'https://github.com/shotgn16/StudyCentral',
    },
    {
      title: 'Windows Service Restart',
      description:
        'A .NET Framework C# app designed to restart a Windows Service when ran.',
      imageUrl: 'https://i.imgur.com/8iYNZ8l.png',
      link: 'https://github.com/shotgn16/ServiceRestart',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3606128',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
