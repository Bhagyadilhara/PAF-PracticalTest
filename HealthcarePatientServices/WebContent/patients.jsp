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
</head>
<body>

<body>
<div class="container">
	<div class="row" >
		<div class="col-6">
			<h1>Patients Management</h1>
			
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
				<input id="dateOfBirth" name="dateOfBirth" type="text" class="form-control form-control-sm">
				<br>
				
				Gender:
				<input id="gender" name="gender" type="text" class="form-control form-control-sm">
				<br>
				
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