






function testInputForm(){
	alert("Testing Input form will work");
	
	var name = "Jack";
	var email = "jack@vayoungs.us";
	var username = "jyoung";
	
	var names = new Array("John", "Mark", "Luke", "Sammy");
	var emails = new Array("John@.com", "Mark@va.com", "Luke@gmail.com", "Sammy@hotmail.com");
	var usernames = new Array("John12", "Mark21", "Luke32", "Sammy234");
	
	$("input#nameinput").attr("value", names[1]);
	$("input#emailinput").attr("value", emails[1]);
	$("input#usernameinput").attr("value", usernames[1]);
	
	
	
	return false;
	
	
}


function Func1(num)
{
	//alert("Delayed 3 seconds");
	document.getElementById("infoo").innerHTML="JavaScript - message : " + num;
	
}

function Func1Delay()
{
	// setTimeout("Func1()", 2000);
	
	// for (i=1; i<3; i++)
	//  {
	//   setTimeout("", 3000);
	// 	Func1(i);
	//  }
	var namesArray = new Array("Kristina Chung", "Paige Chen", "Sherri Melton", "Gretchen Hill", "Karen Puckett", "Patrick Song",
	 "Elsie Hamilton", "Hazel Bender", "Malcolm Wagner", "Dolores McLaughlin", "Francis McNamara", "Sandy Raynor", "Marion Moon",
	 "Beth Woodard", "Julia Desai", "Jerome Wallace", "Neal Lawrence", "Jean Griffin", "Kristine Dougherty", "Crystal Powers",
	 "Alex May", "Eric Steele", "Wesley Teague", "Franklin Vick", "Claire Gallagher", "Marian Solomon", "Marcia Walsh",
	 "Dwight Monroe", "Wayne Connolly", "Stephanie Hawkins", "Neal Middleton", "Gretchen Goldstein", "Tim Watts", "Jerome Johnston",
	 "Shelley Weeks", "Priscilla Wilkerson", "Elsie Barton", "Beth Walton", "Erica Hall", "Douglas Ross", "Donald Chung", 
	"Katherine Bender", "Paul Woods", "Patricia Mangum", "Lois Joseph", "Louis Rosenthal", "Christina Bowden", "Darlene Barton", 
	"Harvey Underwood", "William Jones", "Frederick Baker", "Shirley Merritt", "Jason Cross", "Judith Cooper", "Gretchen Holmes",
	 "Don Sharpe", "Glenda Morgan", "Scott Hoyle", "Pat Allen", "Michelle Rich", "Jessica Rich", "Evan Grant", "Melinda Proctor",
	 "Calvin Diaz", "Eugene Graham", "Vickie Watkins", "Luis Hinton", "Allan Marsh", "Melanie Hewitt", "Marianne Branch", 
	"Natalie Walton", "Caroline O'Brien", "Arlene Case", "Kyle Watts", "Calvin Christensen", "Gary Parks", "Samantha Hardin",
	 "Sara Lucas", "Stacy Eason", "Gladys Davidson", "Mike Whitehead", "Lynne Rose", "Faye Sparks", "Diana Moore", "Leon Pearson", 
	"Ethel Rodgers", "Steve Graves", "Alison Scarborough", "Sherri Sutton", "Patsy Sinclair", "Kelly Bowman", "Stacy Olsen", "Curtis Love",
	 "Dana McLean", "Jennifer Christian", "Brett Lamb", "Brandon James", "Keith Chandler", "Joann Stout", "Ronnie Cowan");


	var emailArray = new Array("Chung@gmail.com", "Chen@gmail.com", "Melton@gmail.com", "Hill@gmail.com", "Puckett@gmail.com", "Song@gmail.com", 
	"Hamilton@gmail.com", "Bender@gmail.com", "Wagner@gmail.com", "McLaughlin@gmail.com", "McNamara@gmail.com", "Raynor@gmail.com", "Moon@gmail.com",
	 "Woodard@gmail.com", "Desai@gmail.com", "Wallace@gmail.com", "Lawrence@gmail.com", "Griffin@gmail.com", "Dougherty@gmail.com", "Powers@gmail.com",
	 "May@gmail.com", "Steele@gmail.com", "Teague@gmail.com", "Vick@gmail.com", "Gallagher@gmail.com", "Solomon@gmail.com", "Walsh@gmail.com", 
	"Monroe@gmail.com", "Connolly@gmail.com", "Hawkins@gmail.com", "Middleton@gmail.com", "Goldstein@gmail.com", "Watts@gmail.com", "Johnston@gmail.com",
	 "Weeks@gmail.com", "Wilkerson@gmail.com", "Barton@gmail.com", "Walton@gmail.com", "Hall@gmail.com", "Ross@gmail.com", "Chung@gmail.com", "Bender@gmail.com", 
	"Woods@gmail.com", "Mangum@gmail.com", "Joseph@gmail.com", "Rosenthal@gmail.com", "Bowden@gmail.com", "Barton@gmail.com", "Underwood@gmail.com",
	 "Jones@gmail.com", "Baker@gmail.com", "Merritt@gmail.com", "Cross@gmail.com", "Cooper@gmail.com", "Holmes@gmail.com", "Sharpe@gmail.com", "Morgan@gmail.com", 
	"Hoyle@gmail.com", "Allen@gmail.com", "Rich@gmail.com", "Rich@gmail.com", "Grant@gmail.com", "Proctor@gmail.com", "Diaz@gmail.com", "Graham@gmail.com",
	 "Watkins@gmail.com", "Hinton@gmail.com", "Marsh@gmail.com", "Hewitt@gmail.com", "Branch@gmail.com", "Walton@gmail.com", "O'Brien@gmail.com", "Case@gmail.com",
	 "Watts@gmail.com", "Christensen@gmail.com", "Parks@gmail.com", "Hardin@gmail.com", "Lucas@gmail.com", "Eason@gmail.com", "Davidson@gmail.com",
	 "Whitehead@gmail.com", "Rose@gmail.com", "Sparks@gmail.com", "Moore@gmail.com", "Pearson@gmail.com", "Rodgers@gmail.com", "Graves@gmail.com",
	 "Scarborough@gmail.com", "Sutton@gmail.com", "Sinclair@gmail.com", "Bowman@gmail.com", "Olsen@gmail.com", "Love@gmail.com", "McLean@gmail.com", 
	"Christian@gmail.com", "Lamb@gmail.com", "James@gmail.com", "Chandler@gmail.com", "Stout@gmail.com", "Cowan@gmail.com");
	
	
	for (i=0;i<namesArray.length;i++)
	{
	document.write(namesArray[i] + "<br >" + emailArray[i] + "<br ><br >");
	}	
	
	
	
	
	
}


