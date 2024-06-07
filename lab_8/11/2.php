<?php

$array = array();
for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 5; $j++) {
        $array[$i][$j] = rand(30, 60);
    }
}

function findMaxElement($array)
{
    $max = $array[0][0];
    foreach ($array as $row) {
        foreach ($row as $element) {
            if ($element > $max) {
                $max = $element;
            }
        }
    }
    return $max;
}

function findMinElement($array)
{
    $min = $array[0][0];
    foreach ($array as $row) {
        foreach ($row as $element) {
            if ($element < $min) {
                $min = $element;
            }
        }
    }
    return $min;
}

echo "Максимальный элемент: " . findMaxElement($array) . "\n";
echo "Минимальный элемент: " . findMinElement($array) . "\n";
