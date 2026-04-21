DROP TABLE IF EXISTS contact_messages;

CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);