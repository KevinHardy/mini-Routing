var app = angular.module('miniRouting');

app.service('productService', function() {
	this.shoeData = [{
		type: 'Nike',
		color: 'red',
		size: 12
	},
	{
		type: 'Reebok',
		color: 'blue',
		size: 9
	},
	{
		type: 'Adidas',
		color: 'Yellow',
		size: 6
	},
	{
		type: 'Puma',
		color: 'Green',
		size: 7
	}
	];

	this.sockData = [
    {
      type: 'Stance',
      color: 'Red',
      size: 'S'
    },
    {
      type: 'Nike',
      color: 'White',
      size: 'M'
    },
    {
      type: 'Reebok',
      color: 'Green',
      size: 'L'
    },
  ];
})