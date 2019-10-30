<?php

include('php/ajaxController.php');

use PHPUnit\Framework\TestCase;

final class PHPTest extends TestCase
{

    public function testDatabseConnection(): void
    {
        
        $test = new DbConnection();

        $this->assertNotEquals(
            NULL,
            $test->connect()
        );
    }

    public function testcreateDb(): void
    {
        
        $test = new DbConnection();

        $this->assertTrue(
            $test->createDb()
        );
    }
    public function testcreateTable(): void
    {
        
        $test = new DbConnection();

            $this->assertTrue(
                $test->createTable()
            );
    }
    public function testgetAllFromDb(): void
    {
        
        $connection = new DbConnection;
        $con = $connection->connect();

        $this->assertEquals(
            true,
            getAllFromDb($con)
        );
    }
    public function testaddTodbb(): void
    {
        
        $connection = new DbConnection;
        $con = $connection->connect();
        $username = '';
        $comment = '';
        $this->assertEquals(
            true,
            addTodb($con,$username,$comment)
        );
    }
    
}