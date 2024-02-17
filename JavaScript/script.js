document
  .getElementById("urlShortenerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var longUrl = document.getElementById("longUrlInput").value;

    // Here you would implement logic to generate a short URL and save the mapping
    var shortUrl = generateShortUrl(longUrl);

    document.getElementById("shortenedUrl").innerText =
      "Shortened URL: " + shortUrl;
  });

function generateShortUrl(longUrl) {
  // Here you would implement logic to generate a short URL
  // This could involve generating a unique ID or using a hashing algorithm
  // For simplicity, let's assume we just append a random string to the base URL
  return "https://vikumk.github.io/" + Math.random().toString(36).substr(2, 5);
}
