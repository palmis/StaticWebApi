var express = require('express');
var app = express();

var pfinance = {
	accounts: [
		{
			name: "main account",
			accountnr: "123-12-123",
			balance: "173"
		}, 
		{
			name: "second account",
			accountnr: "124-14-124",
			balance: "173"
		}, 
		{
			name: "savings account",
			accountnr: "125-15-125",
			balance: "173"
		}
	],
	budget: [
		{
			category: "category one",
			budget: "123",
			spennt: "53"
		},
		{
			category: "category two",
			budget: "143",
			spennt: "63"
		},
		{
			category: "category three",
			budget: "126",
			spennt: "93"
		}
	]
};

app.get('/', function(req, res) {
  res.json(pfinance);
});

app.listen(process.env.PORT || 4730);