CREATE DATABASE `startup-progress` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `phase` (
  `phase_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `order` tinyint(4) NOT NULL,
  PRIMARY KEY (`phase_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `task` (
  `task_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phase_id` int(11) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_completed` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`task_id`),
  KEY `phase_id` (`phase_id`),
  CONSTRAINT `task_ibfk_1` FOREIGN KEY (`phase_id`) REFERENCES `phase` (`phase_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
