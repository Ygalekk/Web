<?php

$array1 = array();
$array2 = array();

function fillAndPrintArray($array, $size)
{
    for ($i = 0; $i < $size; $i++) {
        $array[$i] = rand(30, 60);
        echo $array[$i] . " ";
    }
    echo "\n";
}

$size1 = 5;
$size2 = 7;

echo "Первый массив: ";
fillAndPrintArray($array1, $size1);

echo "Второй массив: ";
fillAndPrintArray($array2, $size2);
