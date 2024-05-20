<?php
// index.php

// Extract the slug from the URL
$url = $_SERVER['REQUEST_URI'];
$parts = explode('/', trim($url, '/'));
$slug = $parts[0]; // The first part of the URL after the domain

// Fetch blog post data based on the slug
// You can use the $slug variable to retrieve the appropriate blog post
// For demonstration purposes, let's assume you have a function to fetch blog post data
$blogPost = getBlogPostBySlug($slug);

// Display the blog post content
if ($blogPost) {
    echo "<h1>{$blogPost['title']}</h1>";
    echo "<p>{$blogPost['content']}</p>";
} else {
    echo "<p>Blog post not found</p>";
}

// Function to retrieve blog post data by slug
function getBlogPostBySlug($slug) {
    // You would implement your logic to fetch the blog post from your data source (e.g., database)
    // For demonstration purposes, let's assume you have an array of blog posts
    $blogPosts = array(
        'hello-world' => array(
            'title' => 'Hello, World!',
            'content' => 'This is the first blog post.',
        ),
        // Add more blog posts here...
    );

    // Return the blog post data if found, or null if not found
    return isset($blogPosts[$slug]) ? $blogPosts[$slug] : null;
}
?>
