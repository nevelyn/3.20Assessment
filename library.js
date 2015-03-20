/*
The Library

You've been contracted to write a piece of software for the local library. The software needs to meet the following requirements:

- The software should track the library's inventory of books
- Each book listing should include the title, author, genre (Fiction, Non-Fiction, etc.), length, and checked-in/checked-out status
- Librarians should be able to:
a.) add books to the inventory
b.) remove books from the inventory 
c.) view a list of all the books in the library
d.) view a list of all the books in a given genre
e.) search for a book by title or author (will have one selection but will build out to by author or title)

Library Object(will hold everything)
Book Object (will have key value pairs of all the books properties)
Inventory Object (will have key value pairs of Author: Name of Author & Title: Name of Book)
Add, Remove & Display will all be methods of Inventory
Search by title and author (figure out how to set that up)
*/

var sget = require("sget");
var library = {

	inventory:[],

	catalogActions: {
		addBooks = function(){
			var titleToBeAdded = sget("Please enter the title of the book");
			var authorToBeAdded = sget("Please enter the title of the book");
			var genreToBeAdded = sget("Please enter the title of the book");
			var lengthToBeAdded = sget("Please enter the title of the book");
			var statusToBeAdded = sget("Please enter the title of the book");
			var bookToBeAdded = new Book(titleToBeAdded, authorToBeAdded, genreToBeAdded, lengthToBeAdded, statusToBeAdded);
			library.inventory.push(bookToBeAdded);

		}
		removeBooks = function(){

		}
		viewAllBooks = function(){
			for (var i=0; i<library.inventory.length; i++){

				console.log("Here is a list of all of the books in the library: \nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status);
			}

		}
		viewGenres = function(){

		}
		searchAuthor = function(){

		}
		searchTitle = function(){

		}
	}
}

function Book(title, author, genre, length, status){
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.length = length;
	this.status = status;
}

var girlBoss = new Book("Girl Boss", "Sophia Amaruso", "Biography", "200 pages", "Available");
var coding = new Book("JavaScripting", "Ben Rodgers", "Technology", "150 pages", "Available");
var moonWalk = new Book("The Moonwalking Instructional", "Michael Jackson","Non-fiction", "500 pages", "Available");
library.inventory.push(girlBoss, coding, moonWalk);

function startCatalog(){
	console.log("Welcome to the Oak Park Public Library's Online Catalog!");
	displayOptions();
	function displayOptions(){
		var menu = sget("What would you like to do today?\n1.View all books\n2.View books by genre\n3.Search books\n4.Add books to inventory\n5.Remove books from inventory\n6.Exit online catalog").trim();
	
			switch(menu){
				case'1': 
					library.viewAllBooks();
					displayOptions();
	
				break;
	
				case'2':
				break;
	
				case'3':
				break;
	
				case'4':
					library.addBooks();
					displayOptions();
				break;
	
				case'5':
				break;
	
				case'6':
				console.log("Thank you for using the Oak Park Public Library's Online Catalog\nHave a GREAT Day!");
				break;
	
				default:
	}
		}

}
startCatalog();

