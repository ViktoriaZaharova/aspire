<?php
    header("Content-type: text/html;charset=utf-8");

    $recepient = "jobjk8@gmail.com"; // введите свой email
    $sitename = "Aspire";

    $name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]);
    $radio_business = trim($_POST["radio_business"]);

    $other_sphere = trim($_POST["other_sphere"]);

    $radio_business_stages = trim($_POST["radio_business_stages"]);

    $another_stage = trim($_POST["another_stage"]);

    $radio_sum = trim($_POST["radio_sum"]);

    $different_yield = trim($_POST["different_yield"]);

    $radio_start = trim($_POST["radio_start"]);

    $another_term = trim($_POST["another_term"]);

    $radio_time_business = trim($_POST["radio_time_business"]);

    $check_tools = implode(',', $_POST["check_tools"]);

    $radio_active_sum = trim($_POST["radio_active_sum"]);
    $radio_valuation_amount = trim($_POST["radio_valuation_amount"]);

    $radio = trim($_POST["radio"]);
    $message = "Имя: $name \nТелефон: $phone \nСфера бизнеса: $radio_business \nДругая сфера бизнеса: $other_sphere \nСтадия бизнеса: $radio_business_stages \nДругая стадия бизнеса: $another_stage \nЧистая доходность: $radio_business_stages \nДругая чистая доходность: $different_yield \nКак давно Вы на рынке: $radio_start \nКак давно Вы на рынке (другое): $another_term \nСколько времени вы тратите на бизнес: $radio_time_business \nВыберите инструменты, которые внедрены у вас в бизнесе: $check_tools \nМатериальные активы: $radio_active_sum \nСумма оценки бизнеса: $radio_valuation_amount";

    $subject = "Заявка с сайта \"$sitename\"";



    mail($recepient, $subject, $message, "From: $recepient\nReply-To: secondnick@yourmail.ru\nContent-type:text/plain; Charset=utf-8\r\n");

