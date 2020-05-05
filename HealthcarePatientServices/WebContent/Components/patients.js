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
	$("#userName").val($(this).closest("tr").find('td:eq(1)').text());
	$("#address").val($(this).closest("tr").find('td:eq(2)').text());
	$("#nic").val($(this).closest("tr").find('td:eq(3)').text());
	$("#dob").val($(this).closest("tr").find('td:eq(4)').text());
	$("#gender").val($(this).closest("tr").find('td:eq(5)').text());
	$("#mobileNo").val($(this).closest("tr").find('td:eq(6)').text());
	$("#email").val($(this).closest("tr").find('td:eq(7)').text());
	$("#password").val($(this).closest("tr").find('td:eq(8)').text());
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
	if ($("#nic").val().trim() == "")
	{
		return "Insert Valid NIC Number.";
	}
	
	//DOB
	if ($("#dob").val().trim() == "")
	{
		return "Insert Date of Birth.";
	}
	
	//GENDER
	if ($("#gender").val().trim() == "")
	{
		return "Insert Gender.";
	}
	
	//MOBILENO
	// is numerical value
	var tmpMobileNo = $("#mobileNo").val().trim();
	
	if (!$.isNumeric(tmpMobileNo))
	{
		return "Insert a numerical value for Mobile No.";
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


