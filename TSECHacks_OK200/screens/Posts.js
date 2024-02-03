import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Modal,
  Portal,
  TextInput,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";

const Posts = () => {
  const [posts, setPosts] = useState([
    // Your initial dummy data
  ]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "http://192.168.137.181:5000/api/chat/getPosts"
      );

      if (!response.ok) {
        throw new Error("Error fetching public posts");
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleInputChange = (field, value) => {
    setNewPost({ ...newPost, [field]: value });
  };
  //   useEffect(() => {
  //     // Fetch posts from the backend when the component mounts
  //     fetchPosts();
  //   }, []);

  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch('http://your-backend-url/getPosts');
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  const handleAddPost = async () => {
    try {
      const response = await fetch(
        "http://192.168.137.181:5000/api/chat/createPosts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      console.log(newPost);
      setPosts([...posts, data]);

      toggleModal();
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postAuthor}>{item.author}</Text>
      </View>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <FlatList
          data={posts}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />

        <Portal>
          <Modal
            visible={isModalVisible}
            onDismiss={toggleModal}
            contentContainerStyle={styles.modalContainer}
          >
            <Text style={styles.modalTitle}>Add New Post</Text>
            <TextInput
              style={styles.modalInputTitle}
              placeholder="Title"
              value={newPost.title}
              onChangeText={(text) => handleInputChange("title", text)}
            />
            <TextInput
              style={styles.modalInputContent}
              placeholder="Content"
              multiline={true}
              numberOfLines={8}
              value={newPost.content}
              onChangeText={(text) => handleInputChange("content", text)}
            />
            <Button
              mode="contained"
              onPress={handleAddPost}
              style={styles.submitButton}
            >
              Submit
            </Button>
            <Button
              mode="outlined"
              onPress={toggleModal}
              style={styles.cancelButton}
            >
              Cancel
            </Button>
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8EDE3",
    marginTop: 20,
  },
  postContainer: {
    marginBottom: 16,
    backgroundColor: "#ecf0f1",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#305F72",
  },
  postAuthor: {
    fontSize: 16,
    color: "#F18C8E",
  },
  postContent: {
    fontSize: 16,
    marginBottom: 8,
  },
  postLikes: {
    fontSize: 14,
    color: "#F18C8E",
  },
  addButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#F18C8E",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#305F72",
  },
  modalInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalInputTitle: {
    height: 40,
    marginBottom: 16,
    fontWeight: "bold",
    backgroundColor: "#f5e1e1",
  },
  modalInputContent: {
    marginBottom: 16,
    textAlignVertical: "top",
    backgroundColor: "#f5e1e1",
  },
  submitButton: {
    marginBottom: 8,
    backgroundColor: "#305F72",
  },
  cancelButton: {
    marginBottom: 16,
    color: "black",
  },
});

export default Posts;
