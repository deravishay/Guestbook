<?php

class DbConnection
{
    public $host = "localhost";    /* Host name */
    public $user = "root";         /* User */
    public $password = "3652";         /* Password */
    public $dbname = "myDB";   /* Database name */ 
      
    public function connect() {

        $conn = mysqli_connect($this->host,$this->user, $this->password, $this->dbname);
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
    
        return $conn;
    }

    public function createDb() {

        $conn = new mysqli($this->host, $this->user, $this->password);
        $create = true;
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            $create = false;
        }

        return $create;
    }

        public function createTable() {
        $create = true;
        $conn = new mysqli($this->host, $this->user, $this->password, $this->dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            $create = false;
        }
        // sql to create table
    $sql = "SELECT 1 from `users` LIMIT 1";
    
    if ($conn->query($sql) === TRUE) {
        echo "Table exist";
        $create = true; 
    } else {
        echo "Error creating table: " . $conn->error;
        $create = false;
    }
        return $create;
    }

}
