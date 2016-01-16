# univerApp
App realizada con 

  * [Angular][1]
  * [PHP][2] API
  * [MariaDB][3]

Instalar un servidor apache:
    
    sudo dnf install httpd.

Iniciar el servidor:

    sudo service httpd start.
    
Instalar e iniciar MariaDB:

    sudo yum install mysql mysql-server
    sudo service mysqld start
 
 Agrega una contraseña a MariaDB:
 
     sudo /usr/bin/mysql_secure_installation.
     
 Instala PHP:
 
     sudo yum install php php-mysql
 
 Inicia el servidor y MariaDB al encender la PC:
 
    sudo chkconfig httpd on
    sudo chkconfig mysqld on



[1]: https://angular.io/    "AngularJS"
[2]: http://php.net/        "PHP"
[3]: https://mariadb.org/   "MariaDB"





