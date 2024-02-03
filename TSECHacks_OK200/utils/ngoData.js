const ngoData = [
  {
    _id: 1,
    ngoName: "BlindEye",
    ngoLogo:
      "https://static.vecteezy.com/system/resources/thumbnails/015/277/729/small/social-organization-logo-social-community-logo-template-illustration-eps-10-free-vector.jpg",
    missionStatement: "Updated mission statement",
    sectorsOfOperation: ["Education", "Health"],
    geographicCoverage: {
      country: "India",
      region: "Nagpur",
    },
    contactInformation: {
      email: "contact@example.com",
      phone: "+1234567890",
      address: "123 Main Street, Cityville",
    },
    successStories: [
      {
        title: "Empowering Education",
        content:
          "Our NGO has successfully empowered hundreds of students through quality education.",
      },
      {
        title: "Healthcare for All",
        content:
          "Providing essential healthcare services to underprivileged communities.",
      },
    ],
  },
  {
    _id: 2,
    ngoName: "Empowering India",
    ngoLogo: "../assets/ngo1logo.png",
    missionStatement:
      "To make a positive impact on the community by providing aid and support to those in need.",
    sectorsOfOperation: ["Humanitarian Aid", "Environmental Conservation"],
    geographicCoverage: {
      country: "India",
      region: "Nagpur",
    },
    contactInformation: {
      email: "info@globalaid.org",
      phone: "+9876543210",
      address: "456 Charity Avenue, Hope City",
    },
    successStories: [
      {
        title: "Disaster Relief",
        content:
          "Provided timely and effective disaster relief in several countries, helping affected communities recover.",
      },
      {
        title: "Environmental Conservation",
        content:
          "Implemented successful projects for protecting and preserving the environment, promoting sustainability.",
      },
    ],
  },
  {
    _id: 3,
    ngoName: "Tech4Good",
    ngoLogo: "../assets/ngo1logo.png",
    missionStatement:
      "Utilizing technology to address social challenges and promote positive change.",
    sectorsOfOperation: ["Technology Innovation", "Education"],
    geographicCoverage: {
      country: "India",
      region: "Navi Mumbai",
    },
    contactInformation: {
      email: "info@tech4good.org",
      phone: "+1112233445",
      address: "789 Innovation Street, Techville",
    },
    successStories: [
      {
        title: "Digital Literacy Programs",
        content:
          "Implemented digital literacy programs in underserved communities, empowering individuals with tech skills.",
      },
      {
        title: "Tech Innovation",
        content:
          "Developed innovative solutions to address social issues, improving lives through technology.",
      },
    ],
  },
  {
    _id: 4,
    ngoName: "NGO Four",
    ngoLogo: "https://example.com/logo4.jpg",
    missionStatement: "Mission statement of NGO Four",
    sectorsOfOperation: ["Health", "Human Rights"],
    geographicCoverage: {
      country: "India",
      region: "Mumbai",
    },
    contactInformation: {
      email: "contact@ngo4.com",
      phone: "+9876543211",
      address: "789 Pine Street, Villagetown",
    },
    successStories: [
      {
        title: "Health Initiatives",
        content: "Providing healthcare services to communities in Mumbai.",
      },
      {
        title: "Human Rights Advocacy",
        content:
          "Working towards the protection and promotion of human rights.",
      },
    ],
  },
  {
    _id: 5,
    ngoName: "NGO Five",
    ngoLogo: "https://example.com/logo5.jpg",
    missionStatement: "Mission statement of NGO Five",
    sectorsOfOperation: ["Education", "Environment"],
    geographicCoverage: {
      country: "India",
      region: "Mumbai",
    },
    contactInformation: {
      email: "contact@ngo5.com",
      phone: "+9876543212",
      address: "890 Cedar Street, Hamletville",
    },
    successStories: [
      {
        title: "Educational Programs",
        content:
          "Conducting educational programs for underprivileged children in Pune.",
      },
      {
        title: "Environmental Conservation",
        content: "Promoting environmental awareness and conservation efforts.",
      },
    ],
  },
  {
    _id: 6,
    ngoName: "NGO Six",
    ngoLogo: "https://example.com/logo6.jpg",
    missionStatement: "Mission statement of NGO Six",
    sectorsOfOperation: ["Women Empowerment", "Community Development"],
    geographicCoverage: {
      country: "India",
      region: "Nagpur",
    },
    contactInformation: {
      email: "contact@ngo6.com",
      phone: "+9876543213",
      address: "567 Oak Street, Townsville",
    },
    successStories: [
      {
        title: "Empowering Women",
        content:
          "Empowering women through skill development and employment opportunities in Nashik.",
      },
      {
        title: "Community Development",
        content:
          "Contributing to the overall development of communities in Nashik.",
      },
    ],
  },
  {
    _id: 7,
    ngoName: "NGO Seven",
    ngoLogo: "https://example.com/logo7.jpg",
    missionStatement: "Mission statement of NGO Seven",
    sectorsOfOperation: ["Child Welfare", "Rural Development"],
    geographicCoverage: {
      country: "India",
      region: "Nagpur",
    },
    contactInformation: {
      email: "contact@ngo7.com",
      phone: "+9876543214",
      address: "123 Maple Street, Riverside",
    },
    successStories: [
      {
        title: "Child Welfare Programs",
        content:
          "Implementing programs for the welfare and development of children in Aurangabad.",
      },
      {
        title: "Rural Development Initiatives",
        content:
          "Undertaking initiatives for the overall development of rural areas in Aurangabad.",
      },
    ],
  },
  {
    _id: 8,
    ngoName: "NGO Eight",
    ngoLogo: "https://example.com/logo8.jpg",
    missionStatement: "Mission statement of NGO Eight",
    sectorsOfOperation: ["Livelihood", "Skill Development"],
    geographicCoverage: {
      country: "India",
      region: "Solapur",
    },
    contactInformation: {
      email: "contact@ngo8.com",
      phone: "+9876543215",
      address: "456 Birch Street, Hilltop",
    },
    successStories: [
      {
        title: "Livelihood Programs",
        content:
          "Creating sustainable livelihood opportunities for communities in Solapur.",
      },
      {
        title: "Skill Development Initiatives",
        content: "Promoting skill development and entrepreneurship in Solapur.",
      },
    ],
  },
  {
    _id: 9,
    ngoName: "NGO Nine",
    ngoLogo: "https://example.com/logo9.jpg",
    missionStatement: "Mission statement of NGO Nine",
    sectorsOfOperation: ["Environment", "Youth Empowerment"],
    geographicCoverage: {
      country: "India",
      region: "Amravati",
    },
    contactInformation: {
      email: "contact@ngo9.com",
      phone: "+9876543216",
      address: "678 Pine Street, City Center",
    },
    successStories: [
      {
        title: "Environmental Conservation",
        content:
          "Engaging in initiatives for environmental conservation in Amravati.",
      },
      {
        title: "Empowering Youth",
        content:
          "Empowering the youth through education and skill development in Amravati.",
      },
    ],
  },
  {
    _id: 10,
    ngoName: "NGO Ten",
    ngoLogo: "https://example.com/logo10.jpg",
    missionStatement: "Mission statement of NGO Ten",
    sectorsOfOperation: ["Healthcare", "Elderly Care"],
    geographicCoverage: {
      country: "India",
      region: "Nagpur",
    },
    contactInformation: {
      email: "contact@ngo10.com",
      phone: "+9876543217",
      address: "789 Redwood Street, Downtown",
    },
    successStories: [
      {
        title: "Healthcare Initiatives",
        content:
          "Implementing healthcare programs for the well-being of communities in Nagpur.",
      },
      {
        title: "Elderly Care Programs",
        content:
          "Providing care and support to the elderly population in Nagpur.",
      },
    ],
  },
];

export default ngoData;
