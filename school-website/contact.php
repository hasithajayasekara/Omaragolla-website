<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>School Website - Contact</title>
    <link rel="stylesheet" href="./styles.css" />
</head>
<body>
    <header>
        <h1>School Website</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="clubs.php">Clubs</a></li>
                <li><a href="news.php">News</a></li>
                <li><a href="sports.php">Sports</a></li>
                <li><a href="contact.php" class="active">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Contact Us</h2>
        <form>
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br /><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />
            <label for="message">Message:</label><br />
            <textarea id="message" name="message" rows="5" required></textarea><br /><br />
            <button type="submit">Send</button>
        </form>
    </main>
    <footer>
        <p>&copy; 2024 School Website</p>
    </footer>
</body>
</html>
