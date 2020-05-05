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
	var type = ($("#hidPatientIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "PatientsAPI",
		type : type,
		data : $("#formPatient").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onPatientSaveComplete(response.responseText, status);
		}
	});
});

function onPatientSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			
			$("#divPatientsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#hidPatientIDSave").val("");
	$("#formPatient")[0].reset();
}

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidPatientIDSave").val($(this).closest("tr").find('#hidPatientIDUpdate').val());
	$("#userName").val($(this).closest("tr").find('td:eq(0)').text());
	$("#userAddress").val($(this).closest("tr").find('td:eq(1)').text());
	$("#nicNo").val($(this).closest("tr").find('td:eq(2)').text());
	$("#dateOfBirth").val($(this).closest("tr").find('td:eq(3)').text());
	$("#gender").val($(this).closest("tr").find('td:eq(4)').text());
	$("#mobileNumber").val($(this).closest("tr").find('td:eq(5)').text());
	$("#email").val($(this).closest("tr").find('td:eq(6)').text());
	$("#password").val($(this).closest("tr").find('td:eq(7)').text());
});


//REMOVE==========================================
$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "PatientsAPI",
		type : "DELETE",
		data : "userID=" + $(this).data("userid"),
		dataType : "text",
		complete : function(response, status)
		{
			onPatientDeleteComplete(response.responseText, status);
		}
	});
});

function onPatientDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divPatientsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

//CLIENT-MODEL=================================================================
function validatePatientForm()
{
	
	// USERNAME
	if ($("#userName").val().trim() == "")
	{
		return "Insert Patient Name.";
	}
	
	//ADDRESS
	if ($("#userAddress").val().trim() == "")
	{
		return "Insert Current Address.";
	}
	
	//NIC
	if ($("#nicNo").val().trim() == "")
	{
		return "Insert Valid NIC Number.";
	}
	
	//DOB
	if ($("#dateOfBirth").val().trim() == "")
	{
		return "Insert Date of Birth.";
	}
	
	//GENDER
	if ($("#gender").val().trim() == "")
	{
		return "Insert Gender.";
	}
	
	//MOBILENO-------------------------------
	if ($("#mobileNumber").val().trim() == "")
	{
		return "Insert Mobile Number.";
	}
	// is numerical value
	var tmpMobileNo = $("#mobileNumber").val().trim();
	
	if (!$.isNumeric(tmpMobileNo))
	{
		return "Insert numerical value for Mobile Number.";
	}
	
	//EMAIL
	if ($("#email").val().trim() == "")
	{
		return "Insert E-mail Address.";
	}
	
	//PASSWORD
	if ($("#password").val().trim() == "")
	{
		return "Insert Valid Password.";
	}
	
	return true;
}



