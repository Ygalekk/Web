<?php

function mergeArraysDynamic($arrays)
{
    $mergedArray = [];

    $maxLength = 0;

    foreach ($arrays as $array) {
        $maxLength = max($maxLength, count($array));
    }

    for ($i = 0; $i < $maxLength; $i++) {
        foreach ($arrays as $array) {
            if (isset($array[$i])) {
                $mergedArray[] = $array[$i];
            }
        }
    }

    return $mergedArray;
}

$array1 = [1, 2, 3];
$array2 = ['a', 'b', 'c'];
$array3 = ['x', 'y', 'z'];

$result = mergeArraysDynamic([$array1, $array2, $array3]);

print_r($result);
