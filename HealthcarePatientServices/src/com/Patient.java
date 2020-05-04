package com;

import java.sql.*;

public class Patient {

	
	//DB connection----------------------------
	private Connection connect(){
		
		Connection con = null;
				try
					{
					Class.forName("com.mysql.jdbc.Driver");
					//Provide the correct details: DBServer/DBName, username, password
					con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/healthcaredb","root","");
					}
				catch (Exception e){
					e.printStackTrace();
				}
		return con;
	}
	
	
	//view------------------------------------------------------------------------------------------------------------------------
	public String readPatients(){
		
		String output = "";
			try{
				Connection con = connect();
			
			if (con == null){
				return "Error while connecting to the database for reading patients."; 
			}
			// Prepare the html table to be displayed
			output = "<table border=\"1\"><tr>"
					+ "<th>UserID</th>"
					+ "<th>UserName</th>"
					+ "<th>Address</th>"
					+ "<th>NIC</th>"
					+ "<th>Birth Date</th>"
					+ "<th>Gender</th>"
					+ "<th>Mobile No</th>"
					+ "<th>Email</th>"
					+ "<th>Update</th>"
					+ "<th>Remove</th>"
					+ "</tr>";
			
			String query = "select * from patient";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			// iterate through the rows in the result set
			while (rs.next()){
				
				String userID = Integer.toString(rs.getInt("userID"));
				String userName = rs.getString("userName");
				String userAddress = rs.getString("userAddress");
				String nicNo = rs.getString("nicNo");
				String dateOfBirth = rs.getString("dateOfBirth");
				String gender = rs.getString("gender");
				String mobileNumber = rs.getString("mobileNumber");
				String email = rs.getString("email");
				
				// Add into the html table
				output += "<tr><td>" + userID + "</td>";
				output += "<td>" + userName + "</td>";
				output += "<td>" + userAddress + "</td>";
				output += "<td>" + nicNo + "</td>";
				output += "<td>" + dateOfBirth + "</td>";
				output += "<td>" + gender + "</td>";
				output += "<td>" + mobileNumber + "</td>";
				output += "<td>" + email + "</td>";
				
				// buttons
				output += "<td><input name='btnUpdate'type='button' "
						+ "value='Update'class='btnUpdate btn btn-secondary'></td>"
						+ "<td><input name='btnRemove'type='button' "
						+ "value='Remove'class='btnRemove btn btn-danger'data-userid='"+ userID + "'>" + "</td></tr>";
			}
			con.close();
			// Complete the html table
			output += "</table>";
			}
			catch (Exception e){
				output = "Error while reading the patients info.";
				System.err.println(e.getMessage());
			}
			
	return output;
	
	}
	
	
	
	
	
}
