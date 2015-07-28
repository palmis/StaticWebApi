var express = require('express');
var app = express();

var pfinance = {
	accounts: [
		{
			name: "main account",
			accountnr: "123-12-123",
			balance: "12983"
		}, 
		{
			name: "second account",
			accountnr: "124-14-124",
			balance: "173"
		}, 
		{
			name: "savings account",
			accountnr: "125-15-125",
			balance: "50458"
		}
	],
	budget: [
		{
			category: "Groceries",
			budget: "123",
			spent: "53"
		},
		{
			category: "Alcohol",
			budget: "143",
			spent: "63"
		},
		{
			category: "category three",
			budget: "126",
			spent: "93"
		}
	]
};

app.get('/', function(req, res) {
  res.json(pfinance);
});

app.listen(process.env.PORT || 4730);