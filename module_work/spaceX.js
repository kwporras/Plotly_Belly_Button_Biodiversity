// Example API Call
const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(spaceXResults => console.log(spaceXResults));
// Example External Data Call
// Will get error unless local server is created
// Git Bash navigate to the appropriate directory
// python -m http.server

d3.json("samples.json").then(function(data){
    console.log(data);
});

// // Extract only wfreq,  sort array in descending order, delete null values
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });


// // Display the metadata of any individual from the dataset
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });




