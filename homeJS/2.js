alert(null || 2 || undefined); // возвращает первый true, а это 2
alert(alert(213) || 2 || alert(234)); // сначала 213, потом 2, а 234 не выведет, потомучто уже вернул true 2
alert(13123 && null && 2); // null, потомучто уже наткнулся на первый false null
alert(alert(1) && alert(2)); // сначала 1, потом undefined
alert(null || 2 && 3 || 4); // 3, значением null || 2 это 2(true), потом 2 && 3(true)потомучто последний, а  3 || 4 уже не выполняется, так как выполнился первый
if (-1 || 0) alert ("first"); // first, потомучто -1 это true, поэтому результат выражения true
if(-1 && 0) alert("second"); // ничего, потомучто 0 это false, поэтому результат выражения false