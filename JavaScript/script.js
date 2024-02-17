document.getElementById('urlShortenerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var longUrl = document.getElementById('longUrlInput').value;
    
    // Call the shortenUrl function with the long URL
    shortenUrl(longUrl, function(shortUrl) {
        // Display the shortened URL
        document.getElementById('shortenedUrl').innerText = 'Shortened URL: ' + shortUrl;
    });
});

function shortenUrl(longUrl, callback) {
    // Dummy function to generate a shortened URL
    // In a real-world scenario, you would implement a server-side logic to generate unique short URLs
    var shortUrl = 'https://vikumk.github.io/' + Math.random().toString(36).substr(2, 5);
    
    // Call the callback function with the generated short URL
    callback(shortUrl);
}
