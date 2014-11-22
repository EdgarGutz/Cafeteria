-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema Cafeteria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Cafeteria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Cafeteria` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `Cafeteria` ;

-- -----------------------------------------------------
-- Table `Cafeteria`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cafeteria`.`usuario` (
  `idusuario` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `contraseña` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NULL,
  `metodo de pago` INT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Cafeteria`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cafeteria`.`administradores` (
  `iadmon` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `contraseña` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NULL,
  PRIMARY KEY (`iadmon`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Cafeteria`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cafeteria`.`pedidos` (
  `idpedidos` INT NOT NULL,
  `total` INT NULL,
  `fecha` DATE NULL,
  `hora de pedido` TIME(4) NULL,
  `hora de entrega` TIME(4) NULL,
  `estado del pedido` INT NULL,
  `comentarios` VARCHAR(200) NULL,
  PRIMARY KEY (`idpedidos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Cafeteria`.`menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cafeteria`.`menu` (
  `idproducto` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `precio` INT NULL,
  PRIMARY KEY (`idproducto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Cafeteria`.`menu_has_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cafeteria`.`menu_has_pedidos` (
  `menu_idproducto` INT NOT NULL,
  `pedidos_idpedidos` INT NOT NULL,
  PRIMARY KEY (`menu_idproducto`, `pedidos_idpedidos`),
  INDEX `fk_menu_has_pedidos_pedidos1_idx` (`pedidos_idpedidos` ASC),
  INDEX `fk_menu_has_pedidos_menu1_idx` (`menu_idproducto` ASC),
  CONSTRAINT `fk_menu_has_pedidos_menu1`
    FOREIGN KEY (`menu_idproducto`)
    REFERENCES `Cafeteria`.`menu` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menu_has_pedidos_pedidos1`
    FOREIGN KEY (`pedidos_idpedidos`)
    REFERENCES `Cafeteria`.`pedidos` (`idpedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Cafeteria`.`usuario_has_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cafeteria`.`usuario_has_pedidos` (
  `usuario_idusuario` INT NOT NULL,
  `pedidos_idpedidos` INT NOT NULL,
  PRIMARY KEY (`usuario_idusuario`, `pedidos_idpedidos`),
  INDEX `fk_usuario_has_pedidos_pedidos1_idx` (`pedidos_idpedidos` ASC),
  INDEX `fk_usuario_has_pedidos_usuario1_idx` (`usuario_idusuario` ASC),
  CONSTRAINT `fk_usuario_has_pedidos_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `Cafeteria`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_pedidos_pedidos1`
    FOREIGN KEY (`pedidos_idpedidos`)
    REFERENCES `Cafeteria`.`pedidos` (`idpedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
