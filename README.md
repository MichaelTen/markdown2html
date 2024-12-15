This is to convert markdown to HTML via a node.js server. 

This is experimental and intended for use on an intranet with an Ubuntu server on LAN. Follow the following instructions at your own risk. This is a successful project for the author, but you may need to customize these next steps based on the unique setup of your system and your unique needs. 

# **Markdown to HTML Converter**

This project provides a **browser-based tool** to convert **Markdown** text into **HTML**. Built with **Node.js** and **Express**, it allows users to paste Markdown text into a text box and instantly view the HTML output.

---

## **Project Files**
The following files are required to set up this project:

- **`app.js`**: Main Node.js server file.
- **`public/index.html`**: Front-end interface for input and output.
- **`LICENSE`**: License file for the project.

You can access these files directly in the repository to copy or edit them.

---

## **Setup Instructions**

### **1. Create the Project Directories**
Run the following commands on your Ubuntu server:
```bash
mkdir markdown-to-html
cd markdown-to-html
mkdir public uploads
```

---

### **2. Create the Files**
Use `nano` or your preferred text editor to create the following files:

- **`app.js`**: Create in the root directory.
   ```bash
   nano app.js
   ```
   Copy the content of the file from the repository.

- **`index.html`**: Create in the `public/` directory.
   ```bash
   cd public
   nano index.html
   ```
   Copy the content of the file from the repository.

- **LICENSE**: Create in the root directory as needed.

---

### **3. Install Node.js and Dependencies**
Ensure Node.js is installed:
```bash
sudo apt update
sudo apt install nodejs npm
```

Install required dependencies:
```bash
npm install express
```

---

### **4. Run the App**
Start the server:
```bash
node app.js
```

Access the app in your browser:
```
http://<SERVER_LOCAL_IP>:4444
```
Replace `<SERVER_LOCAL_IP>` with your server's local IP address.

---

## **5. Run the App Persistently Using PM2**

To keep the app running and auto-restart it on reboot:

1. **Install PM2**:
   ```bash
   sudo npm install -g pm2
   ```

2. **Start the App with PM2**:
   ```bash
   pm2 start app.js --name markdown-to-html
   ```

3. **Enable Auto-Start on Boot**:
   ```bash
   pm2 startup
   pm2 save
   ```

4. **Verify Status**:
   ```bash
   pm2 status
   ```

---

## **Accessing the App**
Once the server is running, you can access the app using:
```
http://<SERVER_LOCAL_IP>:4444
```

---

## **Technologies Used**
- **Node.js** and **Express.js**: For back-end server functionality.
- **Marked.js**: Client-side Markdown-to-HTML conversion.

---

## **License**
This project is licensed under the **Apache-2.0** license.
