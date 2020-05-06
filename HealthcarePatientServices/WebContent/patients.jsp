<%@page import="com.Patient"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Patient Services</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/patients.js"></script>

<!-- Include Date Range Picker -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>

<script>
	$(document).ready(function(){
		var date_input=$('input[name="dateOfBirth"]'); //our date input has the name "date"
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'yyyy-mm-dd',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})
</script>

<style>
body {
	background:url(Images/patient.png) no-repeat center fixed;
	background-size: cover; 
}

</style>
</head>
<body>

<body>
<div class="container">
	<div class="row" >
		<div class="col-6">
				<br>
			<h1>Patients Management</h1>
			
			<br>
			<form id="formPatient" name="formPatient" method="post" action="patients.jsp">

				User Name:
				<input id="userName" name="userName" type="text" class="form-control form-control-sm">
				<br>
				 
				Address:
				<input id="userAddress" name="userAddress" type="text" class="form-control form-control-sm">
				<br>
				
				NIC No:
				<input id="nicNo" name="nicNo" type="text" class="form-control form-control-sm">
				<br>
				 
				Date of Birth:
				<input id="dateOfBirth" name="dateOfBirth" type="text" class="form-control form-control-sm"  placeholder="YYYY-MM-DD" >
				<br>
				
				 <div class="form-group" id="div_radio1">
				     <label class="control-label " for="radio1">
				     Gender:
				     </label>
					     <div class="">
						     <label class="radio-inline">
						     <input id="gender" name="gender" type="radio" value="Male"/>
						     Male
						     </label>
						     <label class="radio-inline">
						     <input id="gender" name="gender" type="radio" value="Female"/>
						     Female
						     </label>
					     </div>
			     </div>
				
				Mobile Number:
				<input id="mobileNumber" name="mobileNumber" type="text" class="form-control form-control-sm">
				<br>
				
				E-mail:
				<input id="email" name="email" type="text" class="form-control form-control-sm">
				<br>
				
				Password:
				<input id="password" name="password" type="text" class="form-control form-control-sm">
				<br>
				
				<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
				<a href="patients.jsp" class="btn btn-danger" onclick="" type="button">Clear</a>
				<input type="hidden" id="hidPatientIDSave" name="hidPatientIDSave" value="">
			</form>
			
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br>

				<div id="divPatientsGrid">
					<%
						Patient patientObj = new Patient();
						out.print(patientObj.readPatients());
					%>
				</div>
			
		</div>
	</div>
</div>



</body>
</html>