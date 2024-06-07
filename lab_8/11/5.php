<?php

$a = 4;
$b = 8;
$c = 3;

$result1 = ($a + $b) / $c;
$result2 = ($a + $c) / $b;
$result3 = ($b + $c) / $a;

echo "Результат деления суммы $a и $b на $c: $result1\n";
echo "Результат деления суммы $a и $c на $b: $result2\n";
echo "Результат деления суммы $b и $c на $a: $result3\n";
