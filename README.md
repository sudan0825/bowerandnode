1. Use library in bower_components: 
app.use('/bower_components',express.static(path.join(__dirname +'/bower_components')));



2. Use any static directory such as CSS files and HTML files in public

app.use(express.static(path.join(__dirname+'/public')));//set the static files location

3. why my css files does not work? 
Add "rel" attribute to your embeded reference
<link rel="stylesheet" type="text/css"  href="assets/home.css">