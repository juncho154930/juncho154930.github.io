<?php

ob_start("ob_gzhandler");
include "index.html";
ob_end_flush();

?>
