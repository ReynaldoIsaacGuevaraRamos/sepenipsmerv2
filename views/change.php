<?PHP
	
	session_start();
	include_once '../bd/conexion.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();
	$contraA = $_POST['contraA'];
	$contraB = $_POST['contraB'];
	$contraC = $_POST['contraC'];
	$hash = hash('ripemd160',$_POST['contraB']);
	$correo = $_SESSION["s_usu"];
	$consulta = "SELECT password FROM users WHERE correo='$correo'";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetch(PDO::FETCH_ASSOC);
	if (hash('ripemd160',$contraA) == $data['password'] && $contraB == $contraC) {
		$pdoUpdate ="UPDATE users SET password=:password WHERE correo=:correo";
		$pdoUpdate_run = $conexion ->prepare($pdoUpdate);
		$pdoUpdate_exec = $pdoUpdate_run->execute(array(":password"=>$hash,":correo"=>$correo));
		if($pdoUpdate_exec){
			echo'<script>alert("Gruardado");window.location.href="cambio.php"</script>';
		}else{
			echo'<script>alert("No Gruardado");window.location.href="cambio.php"</script>';
		}
	}else{
		echo'<script>alert("ERROR:No Gruardado");window.location.href="cambio.php"</script>';
	}
?>
