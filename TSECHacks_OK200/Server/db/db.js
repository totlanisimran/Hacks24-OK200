const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose
      .connect(
        "mongodb+srv://ok200:5aljgp7bi7z8x6AK@cluster0.qyvninf.mongodb.net/?retryWrites=true&w=majority", //mongo link
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          bufferCommands: false,
        }
      )
      .then(() => {
        console.log("Db connected");
      })
      .catch((error) => {
        console.error("Failed to connect db" + error);
      });
  } catch (error) {
    console.log("DB Connection failed" + error);
  }
};
const companyProfileSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  foundedYear: {
    type: "string",
    required: true,
  },
  mission: {
    type: "string",
    required: true,
  },
  coreValues: {
    type: "string",
    required: true,
  },
  netProfit: {
    type: "string",
    required: true,
  },
  netWorth: {
    type: "string",
    required: true,
  },
  turnover: {
    type: "string",
    required: true,
  },
  website: {
    type: "string",
    required: true,
  },
  contactEmail: {
    type: "string",
    required: true,
  },
  selectedCountry: {
    type: "string",
  },
  selectedState: {
    type: "string",
    required: true,
  },
  selectedDistrict: {
    type: "string",
    required: true,
  },
  areasOfInterest: {
    type: "array",
    items: {
      type: "string",
    },
  },
});

const ngoSchema = new mongoose.Schema({
  ngoName: {
    type: String,
    required: true,
  },
  missionStatement: {
    type: String,
    required: true,
  },
  sectorsOfOperation: {
    type: [String],
    default: [],
  },
  geographicCoverage: {
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  contactInformation: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  successStories: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  group: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const publicPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      author: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const PublicPost = mongoose.model("PublicPost", publicPostSchema);
const Chat = mongoose.model("Message", messageSchema);
const NGO = mongoose.model("NGO", ngoSchema);
const CompanyProfile = mongoose.model("CompanyProfile", companyProfileSchema);

module.exports = { CompanyProfile, db, NGO, Chat, PublicPost };
