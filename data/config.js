
///////////////////////////////////////////////////////////////////
// AREA CONFIGURATION
//
	var MAX_DISTINC = 25;
	var AREAX = 920;
	var AREAY = 600;
	var COLORS_APPROACH = "fix"; // fix, random, gradient
	var PARAM1 = "year";
	var PARAM2 = "year";
	var AREA_TITLE = "Explore and visualize text visualization";

///////////////////////////////////////////////////////////////////
// FIELDS CONFIGURATIONS:
//
// -> the index are the machine-names for each field (only alphanumeric characters)/ Also used in var DATA
// -> human : human name for the field
// -> filter: 0 no eligible for filtering | 1 eligible for filtering
//

	
// NOTE: could be interesting when data is big, to use short index names, f.e. 0, 1, 2, 3, 4...

///////////////////////////////////////////////////////////////////
// DATA
//
//// ADD FIELS
//  "Access":"yes", "no", "Other"
//  "Scenario":"Real case", "Concept proof" ,"Dummy data", "Other"


var FIELDS = [
	{
  "id": 
  			{ human: "ID", areafilter: "0", type:"number"},
  "name": 
  			{ human: "Title", areafilter: "1", type:"text"},
  "name_short": 
  			{ human: "Short title", areafilter: "0", type:"text"},
  "author": 
  			{ human: "Authos(s)", areafilter: "1", type:"text"},
  "year": 
 			{ human: "Year", areafilter: "0", type:"number"},
  "url": 
  			{ human: "Web", areafilter: "0", type:"url"},
  "data": 
  			{ human: "Data", areafilter: "1", type:"text"},
  "discipline": 
  			{ human: "Discipline", areafilter: "1", type:"text"},
  "method":
  			{ human: "Method", areafilter: "1", type:"text"},
  "description": 
  			{ human: "Description", areafilter: "1", type:"text"},
  "citation": 
  			{ human: "Citation", areafilter: "1", type:"text"},
  "image_name": 
  			{ human: "Image", areafilter: "0", type:"text"},
  "thumb_name":
  			{ human: "Thumbnail", areafilter: "0", type:"text"},
  "Single_Collection":
  			{ human: "Single or Collection", areafilter: "0", type:"text"},
  "SW_SP_CI_CA":
  			{ human: "Text subclasses", areafilter: "0", type:"text"},
  "Time":
  			{ human: "Time related?", areafilter: "0", type:"text"},
  "Search":
  			{ human: "Search tool?", areafilter: "0", type:"text"},
  "Data_size":
  			{ human: "Data size", areafilter: "0", type:"text"},
  "Access":
        { human: "(2015) any demo?", areafilter: "0", type:"text"},
  "Scenario":
        { human: "Kind of scenario", areafilter: "0", type:"text"}
	}
];
