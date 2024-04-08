<?php

$a = 5; //Integer
$b = 5.34; //Float
$c = "hello"; //String
$d = true; //Boolean
$e = NULL; //NULL

$a = (string) $a;
$b = (string) $b;
$c = (string) $c;
$d = (string) $d;
$e = (string) $e;

//To verify the type of any object in PHP, use the var_dump() function:
    var_dump($a);
    var_dump($b);
    var_dump($c);
    var_dump($d);
    var_dump($e);

    //Cast para inteiro

    $a = 5; //Integer
    $b = 5.34; //Float
    $c ="25 Kilometers"; //String
    $d = "Kilometers 25"; //String
    $e = "Hello"; //String
    $f = true; //Boolean
    $g = NULL; //NULL
    
    $a = (int) $a;
    $b = (int) $b;
    $c = (int) $c;
    $d = (int) $d;
    $e = (int) $e;
    $f = (int) $f;
    $g = (int) $g;

  echo "<br>";
  echo "############### Cast para inteiro ############";
  echo "<br>";
  
  var_dump($a);
  var_dump($b);
  var_dump($c);
  var_dump($d);
  var_dump($e);
  var_dump($f);
  var_dump($g);

  echo "<br>";
  echo "############### Float para inteiro ############";
  echo "<br>";

  $a = 5; //Integer
  $b = 5.34; //Float
  $c ="25 Kilometers"; //String
  $d = "Kilometers 25"; //String
  $e = "Hello"; //String
  $f = true; //Boolean
  $g = NULL; //NULL
  
  $a = (float) $a;
  $b = (float) $b;
  $c = (float) $c;
  $d = (float) $d;
  $e = (float) $e;
  $f = (float) $f;
  $g = (float) $g;  

  var_dump($a);
  var_dump($b);
  var_dump($c);
  var_dump($d);
  var_dump($e);
  var_dump($f);
  var_dump($g);
  ?>