// function Func1()
// {
// alert("Delayed 3 seconds");
// }
// function Func1Delay()
// {
// setTimeout("Func1()", 3000);
// }


var namesArray = array("Kristina Chung", "Paige Chen", "Sherri Melton", "Gretchen Hill", "Karen Puckett", "Patrick Song",
 "Elsie Hamilton", "Hazel Bender", "Malcolm Wagner", "Dolores McLaughlin", "Francis McNamara", "Sandy Raynor", "Marion Moon",
 "Beth Woodard", "Julia Desai", "Jerome Wallace", "Neal Lawrence", "Jean Griffin", "Kristine Dougherty", "Crystal Powers",
 "Alex May", "Eric Steele", "Wesley Teague", "Franklin Vick", "Claire Gallagher", "Marian Solomon", "Marcia Walsh",
 "Dwight Monroe", "Wayne Connolly", "Stephanie Hawkins", "Neal Middleton", "Gretchen Goldstein", "Tim Watts", "Jerome Johnston",
 "Shelley Weeks", "Priscilla Wilkerson", "Elsie Barton", "Beth Walton", "Erica Hall", "Douglas Ross", "Donald Chung", 
"Katherine Bender", "Paul Woods", "Patricia Mangum", "Lois Joseph", "Louis Rosenthal", "Christina Bowden", "Darlene Barton", 
"Harvey Underwood", "William Jones", "Frederick Baker", "Shirley Merritt", "Jason Cross", "Judith Cooper", "Gretchen Holmes",
 "Don Sharpe", "Glenda Morgan", "Scott Hoyle", "Pat Allen", "Michelle Rich", "Jessica Rich", "Evan Grant", "Melinda Proctor",
 "Calvin Diaz", "Eugene Graham", "Vickie Watkins", "Luis Hinton", "Allan Marsh", "Melanie Hewitt", "Marianne Branch", 
"Natalie Walton", "Caroline O'Brien", "Arlene Case", "Kyle Watts", "Calvin Christensen", "Gary Parks", "Samantha Hardin",
 "Sara Lucas", "Stacy Eason", "Gladys Davidson", "Mike Whitehead", "Lynne Rose", "Faye Sparks", "Diana Moore", "Leon Pearson", 
"Ethel Rodgers", "Steve Graves", "Alison Scarborough", "Sherri Sutton", "Patsy Sinclair", "Kelly Bowman", "Stacy Olsen", "Curtis Love",
 "Dana McLean", "Jennifer Christian", "Brett Lamb", "Brandon James", "Keith Chandler", "Joann Stout", "Ronnie Cowan");


