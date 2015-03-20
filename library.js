var sget = require("sget");
var library = {

	inventory:[],

	catalogActions: {
		addBooks : function(){ //works!!
			var titleToBeAdded = sget("Please enter the title of the book");
			var authorToBeAdded = sget("Please enter the author of the book");
			var genreToBeAdded = sget("Please enter the genre of the book (i.e. Fiction or Non-Fiction)");
			var lengthToBeAdded = sget("Please enter the length of the book (i.e. 500 pages)");
			var statusToBeAdded = sget("Please enter the status of the book (i.e. Available or Checked Out)");
			var bookToBeAdded = new Book(titleToBeAdded, authorToBeAdded, genreToBeAdded, lengthToBeAdded, statusToBeAdded);
			library.inventory.push(bookToBeAdded);
			console.log("\nTitle: " + titleToBeAdded + "Author: " + authorToBeAdded + "Genre: " + genreToBeAdded + "Length: " + lengthToBeAdded + "Status: " + statusToBeAdded + "**********\n");
		},

		removeBooks : function(){ //can't figure out why this function is not working
			var bookToRemove = sget("\nPlease enter the title of the book you would like to remove").trim();
			var bookIndex = library.inventory.indexOf(bookToRemove);
			for(var i=0; i<library.inventory.length; i++){
				if(bookIndex > -1){
							library.inventory.splice(bookIndex,1);
				}		else{
							console.log("A book by that title was not found");
							library.catalogActions.removeBooks();
						}
			}
		},

		viewAllBooks : function(){//works!!
			console.log("Here is a list of all of the books in the library\n");

			for (var i=0; i<library.inventory.length; i++){

				console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
			}
		},

		viewGenres : function(){ //not complete
			/*console.log("Here is a list of books by genre\n");
			if(){
			
				for (var i=0; i<library.inventory.length; i++){
	
					console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
				}	
			}*/
		},

		searchForBooks : function(){//switch case works however the looping does not
			var searchCriteria = sget("\nHow would you like to search the catalog? \n1.By author \n2.By title").trim();
			switch(searchCriteria){

			case"1":
				var authorToLookFor = sget("\nPlease enter the authors name").trim().toLowerCase();
				for (var i=0; i<library.inventory.length; i++){
					if(library.inventory[i].author===authorToLookFor){
						console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
					}else{
						console.log("A book by that author was not found");
						library.catalogActions.searchForBooks();
					}
				}
			break;

			case"2":	
				var titleToLookFor = sget("\nPlease enter the title of the book");
				for (var i=0; i<library.inventory.length; i++){
					if(library.inventory.title===titleToLookFor){
						console.log("\nTitle: " + library.inventory[i].title + "\nAuthor: " + library.inventory[i].author + "\nGenre: " + library.inventory[i].genre + "\nLength: " +library.inventory[i].length + "\nStatus: " + library.inventory[i].status + "\n**********\n");
					}else{
						console.log("\nA book by that title was not found");
						library.catalogActions.searchForBooks();
					}
				}
			break;

			default:
			console.log("\nInvalid search criteria\nPlease try again");
			library.catalogActions.searchForBooks();
			break;	
			}
		},
	}
};

function Book(title, author, genre, length, status){
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.length = length;
	this.status = status;
};

var girlBoss = new Book("Girl Boss", "Sophia Amaruso", "Non-Fiction", "200 pages", "Available");
var coding = new Book("JavaScripting", "Ben Rodgers", "Technology", "150 pages", "Available");
var moonWalk = new Book("The Moonwalking Instructional", "Michael Jackson","Non-fiction", "500 pages", "Available");
library.inventory.push(girlBoss, coding, moonWalk);

function startCatalog(){ //works!!!
	console.log("\nWelcome to the Oak Park Public Library's Online Catalog!\n");
	displayOptions();
	function displayOptions(){
		var menu = sget("What would you like to do?\n\n1.View all books\n2.View books by genre\n3.Search books\n4.Add books to inventory\n5.Remove books from inventory\n6.Exit online catalog").trim();
	
			switch(menu){
				case'1': 
					library.catalogActions.viewAllBooks();
					displayOptions();
					break;
	
				case'2':
					library.catalogActions.viewGenres();
					displayOptions();
					break;
	
				case'3':
					library.catalogActions.searchForBooks();
					displayOptions();
					break;
	
				case'4':
					library.catalogActions.addBooks();
					displayOptions();
					break;
	
				case'5':
					library.catalogActions.removeBooks();
					displayOptions();
					break;
	
				case'6':
				console.log("\nThank you for using the Oak Park Public Library's Online Catalog\nHave a GREAT Day!\n");
					break;
	
				default:
	}
		}

};
startCatalog();

