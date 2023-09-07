    // DB to save information ( Bookstore )
let books = [
    { bookId: 1, title: "Start with why", author: "Simon Sinek", price: 80, quantity: 13 },
    { bookId: 2, title: "But how do it know", author: "J. Clark Scott", price: 59.9, quantity: 22 },
    { bookId: 3, title: "Clean Code", author: "Robert Cecil Martin", price: 50, quantity: 5 },
    { bookId: 4, title: "Zero to One", author: "Peter Thiel", price: 45, quantity: 12 },
    { bookId: 5, title: "You don't know JS", author: "Kyle Simpson", price: 39.9, quantity: 9 }
];

    // Function to add new book
function addBook(bookId, title, author, price, quantity) {
    let newBook = { bookId, title, author, price, quantity };
    books.push(newBook);
}

    // Function to search book by certain standard
function searchBook(criteria, value) {
    let foundBooks = [];
    for (let book of books) {
        if (book[criteria].toLowerCase() === value.toLowerCase()) {
            foundBooks.push(book);
        }
    }
    return foundBooks;
}

    // Function to buy a book and issue an invoice
function sellBook(title, quantity, balance) {
    for (let book of books) {
        if (book.title.toLowerCase() === title.toLowerCase()) {
            if (book.quantity >= quantity && book.price * quantity <= balance) {
                book.quantity -= quantity;
                let totalCost = book.price * quantity;
                return `Was purchased ${quantity} A copy of'${title}' Successfully. total price :${totalCost}`;
            } else {
                return "Sorry, insufficient quantity or insufficient balance.";
            }
        }
    }
    return "The book is not available.";
}

    // Example of how to use the program
addBook(6, " Good Parts", "Douglas Crockford", 55, 15);

console.log("Available books:");
for (let book of books) {
    console.log(`ID: ${book.bookId}, Address: ${book.title}, Author: ${book.author}, Price: ${book.price}, Quantity: ${book.quantity}`);
}

let searchResult = searchBook("author", "Simon Sinek");
console.log("\nResearch Results:");
for (let book of searchResult) {
    console.log(`ID: ${book.bookId}, Address: ${book.title}, Author: ${book.author}, Price: ${book.price}, Quantity: ${book.quantity}`);
}

let balance = 500;
let purchaseResult = sellBook("The Good Parts", 3, balance);
console.log("\nThe result of the purchase:");
console.log(purchaseResult);
