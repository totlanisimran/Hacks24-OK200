const ngoData = [
  {
    _id: 1,
    ngoName: "Name",
    ngoLogo:
      "https://static.vecteezy.com/system/resources/thumbnails/015/277/729/small/social-organization-logo-social-community-logo-template-illustration-eps-10-free-vector.jpg",
    missionStatement: "Updated mission statement",
    sectorsOfOperation: ["Education", "Health"],
    geographicCoverage: {
      country: "India",
      region: "Mumbai",
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
      region: "Noida",
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
];

export default ngoData;
