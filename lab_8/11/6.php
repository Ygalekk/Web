<?php

$number = 123;

$digit1 = floor($number / 100);
$digit2 = floor(($number % 100) / 10);
$digit3 = $number % 10;

$sum = $digit1 + $digit2 + $digit3;

echo "Сумма цифр трехзначного числа $number равна: $sum";
