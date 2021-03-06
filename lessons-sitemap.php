<?php
	header("Content-Type: text/xml"); //set the content type to xml
	// Initialize the xmlOutput variable
	$xmlBody = '<?xml version="1.0" encoding="utf-8"?>';
	$xmlBody .= '<XML>
	<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
	// Connect to your MySQL database whatever way you like to here
	require_once('inc/db_vidainglescore_conn.php');
	// Execute the Query on the database to select items(20 in this example)
	$sql = "SELECT * FROM lecciones ORDER BY lessonid DESC";
	$qry = mysqli_query($db_conx,$sql);
	while($row = mysqli_fetch_array($qry,MYSQLI_ASSOC)){
    // Set DB variables into local variables for easier use 
    $leccionid = $row["lessonid"]; 
    $leccionname = $row["lesson_name"]; 
    $lecciondatepublished = $row["datepublished"]; 
    $lecciondatemodified = $row["datemodified"]; 
    // Start filling the $xmlBody variable with looping content here inside the while loop 
    // It will loop through 20 items from the database and render into XML format
    $xmlBody .= '<url>
      <loc>http://vidaingles.com/lecciones/'.$leccionid.'/'.$leccionname.'</loc>
      <lastmod>'.$lecciondatemodified.'</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>';
    
	} // End while loop
		
	$xmlBody .= "</urlset></XML>";
	echo $xmlBody; // output
?>
