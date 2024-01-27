

    // Function to show the login prompt
  function showLoginPrompt() {
    var username = prompt('Enter your username:');
    var password = prompt('Enter your password:');

    // Check if the credentials are valid (for demonstration purposes only)
    const validUsers = ['Upendra', 'Ramesh', 'Vismaya', 'Vinod', 'Deepika'];
    if (validUsers.includes(username) && password === 'DSU') {
      alert('Login successful!');
      let containerElement = document.getElementById("channel-name");
      let h4Element = document.createElement("h4");
      h4Element.textContent = username;
      containerElement.appendChild(h4Element);
      
      let containerForPElement = document.getElementById("WUName");
      let PElement = document.createElement("span");
      PElement.textContent = 'Welcome, ' + username;
      containerForPElement.appendChild(PElement);

      const socket = io.connect('http://localhost:9084'); // Change the URL to your server
      //DOM Elements
      const channelList = document.getElementById('channel-list');
      const chatMessages = document.getElementById('chat-messages');
      const channelName = document.getElementById('channel-name');
      const messageInput = document.getElementById('message-input');
      const sendButton = document.getElementById('send-button');

          // Sample channels
      const channels = ['#Genral', '#Office', '#Outside'];

      // Populate channel list
      channels.forEach((channel) => {
          const li = document.createElement('li');
          li.textContent = channel;
          li.addEventListener('click', () => switchChannel(channel));
          channelList.appendChild(li);
      });

      // Switch channel function
      function switchChannel(channel) {
          channelName.textContent = channel;
          // Retrieve and display messages for the selected channel (this part depends on your backend)
          // For demonstration purposes, you may mock this part until you implement your server logic.
          displayMessages([{ user: 'User A', message: 'Hello, how\'s everyone doing?', timestamp: '12:30 PM' }]);
      }

      // Display messages function
      function displayMessages(messages) {
          chatMessages.innerHTML = ''; // Clear previous messages
          messages.forEach((msg) => {
              const messageDiv = document.createElement('div');
              messageDiv.className = 'message';
              messageDiv.innerHTML = `
                  <span class="username">${msg.user}:</span>
                  <p>${msg.message}</p>
                  <span class="timestamp">${msg.timestamp}</span>`;
              chatMessages.appendChild(messageDiv);
          });
      }

      // Event listener for sending messages
      sendButton.addEventListener('click', () => {
          const message = messageInput.value.trim();
          if (message !== '') {
              // Emit a 'chat message' event to the server (this part depends on your backend)
              socket.emit('chat message', { user: '[Username]', message, timestamp: getCurrentTime() });
              messageInput.value = ''; // Clear the input field
          }
      });

    //   window.close(); // Close the popup
    } else {
      alert('Invalid credentials. Returning to Google search.');
      window.location.href = 'https://www.google.com'; // Redirect to Google
    }
  }

  // Call the function when the page is loaded
  window.onload = showLoginPrompt;



//     

//     // DOM elements

    


//     // Event listener for receiving messages from the server
//     socket.on('chat message', (msg) => {
//         // Add the received message to the chat
//         const messageDiv = document.createElement('div');
//         messageDiv.className = 'message';
//         messageDiv.innerHTML = `
//             <span class="username">${msg.user}:</span>
//             <p>${msg.message}</p>
//             <span class="timestamp">${msg.timestamp}</span>`;
//         chatMessages.appendChild(messageDiv);
//     });

//     // Utility function to get the current time in HH:mm format
//     function getCurrentTime() {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         return `${hours}:${minutes}`;
//     }
// });

// // Event listener for sending messages
//     sendButton.addEventListener('click', () => {
//         const message = messageInput.value.trim();
//         if (message !== '') {
//             // Emit a 'chat message' event to the server
//             socket.emit('chat message', { user: '[Username]', message, timestamp: getCurrentTime() });
//             messageInput.value = ''; // Clear the input field
//         }
//     });

//     // Event listener for receiving messages from the server
//     socket.on('chat message', (msg) => {
//         // Add the received message to the chat
//         const messageDiv = document.createElement('div');
//         messageDiv.className = 'message';
//         messageDiv.innerHTML = `
//             <span class="username">${msg.user}:</span>
//             <p>${msg.message}</p>
//             <span class="timestamp">${msg.timestamp}</span>`;
//         chatMessages.appendChild(messageDiv);
//     });

//     // Function to get the current time in HH:mm format
//     function getCurrentTime() {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         return `${hours}:${minutes}`;
//     }
//     // Event listener for logout button
//     const logoutButton = document.getElementById('logout-button');
//     logoutButton.addEventListener('click', () => {
//         // Disconnect Socket.IO connection when logging out
//         socket.disconnect();
//         // Redirect to the logout page or perform other logout actions
//         window.location.href = 'index.html'; // Change the URL as needed
//     });
    