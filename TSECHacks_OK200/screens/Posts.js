import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Modal, Portal, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      "_id": "1",
      "title": "First Post",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "author": "John Doe",
      "likes": 10
    },
    {
      "_id": "2",
      "title": "Second Post",
      "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "author": "Jane Smith",
      "likes": 15
    },
    {
      "_id": "3",
      "title": "Third Post",
      "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "author": "Bob Johnson",
      "likes": 8
    },
    {
      "_id": "4",
      "title": "Fourth Post",
      "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "author": "Alice Williams",
      "likes": 20
    },
    {
      "_id": "5",
      "title": "Fifth Post",
      "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "author": "Charlie Brown",
      "likes": 12
    }
  ]
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

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
      const response = await fetch('http://your-backend-url/createPosts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      const data = await response.json();

      // Assuming the backend responds with the newly created post
      setPosts([...posts, data]);

      // Close the modal after adding a post
      toggleModal();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postAuthor}>{item.author}</Text>
      </View>
      <Text style={styles.postContent}>{item.content}</Text>
      <Text style={styles.postLikes}>Likes: {item.likes}</Text>
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
        <Modal visible={isModalVisible} onDismiss={toggleModal} contentContainerStyle={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Post</Text>
          <TextInput
              style={styles.modalInputTitle}
              placeholder="Title"
              value={newPost.title}
              onChangeText={(text) => handleInputChange('title', text)}
            />
            <TextInput
              style={styles.modalInputContent}
              placeholder="Content"
              multiline={true}
              numberOfLines={8}
              value={newPost.content}
              onChangeText={(text) => handleInputChange('content', text)}
            />
          <Button mode="contained" onPress={handleAddPost} style={styles.submitButton}>
            Submit
          </Button>
          <Button mode="outlined" onPress={toggleModal} style={styles.cancelButton}>
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
  },
  postContainer: {
    marginBottom: 16,
    backgroundColor: '#ecf0f1',
    padding: 16,
    borderRadius: 8,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postAuthor: {
    fontSize: 16,
    color: '#3498db',
  },
  postContent: {
    fontSize: 16,
    marginBottom: 8,
  },
  postLikes: {
    fontSize: 14,
    color: '#2ecc71',
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#3498db',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  modalInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalInputTitle: {
    height: 40,
    marginBottom: 16,
    fontWeight: 'bold', 
  },
  modalInputContent: {
   
    marginBottom: 16,
    textAlignVertical:'top'
  },
  submitButton: {
    marginBottom: 8,
  },
  cancelButton: {
    marginBottom: 16,},
});

export default Posts;