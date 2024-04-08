<?php
$i = 1;
while ($i < 5){
    echo ("$i <br>");
    $i++;
}
echo "<br>";
echo "###########################";
echo "<br>";
$i = 1;
while ($i < 6){
  if  ($i == 3) break;
    echo $i;
    $i++;
}
echo "<br>";
echo "###########################";
echo "<br>";
$i = 0;
while ($i < 6){
 $i ++;
 if  ($i == 3) continue;
    echo $i;
}
echo "<br>";
echo "###########################";
echo "<br>"; 

$i = 1;
while ($i < 5):
    echo ("$i.<br>");
    $i++;
endwhile;


$i = 1;
 do{
    echo $i;
    $i++;
     }    while ($i < 6)


?>