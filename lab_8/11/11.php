<?php

function mergeArrays($array1, $array2)
{
    $mergedArray = [];

    $count = max(count($array1), count($array2));

    for ($i = 0; $i < $count; $i++) {
        if (isset($array1[$i])) {
            $mergedArray[] = $array1[$i];
        }
        if (isset($array2[$i])) {
            $mergedArray[] = $array2[$i];
        }
    }

    return $mergedArray;
}

$array1 = [1, 2, 3];
$array2 = ['a', 'b', 'c'];

$result = mergeArrays($array1, $array2);

print_r($result);
