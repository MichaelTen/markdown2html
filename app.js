const express = require('express');
const multer = require('multer');
const fs = require('fs');
const marked = require('marked');
const path = require('path');

const app = express();
const PORT = 4444; // Port for LAN access

// Middleware for serving static files (e.g., the form)
app.use(express.static('public'));

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// POST endpoint to handle file upload and conversion
app.post('/convert', upload.single('markdownFile'), (req, res) => {
    const markdownPath = req.file.path;

    // Read the uploaded Markdown file
    fs.readFile(markdownPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading file');

        // Convert Markdown to HTML
        const htmlContent = marked(data);

        // Delete the temporary Markdown file
        fs.unlinkSync(markdownPath);

        // Send the HTML as a response
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Markdown to HTML</title>
            </head>
            <body>
                <h1>Converted HTML</h1>
                <div>${htmlContent}</div>
                <a href="/">Upload another file</a>
            </body>
            </html>
        `);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://<YOUR_LOCAL_IP>:${PORT}`);
    console.log(`Access it via Brave or any browser.`);
});
