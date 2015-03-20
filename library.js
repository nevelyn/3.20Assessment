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

	inventory:[].sort();,

	catalogActions: {
		addBooks : function(){
			var titleToBeAdded = sget("Please enter the title of the book");
			var authorToBeAdded = sget("Please enter the author of the book");
			var genreToBeAdded = sget("Please enter the genre of the book (i.e. Fiction or Non-Fiction)");
			var lengthToBeAdded = sget("Please enter the length of the book (i.e. 500 pages)");
			var statusToBeAdded = sget("Please enter the status of the book (i.e. Available or Checked Out)");
			var bookToBeAdded = new Book(titleToBeAdded, authorToBeAdded, genreToBeAdded, lengthToBeAdded, statusToBeAdded);
			library.inventory.push(bookToBeAdded);
			console.log("\nTitle: " + titleToBeAdded + "Author: " + authorToBeAdded + "Genre: " + genreToBeAdded + "Length: " + lengthToBeAdded + "Status: " + statusToBeAdded + "**********\n");

		},
		removeBooks : function(){

		},
		viewAllBooks : function(){
			console.log("Here is a list of all of the books in the library\n");

			for (var i=0; i<library.inventory.length; i++){

				console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
			}

		},
		viewGenres : function(){
			console.log("Here is a list of books by genre\n");
			if(){
			
				for (var i=0; i<library.inventory.length; i++){
	
					console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
				}	
			}


		},
		searchForBooks : function(){
			var searchCriteria = sget("How would you like to search the catalog? \nBy author \nBy title").trim().toLowercase();
			switch(searchCriteria){

			case"author":
				var authorToLookFor = sget("Please enter the authors name").trim();
				for (var i=0; i<library.inventory.length; i++){
					if(library.inventory.author===authorToLookFor){
						console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
					}else{
						console.log("A book by that author was not found");
						searchForBooks();
					}
				}
			break;

			case"title":	
				var titleToLookFor = sget("Please enter the title you'd like to search for");
				for (var i=0; i<library.inventory.length; i++){
					if(library.inventory.title===titleToLookFor){
						console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
					}else{
						console.log("A book by that title was not found");
						searchForBooks();
					}
				}
			break;

			default:
			console.log("Invalid search criteria\nPlease try again");
			searchForBooks();
			break;	
			}
		},
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
	console.log("\nWelcome to the Oak Park Public Library's Online Catalog!\n");
	displayOptions();
	function displayOptions(){
		var menu = sget("What would you like to do today?\n\n1.View all books\n2.View books by genre\n3.Search books\n4.Add books to inventory\n5.Remove books from inventory\n6.Exit online catalog").trim();
	
			switch(menu){
				case'1': 
					library.catalogActions.viewAllBooks();
					displayOptions();
	
				break;
	
				case'2':
				break;
	
				case'3':
					searchForBooks();
					displayOptions();
				break;
	
				case'4':
					library.catalogActions.addBooks();
					displayOptions();
				break;
	
				case'5':
				break;
	
				case'6':
				console.log("\nThank you for using the Oak Park Public Library's Online Catalog\nHave a GREAT Day!\n");
				break;
	
				default:
	}
		}

}
startCatalog();

