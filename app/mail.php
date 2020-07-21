<?php
    header("Content-type: text/html;charset=utf-8");

    $recepient = "zaharova181114@gmail.com"; // введите свой email
    $sitename = "Aspire";

    $name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]);
    $radio_business = trim($_POST["radio_business"]);
    $radio_business_stages = trim($_POST["radio_business_stages"]);
    $radio_sum = trim($_POST["radio_sum"]);
    $radio_start = trim($_POST["radio_start"]);
    $radio_time_business = trim($_POST["radio_time_business"]);

    $check_tools = implode(',', $_POST["check_tools"]);

    $radio_active_sum = trim($_POST["radio_active_sum"]);
    $radio_valuation_amount = trim($_POST["radio_valuation_amount"]);

    $radio = trim($_POST["radio"]);
    $message = "Имя: $name \nТелефон: $phone \nСфера бизнеса: $radio_business \nСтадия бизнеса: $radio_business_stages \nЧистая доходность: $radio_business_stages \nКак давно Вы на рынке: $radio_start \nСколько времени вы тратите на бизнес: $radio_time_business \nВыберите инструменты, которые внедрены у вас в бизнесе: $check_tools \nМатериальные активы: $radio_active_sum \nСумма оценки бизнеса: $radio_valuation_amount";

    $subject = "Заявка с сайта \"$sitename\"";



    mail($recepient, $subject, $message, "From: $recepient\nReply-To: secondnick@yourmail.ru\nContent-type:text/plain; Charset=utf-8\r\n");

