const express = require ( 'express ' );
const log = require ( ' morgan ' );
const path = require ( ' path ' );
mongoose
const app = express ();

const Book = require('./models/books.js');


app.set ( ' views ' , path.resolve ( __dirname , ' views ') );
app.set ( ' view engine ' , ' ejs ' );

app.use (
	'/ css ' ,
	express.static ( path . resolve ( __dirname , ' css ' ))
);
app.use (
	'/ js ' ,
	express.static ( path . resolve ( __dirname , ' js ' ))
);

app.use ( log ( ' dev ') );
app.get ( '/ ' , function ( req , res ) {
	Book.find().exec( function (books) {
		res.render('index', { books: books });
        });
});

app.use ( function ( req , res ) {
	res.status (404);
	res.end ( ' Page Not Found ' );
});

app.listen (3000);
