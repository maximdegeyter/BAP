<?php
require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../dao/SchemaDAO.php';

class SchemaController extends Controller{

  private $schemaDAO;

  function __construct(){
    $this->schemaDAO = new SchemaDAO();
  }
  public function index(){
    if(!empty($_POST['action'])){
      if($_POST['action'] == 'insertScore'){
        $this->handleInsertScore();
      }
    }
    $schema =$this->schemaDAO->selectAll();
    $this->set('schema',$schema);
    $this->set(`title`,'Sporza Spelen - Schema');

    if(strtolower($_SERVER['HTTP_ACCEPT']) == 'application/json'){
      header('Content-Type: application/json');
      echo(json_encode($schema));
      exit();
    }
  }
}

?>
