const router = require("express").Router();
const { Chat, PublicPost } = require("../db/db");

router.post("/send", async (req, res) => {
  try {
    const { sender, receiver, group, content } = req.body;
    const message = await Chat.create({ sender, receiver, group, content });
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Error sending message" });
  }
});

router.get("/conversation/:entity1/:entity2", async (req, res) => {
  try {
    const { entity1, entity2 } = req.params;
    const query = {
      $or: [
        { sender: entity1.trim(), receiver: entity2.trim() },
        { sender: entity2.trim(), receiver: entity1.trim() },
      ],
    };

    // if (!group) {
    //   //   delete query.$or[0].group;
    //   //   delete query.$or[1].group;
    //   query.group = null;
    // }

    const messages = await Chat.find(query).sort({ timestamp: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching conversation" });
  }
});

//posts

router.get("/getPosts", async (req, res) => {
  try {
    const posts = await PublicPost.find().sort({ likes: -1, timestamp: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching public posts" });
  }
});

router.post("/createPosts", async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await PublicPost.create({ title, content });
    res.json(post);
  } catch (error) {
    console.error("Error creating public post:", error);
    res.status(500).json({ error: "Error creating public post" });
  }
});

router.delete("/deleteposts", async (req, res) => {
  try {
    await PublicPost.deleteMany();
    res.json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting public post" });
  }
});

module.exports = router;

// {
//     "sender": "company123",
//     "receiver": "ngo456",
//     "content": "i am vishal"
//   }
