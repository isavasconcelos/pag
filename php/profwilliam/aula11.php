<?php
echo "<br>";
echo "###########################";
echo "<br>";

$color = array("red","green","blue","yellow","1","2","3");
foreach ($color as $x) {
echo "$x <br>";
}

echo "<br>";
echo "###########################";
echo "<br>";

$membros = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
foreach($membros as $x => $y){
    echo"$x : $y <br>";
}
echo "<br>";
echo "###########################";
echo "<br>";

$color = array("red","green","blue","yellow","1","2","3");
foreach ($color as $x) {
    if ($x=="blue") break;
    echo "$x<br>";
}

    echo "<br>";
echo "###########################";
echo "<br>";

echo "Oi Professor Wiliam :)"


?>