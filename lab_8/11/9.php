<?php


$array = [15, 27, 53, 48, 91, 505];
$newArray = [];

foreach ($array as $number) {
    if (strpos((string)$number, '5') !== false) {
        $newArray[] = $number;
    }
}

print_r($newArray);