var emailArray = array("Chung@gmail.com", "Chen@gmail.com", "Melton@gmail.com", "Hill@gmail.com", "Puckett@gmail.com", "Song@gmail.com", 
"Hamilton@gmail.com", "Bender@gmail.com", "Wagner@gmail.com", "McLaughlin@gmail.com", "McNamara@gmail.com", "Raynor@gmail.com", "Moon@gmail.com",
 "Woodard@gmail.com", "Desai@gmail.com", "Wallace@gmail.com", "Lawrence@gmail.com", "Griffin@gmail.com", "Dougherty@gmail.com", "Powers@gmail.com",
 "May@gmail.com", "Steele@gmail.com", "Teague@gmail.com", "Vick@gmail.com", "Gallagher@gmail.com", "Solomon@gmail.com", "Walsh@gmail.com", 
"Monroe@gmail.com", "Connolly@gmail.com", "Hawkins@gmail.com", "Middleton@gmail.com", "Goldstein@gmail.com", "Watts@gmail.com", "Johnston@gmail.com",
 "Weeks@gmail.com", "Wilkerson@gmail.com", "Barton@gmail.com", "Walton@gmail.com", "Hall@gmail.com", "Ross@gmail.com", "Chung@gmail.com", "Bender@gmail.com", 
"Woods@gmail.com", "Mangum@gmail.com", "Joseph@gmail.com", "Rosenthal@gmail.com", "Bowden@gmail.com", "Barton@gmail.com", "Underwood@gmail.com",
 "Jones@gmail.com", "Baker@gmail.com", "Merritt@gmail.com", "Cross@gmail.com", "Cooper@gmail.com", "Holmes@gmail.com", "Sharpe@gmail.com", "Morgan@gmail.com", 
"Hoyle@gmail.com", "Allen@gmail.com", "Rich@gmail.com", "Rich@gmail.com", "Grant@gmail.com", "Proctor@gmail.com", "Diaz@gmail.com", "Graham@gmail.com",
 "Watkins@gmail.com", "Hinton@gmail.com", "Marsh@gmail.com", "Hewitt@gmail.com", "Branch@gmail.com", "Walton@gmail.com", "O'Brien@gmail.com", "Case@gmail.com",
 "Watts@gmail.com", "Christensen@gmail.com", "Parks@gmail.com", "Hardin@gmail.com", "Lucas@gmail.com", "Eason@gmail.com", "Davidson@gmail.com",
 "Whitehead@gmail.com", "Rose@gmail.com", "Sparks@gmail.com", "Moore@gmail.com", "Pearson@gmail.com", "Rodgers@gmail.com", "Graves@gmail.com",
 "Scarborough@gmail.com", "Sutton@gmail.com", "Sinclair@gmail.com", "Bowman@gmail.com", "Olsen@gmail.com", "Love@gmail.com", "McLean@gmail.com", 
"Christian@gmail.com", "Lamb@gmail.com", "James@gmail.com", "Chandler@gmail.com", "Stout@gmail.com", "Cowan@gmail.com");










