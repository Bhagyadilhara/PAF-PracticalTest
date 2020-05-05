$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validatePatientForm();
	
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var method = ($("#hidPatientIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "PatientsAPI",
		type : method,
		data : $("#formPatient").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onPatientSaveComplete(response.responseText, status);
		}
	});
});





