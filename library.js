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
var libary = {
	
	inventory: {
		addBooks = function(){

		}
		removeBooks = function(){

		}
		viewAllBooks = function(){

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
function startSoftware(){
	console.log("Welcome to the Oak Park Public Library's Online Catalog!");
	var displayOptions = sget("What would you like to do today?\n1.View all books\n2.View books by genre\n3.Search books\n4.Add books to inventory\n5.Remove books from inventory\n6.Exit online catalog").trim();

		switch(displayOptions){
			case'1':
			break;

			case'2':
			break;

			case'3':
			break;

			case'4':
			break;

			case'5':
			break;

			case'6':
			break;

			default:

		}

}


