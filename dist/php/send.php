<?php
// Файлы phpmailer
require '../phpmailer/PHPMailer.php';
require '../phpmailer/SMTP.php';
require '../phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['mess'];

$typeOfRequest = '';

if($_POST['type'] == 'price'){
    $typeOfRequest = 'Запрс прайс листа';
}
//else if ($_POST['type'] == 'usluga'){
//    $typeOfRequest = 'Запрс прайс листа услуги';
//}
else
    $typeOfRequest = 'Заявка с сайта';




// Формирование самого письма
$title = "Письмо с Сайта";
$body = "
<h2>Новое письмо</h2>
<h2>Тип запроса:$typeOfRequest</h2>
<b>Имя:</b> $name<br><br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b> $phone<br><br>";
if (strlen ($text) > 0 ){
    $body .= "<b>Сообщение:</b><br>".$text;
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
        $mail->Username   = 'smt.service@bk.ru'; // Логин на почте
        $mail->Password   = 'hasik92.92'; // Пароль на почте
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('smt.service@bk.ru', 'Имя отправителя'); // Адрес самой почты и имя отправителя

        // Получатель письма
    $mail->addAddress('smt.service@bk.ru');
        $mail->addAddress('coupe.86@mail.ru');

    // Прикрипление файлов к письму
if (!empty($_FILES['myfile']['name'][0])) {
    for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
        $filename = $_FILES['myfile']['name'][$ct];
        if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
        }
    }
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if(!$mail->send()) {
    header('location: ../404.html');
} else {
    header('location: ../thanks.html');
}
