package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/PatientsAPI")
public class PatientsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Patient patientObj = new Patient();
       
   
    public PatientsAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

 // Convert request parameters to a Map
 		private static Map getParasMap(HttpServletRequest request)
 		{
 			Map<String, String> map = new HashMap<String, String>();
 			
 			try
 			{
 				Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
 				String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
 				scanner.close();
 				
 				String[] params = queryString.split("&");
 				
 				for (String param : params)
 				{
 					String[] p = param.split("=");
 					map.put(p[0], p[1]);
 				}
 			}
 			catch (Exception e)
 			{
 			}
 			
 			return map;
 		}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		//NOT USED
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = patientObj.insertPatient(request.getParameter("username"),
						request.getParameter("address"),
						request.getParameter("nic"),
						request.getParameter("dob"),
						request.getParameter("gender"),
						request.getParameter("mobile_number"),
						request.getParameter("email"),
						request.getParameter("password"));
		
		response.getWriter().write(output);
				
				//(username, address, nic, dob, gender, mobile_number, email, password)
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
