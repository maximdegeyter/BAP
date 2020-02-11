<?php

require_once(__DIR__ . '/DAO.php');

class ScoreDAO extends DAO{

  public function selectAllEvents(){
    $sql = "SELECT * FROM `schedule` ORDER BY `id`";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function selectAllDates(){
    $sql = "SELECT * FROM `data` ORDER BY `id`";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}


?>
