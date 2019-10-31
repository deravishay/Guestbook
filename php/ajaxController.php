<?php

include "config.php";

$connection = new DbConnection;
$con = $connection->connect();
$data = json_decode(file_get_contents("php://input"));
$username = $data->username;
$comment = $data->comment;
$request = $data->request;

function getAllFromDb($con)
{
	$userData = mysqli_query($con,"select * from users order by id desc");
	$response = array();
	while($row = mysqli_fetch_assoc($userData)){
	    $response[] = $row;
	}
	echo json_encode($response);
	exit;
}

function addTodb($con,$username,$comment)
{
	$userData = mysqli_query($con,"SELECT * FROM users WHERE username='".$username."'");
	// user doesnt exist
	if(mysqli_num_rows($userData) == 0){
		mysqli_query($con,"INSERT INTO users(username,comment) VALUES('".$username."','".$comment."')");
		$response = "Add record";
	}else{
		$response = "Username already exists";
	}
	echo json_encode($response);
	exit;
}

// Fetch All records
if($request == 'fetch'){
	getAllFromDb($con);
}
// Add record
if($request == 'add'){
	addTodb($con,$username,$comment);
}